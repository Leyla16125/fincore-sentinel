// Sample customers for local development and MongoDB query testing.

const database = db.getSiblingDB("fincore_sentinel");

const sampleCustomerIds = [
  "CUS-1001",
  "CUS-1002",
  "CUS-1003"
];

// Remove only the sample customers before inserting them again.
database.customers.deleteMany({
  customer_id: {
    $in: sampleCustomerIds
  }
});

const result = database.customers.insertMany([
  {
    customer_id: "CUS-1001",
    full_name: "Leyla Huseynova",
    birth_date: ISODate("2004-10-12T00:00:00Z"),
    country: "Azerbaijan",
    risk_level: "low",
    is_active: true,
    created_at: ISODate("2026-08-05T12:00:00Z")
  },
  {
    customer_id: "CUS-1002",
    full_name: "Adila Huseynli",
    birth_date: ISODate("1998-06-20T00:00:00Z"),
    country: "Azerbaijan",
    risk_level: "medium",
    is_active: true,
    created_at: ISODate("2026-08-05T12:05:00Z")
  },
  {
    customer_id: "CUS-1003",
    full_name: "Ali Asadli",
    birth_date: ISODate("1995-03-08T00:00:00Z"),
    country: "Turkey",
    risk_level: "high",
    is_active: false,
    created_at: ISODate("2026-08-05T12:10:00Z")
  }
]);

print("Customers inserted successfully:");
printjson(result);