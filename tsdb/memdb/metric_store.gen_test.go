// Licensed to LinDB under one or more contributor
// license agreements. See the NOTICE file distributed with
// this work for additional information regarding copyright
// ownership. LinDB licenses this file to you under
// the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

// Code generated by tmpl; DO NOT EDIT.
// https://github.com/benbjohnson/tmpl
//
// Source: int_map_test.tmpl

package memdb

import (
	"fmt"
	"testing"

	"github.com/lindb/roaring"
	"github.com/stretchr/testify/assert"
)

// hack test
func _assertMetricStoreData(t *testing.T, keys []uint32, m *MetricStore) {
	for _, key := range keys {
		found, highIdx := m.keys.ContainsAndRankForHigh(key)
		assert.True(t, found)
		lowIdx := m.keys.RankForLow(key, highIdx-1)
		assert.True(t, found)
		assert.NotNil(t, m.values[highIdx-1][lowIdx-1])
	}
}

func TestMetricStore_Put(t *testing.T) {
	m := NewMetricStore()
	m.Put(1, newTimeSeriesStore())
	m.Put(8, newTimeSeriesStore())
	m.Put(3, newTimeSeriesStore())
	m.Put(5, newTimeSeriesStore())
	m.Put(6, newTimeSeriesStore())
	m.Put(7, newTimeSeriesStore())
	m.Put(4, newTimeSeriesStore())
	m.Put(2, newTimeSeriesStore())
	// test insert new high
	m.Put(2000000, newTimeSeriesStore())
	m.Put(2000001, newTimeSeriesStore())
	// test insert new high
	m.Put(200000, newTimeSeriesStore())

	_assertMetricStoreData(t, []uint32{1, 2, 3, 4, 5, 6, 7, 8, 200000, 2000000, 2000001}, m)
	assert.Equal(t, 11, m.Size())
	assert.Len(t, m.Values(), 3)

	err := m.WalkEntry(func(key uint32, value tStoreINTF) error {
		return fmt.Errorf("err")
	})
	assert.Error(t, err)

	keys := []uint32{1, 2, 3, 4, 5, 6, 7, 8, 200000, 2000000, 2000001}
	idx := 0
	err = m.WalkEntry(func(key uint32, value tStoreINTF) error {
		assert.Equal(t, keys[idx], key)
		idx++
		return nil
	})
	assert.NoError(t, err)
}

func TestMetricStore_Get(t *testing.T) {
	m := NewMetricStore()
	_, ok := m.Get(uint32(10))
	assert.False(t, ok)
	m.Put(1, newTimeSeriesStore())
	m.Put(8, newTimeSeriesStore())
	_, ok = m.Get(1)
	assert.True(t, ok)
	_, ok = m.Get(2)
	assert.False(t, ok)
	_, ok = m.Get(0)
	assert.False(t, ok)
	_, ok = m.Get(9)
	assert.False(t, ok)
	_, ok = m.Get(999999)
	assert.False(t, ok)
}

func TestMetricStore_Keys(t *testing.T) {
	m := NewMetricStore()
	m.Put(1, newTimeSeriesStore())
	m.Put(8, newTimeSeriesStore())
	assert.Equal(t, roaring.BitmapOf(1, 8), m.Keys())
}
