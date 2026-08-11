const database = db.getSiblingDB("fincore_sentinel");

database.runCommand({
  collMod: "transaction_events",

  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: [
        "transaction_id",
        "customer_id",
        "type",
        "amount",
        "currency",
        "status",
        "risk_signals",
        "created_at"
      ],

      properties: {
        transaction_id: {
          bsonType: "string"
        },

        customer_id: {
          bsonType: "string"
        },

        type: {
          bsonType: "string"
        },

        amount: {
          bsonType: "decimal"
        },

        currency: {
          bsonType: "string"
        },

        status: {
          bsonType: "string",
          enum: [
            "pending",
            "processing",
            "completed",
            "declined",
            "failed"
          ]
        },

        risk_signals: {
          bsonType: "array",
          items: {
            bsonType: "string"
          }
        },

        created_at: {
          bsonType: "date"
        },

        source: {
          bsonType: "string"
        },

        device: {
          bsonType: "object",

          properties: {
            device_id: {
              bsonType: "string"
            },

            model: {
              bsonType: "string"
            },

            device_type: {
              bsonType: "string"
            },

            operating_system: {
              bsonType: "string"
            },

            browser: {
              bsonType: "string"
            }
          }
        },

        location: {
          bsonType: "object",

          required: [
            "country"
          ],

          properties: {
            country: {
              bsonType: "string"
            },

            city: {
              bsonType: "string"
            },

            ip_address: {
              bsonType: "string"
            }
          }
        }
      }
    }
  },

  validationLevel: "strict",
  validationAction: "error"
});

print("transaction_events validation applied");


database.runCommand({
  collMod: "customers",

  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: [
        "customer_id",
        "full_name",
        "country",
        "risk_level",
        "is_active",
        "created_at"
      ],

      properties: {
        customer_id: {
          bsonType: "string"
        },

        full_name: {
          bsonType: "string"
        },

        birth_date: {
          bsonType: "date"
        },

        country: {
          bsonType: "string"
        },

        risk_level: {
          bsonType: "string",
          enum: [
            "low",
            "medium",
            "high"
          ]
        },

        is_active: {
          bsonType: "bool"
        },

        known_devices: {
          bsonType: "array",
          items: {
            bsonType: "string"
          }
        },

        requires_review: {
          bsonType: "bool"
        },

        created_at: {
          bsonType: "date"
        },

        updated_at: {
          bsonType: "date"
        },

        deleted_at: {
          bsonType: "date"
        }
      }
    }
  },

  validationLevel: "strict",
  validationAction: "error"
});

print("customers validation applied");