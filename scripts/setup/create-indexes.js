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
