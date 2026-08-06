// Sample transaction events for local development and fraud-query testing.

const database = db.getSiblingDB("fincore_sentinel");

const sampleTransactionIds = [
  "TRX-2026-1001",
  "TRX-2026-1002",
  "TRX-2026-1003"
];

// Remove only the sample transactions before inserting them again.
database.transaction_events.deleteMany({
  transaction_id: {
    $in: sampleTransactionIds
  }
});

const result = database.transaction_events.insertMany([
  {
    transaction_id: "TRX-2026-1001",
    customer_id: "CUS-1001",
    type: "bank_transfer",
    amount: Decimal128("250.50"),
    currency: "AZN",
    status: "completed",

    device: {
      device_id: "DEV-1004",
      model: "iPhone 17 Pro Max",
      device_type: "mobile",
      operating_system: "iOS",
      browser: "Safari"
    },

    location: {
      country: "Azerbaijan",
      city: "Baku",
      ip_address: "203.0.113.10"
    },

    risk_signals: [],
    created_at: ISODate("2026-08-05T14:00:00Z"),
    source: "mobile_app"
  },
  {
    transaction_id: "TRX-2026-1002",
    customer_id: "CUS-1002",
    type: "card_payment",
    amount: Decimal128("1500.00"),
    currency: "AZN",
    status: "completed",

    device: {
      device_id: "DEV-1002",
      model: "iPhone 16 Pro",
      device_type: "mobile",
      operating_system: "iOS",
      browser: "Safari"
    },

    location: {
      country: "Azerbaijan",
      city: "Baku",
      ip_address: "203.0.113.20"
    },

    risk_signals: [
      "new_device",
      "high_amount"
    ],

    created_at: ISODate("2026-08-05T14:05:00Z"),
    source: "web_app"
  },
  {
    transaction_id: "TRX-2026-1003",
    customer_id: "CUS-1003",
    type: "card_payment",
    amount: Decimal128("3200.00"),
    currency: "TRY",
    status: "declined",

    device: {
      device_id: "DEV-1003",
      model: "Xiaomi 14",
      device_type: "mobile",
      operating_system: "Android 14",
      browser: "Chrome"
    },

    location: {
      country: "Turkey",
      city: "Istanbul",
      ip_address: "198.51.100.30"
    },

    risk_signals: [
      "new_device",
      "unusual_location",
      "declined_transaction"
    ],

    created_at: ISODate("2026-08-05T14:10:00Z"),
    source: "mobile_app"
  }
]);

print("Transactions inserted successfully:");
printjson(result);