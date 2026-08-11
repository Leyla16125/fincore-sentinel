// Database indexes required by FinCore Sentinel.

const database = db.getSiblingDB("fincore_sentinel");

database.customers.createIndex(
  { customer_id: 1 },
  { unique: true }
);

database.transaction_events.createIndex(
  { transaction_id: 1 },
  { unique: true }
);

database.transaction_events.createIndex(
  { customer_id: 1 }
);

database.transaction_events.createIndex(
  { customer_id: 1, status: 1 }
);

print("FinCore Sentinel indexes are ready.");


database.alerts.createIndex(
  { alert_id: 1 },
  { unique: true }
);

database.alerts.createIndex(
  { transaction_id: 1 },
  { unique: true }
);

database.alerts.createIndex(
  { customer_id: 1, status: 1 }
);

database.alerts.createIndex(
  { severity: 1, status: 1 }
);


database.cases.createIndex(
  { case_id: 1 },
  { unique: true }
);

database.cases.createIndex(
  { alert_id: 1 },
  { unique: true }
);

database.cases.createIndex(
  { customer_id: 1, status: 1 }
);


database.audit_logs.createIndex(
  { log_id: 1 },
  { unique: true }
);

database.audit_logs.createIndex(
  { entity_type: 1, entity_id: 1, created_at: -1 }
);


