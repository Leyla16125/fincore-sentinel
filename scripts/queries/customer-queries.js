// Basic customer queries.

const database = db.getSiblingDB("fincore_sentinel");

print("\n=== 1. All customers ===");

database.customers
  .find(
    {},
    {
      _id: 0,
      customer_id: 1,
      full_name: 1,
      country: 1,
      risk_level: 1,
      is_active: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 2. Customer CUS-1001 ===");

printjson(
  database.customers.findOne(
    {
      customer_id: "CUS-1001"
    },
    {
      _id: 0,
      customer_id: 1,
      full_name: 1,
      birth_date: 1,
      country: 1
    }
  )
);


print("\n=== 3. High-risk customers ===");

database.customers
  .find(
    {
      risk_level: "high"
    },
    {
      _id: 0,
      customer_id: 1,
      full_name: 1,
      country: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 4. Inactive customers ===");

database.customers
  .find(
    {
      is_active: false
    },
    {
      _id: 0,
      customer_id: 1,
      full_name: 1,
      risk_level: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 5. Medium-risk customers ===");

database.customers
  .find(
    {
      risk_level: "medium"
    },
    {
      _id: 0,
      full_name: 1,
      country: 1
    }
  )
  .forEach(document => printjson(document));


print("\n=== 6. Total customer count ===");

print(
  database.customers.countDocuments({})
);