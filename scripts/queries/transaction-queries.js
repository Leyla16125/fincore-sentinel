// Transaction filtering, projection, sorting and pagination queries.

const database = db.getSiblingDB("fincore_sentinel");


print("\n=== 1. Transactions greater than 1000 ===");

database.transaction_events
  .find(
    {
      amount: {
        $gt: Decimal128("1000.00")
      }
    },
    {
      _id: 0,
      transaction_id: 1,
      customer_id: 1,
      amount: 1,
      currency: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 2. Transactions that are not completed ===");

database.transaction_events
  .find(
    {
      status: {
        $ne: "completed"
      }
    },
    {
      _id: 0,
      transaction_id: 1,
      customer_id: 1,
      status: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 3. Completed or declined transactions ===");

database.transaction_events
  .find(
    {
      status: {
        $in: ["completed", "declined"]
      }
    },
    {
      _id: 0,
      transaction_id: 1,
      status: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 4. Transactions from Turkey ===");

database.transaction_events
  .find(
    {
      "location.country": "Turkey"
    },
    {
      _id: 0,
      transaction_id: 1,
      customer_id: 1,
      location: 1,
      risk_signals: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 5. Transactions containing new_device risk signal ===");

database.transaction_events
  .find(
    {
      risk_signals: "new_device"
    },
    {
      _id: 0,
      transaction_id: 1,
      customer_id: 1,
      risk_signals: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 6. High-value completed transactions ===");

database.transaction_events
  .find(
    {
      amount: {
        $gt: Decimal128("1000.00")
      },
      status: "completed"
    },
    {
      _id: 0,
      transaction_id: 1,
      amount: 1,
      status: 1,
      risk_signals: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 7. Declined transactions or transactions from Turkey ===");

database.transaction_events
  .find(
    {
      $or: [
        {
          status: "declined"
        },
        {
          "location.country": "Turkey"
        }
      ]
    },
    {
      _id: 0,
      transaction_id: 1,
      status: 1,
      location: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 8. Mobile-app transactions in AZN ===");

database.transaction_events
  .find(
    {
      source: "mobile_app",
      currency: "AZN"
    },
    {
      _id: 0,
      transaction_id: 1,
      source: 1,
      currency: 1,
      amount: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 9. Transactions between 200 and 2000 ===");

database.transaction_events
  .find(
    {
      amount: {
        $gte: Decimal128("200.00"),
        $lte: Decimal128("2000.00")
      }
    },
    {
      _id: 0,
      transaction_id: 1,
      amount: 1,
      currency: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 10. Transactions created on 5 August 2026 ===");

database.transaction_events
  .find(
    {
      created_at: {
        $gte: ISODate("2026-08-05T00:00:00Z"),
        $lt: ISODate("2026-08-06T00:00:00Z")
      }
    },
    {
      _id: 0,
      transaction_id: 1,
      created_at: 1,
      amount: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 11. Transactions sorted by amount, highest first ===");

database.transaction_events
  .find(
    {},
    {
      _id: 0,
      transaction_id: 1,
      amount: 1,
      currency: 1
    }
  )
  .sort({
    amount: -1
  })
  .forEach(document => printjson(document));


print("\n=== 12. Two largest transactions ===");

database.transaction_events
  .find(
    {},
    {
      _id: 0,
      transaction_id: 1,
      amount: 1,
      currency: 1
    }
  )
  .sort({
    amount: -1
  })
  .limit(2)
  .forEach(document => printjson(document));


const pageSize = 2;

print("\n=== 13. Pagination: page 1 ===");

database.transaction_events
  .find(
    {},
    {
      _id: 0,
      transaction_id: 1,
      amount: 1,
      created_at: 1
    }
  )
  .sort({
    created_at: 1,
    _id: 1
  })
  .skip(0)
  .limit(pageSize)
  .forEach(document => printjson(document));


print("\n=== 14. Pagination: page 2 ===");

database.transaction_events
  .find(
    {},
    {
      _id: 0,
      transaction_id: 1,
      amount: 1,
      created_at: 1
    }
  )
  .sort({
    created_at: 1,
    _id: 1
  })
  .skip(2)
  .limit(pageSize)
  .forEach(document => printjson(document));


print("\n=== 15. Transaction counts ===");

print(
  "All transactions: " +
  database.transaction_events.countDocuments({})
);

print(
  "Completed transactions: " +
  database.transaction_events.countDocuments({
    status: "completed"
  })
);

print(
  "Declined transactions: " +
  database.transaction_events.countDocuments({
    status: "declined"
  })
);

print(
  "Transactions with new_device risk: " +
  database.transaction_events.countDocuments({
    risk_signals: "new_device"
  })
);