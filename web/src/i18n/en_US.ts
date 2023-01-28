/*
Licensed to LinDB under one or more contributor
license agreements. See the NOTICE file distributed with
this work for additional information regarding copyright
ownership. LinDB licenses this file to you under
the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/
const local = {
  SiderMenu: {
    Overview: "Overview",
    Configuration: "Configuration",
    Search: "Search",
    Explore: "Explore",
    Monitoring: "Monitoring",
    Dashboard: "Dashboard",
    Metadata: "Metadata",
    Replication: "Replication",
    Request: "Request",
    "Log View": "Log View",
    Database: "Database",
    "Logic Database": "Logic Database",
    Storage: "Storage",
    Broker: "Broker",
    "Multiple IDCs": "Multiple IDCs",
  },
  LayoutHeader: {
    language: "EN",
  },
  Overview: {
    rootLiveNodes: "Root Live Nodes",
    brokerLiveNodes: "Broke Live Nodes",
  },
  NodeView: {
    hostIp: "Host IP",
    hostName: "Host Name",
    grpcPort: "GRPC Port",
    httpPort: "HTTP Port",
    title: "Host Information",
    uptime: "Uptime",
    version: "Version",
    cpu: "CPU",
    memory: "Memory",
    nodeId: "Node ID",
  },
  DatabaseView: {
    name: "Name",
    numOfShards: "Num. Of Shard",
    replicaFactor: "Replica Factor",
  },
  CapacityView: {
    total: "Total",
    used: "Used",
    free: "Free",
  },
  BrokerView: {
    brokerClusterList: "Broker Cluster List",
    name: "Name(Namespace)",
    nodeStatus: "Node Status",
  },
  StorageView: {
    name: "Name(Namespace)",
    nodeStatus: "Node Status",
    numOfDatabase: "Num. Of Database",
    replicationStatus: "Replication Status",
    diskCapacityUsage: "Disk Capacity Usage",
    storageClusterList: "Storage Cluster List",
    totalOfReplication: "Total",
    underReplicated: "Under-replicated",
    unavailableReplica: "Unavailable",
    aliveNodes: "Alive Nodes",
    deadNodes: "Dead Nodes",
    liveNodes: "Live Node",
    databaseList: "Database List",
  },
  MasterView: {
    master: "Master",
    electTime: "Elect Time",
  },
  SearchView: {
    database: "Database",
    databaseRequired: "Database required",
    search: "Search",
  },
  DataExploreView: {
    database: "Database",
    namespace: "Namespace",
    metric: "Metrics",
    showLinQL: "Show LinQL",
    metricRequired: "Metric name required",
    field: "Field",
    filterBy: "Filter By",
    groupBy: "Group By",
  },
  ReplicationView: {
    database: "Database",
    replicationStatus: "Replication Status",
    shard: "Shard",
    append: "Append",
    consume: "Consume",
    ack: "Ack",
    lag: "Lag",
    peer: "Peer",
    type: "Type",
    memoryDatabaseStatus: "Memory Database Status",
    node: "Node",
    state: "State",
    uptime: "Uptime",
    memSize: "MemSize",
    numOfMetrics: "Num. Of Metrics",
    numOfSeries: "Num. Of Series",
    noMemoryDatabase: "No memory database",
    replica: "Replica",
    memoryDatabase: "Memory Database",
  },
  LogView: {
    role: "Role",
    storage: "Storage",
    node: "Node",
    file: "file",
    size: "Size",
  },
  RequestView: {
    timestamp: "Timestamp",
    duration: "Duration",
    linQL: "LinQL",
    database: "Database",
    entry: "Node",
    runLinQL: "Run Lin Query language",
  },
  MetadataExploreView: {
    compare: "Compare",
    comparing: "Comparing",
    compareResult1: "Found",
    compareResult2: "nodes, diff",
    compareResult3: "nodes.",
    compareTooltip: "Compare with state matchine's data in memory",
    compareResultTitle: "State Compare Result",
    compareResultDesc:
      "The state(in storage) compare with in state machine(memory)",
    filterNode: "Filter nodes",
  },
  MetadataDatabaseView: {
    name: "Name",
    nameRequired: "Name is required",
    storage: "Storage",
    storageRequired: "Storage is required",
    description: "Description",
    deleteConfirm1: "Are you sure drop [ ",
    deleteConfirm2: " ] database?",
    numOfShards: "Num. Of Shard",
    numOfShardsRequired: "Num. of Shard is required",
    replicaFactor: "Replica Factor",
    replicaFactorRequired: "Replica Factor is required",
    engineOptions: "Storage Engine Options",
    autoCreateNS: "Auto Create Namespace",
    intervals: "Intervals",
    interval: "Interval(Seconds)",
    retention: "Retention(Days)",
    writeableTimeRange: "Writeable Time Range",
    behead: "Behead",
    ahead: "Ahead",
    example: "For Example: [ now()-1h ~ now()+1h ]",
  },
  MetadataLogicDatabaseView: {
    name: "Name",
    nameRequired: "Name is required",
    router: "Router",
    tagKey: "Route Key(Tag Key)",
    tagValues: "Route Values(Tag Values)",
    brokers: "Brokers",
    targetDatabase: "Database",
    deleteConfirm1: "Are you sure drop [ ",
    deleteConfirm2: " ] database?",
  },
  MetadataClusterView: {
    register: "Register",
    name: "Name(Namespace)",
    status: "Status",
    configuration: "Configuration",
    Ready: "Ready",
    Initialize: "Initialize",
    endpoints: "Endpoings(ETCD)",
    username: "Username(ETCD)",
    password: "Password(ETCD)",
    dialTimeout: "Connect Timeout",
    timeout: "Client Handle Timeout",
    timeoutTooltip: "Client handle request timeout",
    leaseTTL: "Lease TTL(Time To Live)",
  },
  MetadataStorageView: {
    recoverConfirmMessage:
      "Are you sure want to recover database configuration from local storage?",
    recoverErrorTitle: "Recover database configuration error",
    recoverSuccessTitle: "Recover database configuration success",
  },
  LinSelectView: {
    placeholder: "Please select",
  },
  TimePicker: {
    from: "From",
    to: "To",
    searchQuickRange: "Search quick ranges",
    applyTimeRange: "Apply time range",
    absoluteTimeRange: "Absolute time range",
    last15Min: "Last 15 Min",
    last30Min: "Last 30 Min",
    last1Hour: "Last 1 hour",
    last3Hour: "Last 3 hours",
    last6Hour: "Last 6 hours",
    last12Hour: "Last 12 hours",
    last1Day: "Last 1 day",
    last2Day: "Last 2 days",
    last3Day: "Last 3 days",
    last7Day: "Last 7 days",
    last15Day: "Last 15 days",
    last30Day: "Last 30 days",
    off: "off",
    "10s": "10s",
    "30s": "30s",
    "1m": "1m",
    "5m": "5m",
  },
  Common: {
    noData: "No data",
    ok: "OK",
    cancel: "Cancel",
    submit: "Submit",
    actions: "Actions",
    create: "Create",
    pleaseConfirm: "Please confirm",
    unknownInternalError: "Unknown internal error",
    loading: "Loading",
  },
};

export default local;
