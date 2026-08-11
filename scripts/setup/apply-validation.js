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


if (!database.getCollectionNames().includes("alerts")) {
  database.createCollection("alerts");
}

if (!database.getCollectionNames().includes("cases")) {
  database.createCollection("cases");
}

if(!database.getCollectionNames().includes("audit_logs")) {
    database.createCollection("audit_logs");
}


database.runCommand({
  collMod: "alerts",

  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: [
        "alert_id",
        "transaction_id",
        "customer_id",
        "risk_score",
        "risk_signals",
        "severity",
        "status",
        "created_at"
      ],

      properties: {
        alert_id: {
          bsonType: "string"
        },

        transaction_id: {
          bsonType: "string"
        },

        customer_id: {
          bsonType: "string"
        },

        risk_score: {
          bsonType: "int",
          minimum: 0,
          maximum: 100
        },

        risk_signals: {
          bsonType: "array",
          items: {
            bsonType: "string"
          }
        },

        severity: {
          bsonType: "string",
          enum: ["low", "medium", "high", "critical"]
        },

        status: {
          bsonType: "string",
          enum: ["open", "under_review", "resolved", "dismissed"]
        },

        created_at: {
          bsonType: "date"
        },

        resolved_at: {
          bsonType: "date"
        },

        analyst_note: {
          bsonType: "string"
        }
      }
    }
  },

  validationLevel: "strict",
  validationAction: "error"
});

print("alerts validation applied");

database.runCommand({
  collMod: "cases",

  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: [
        "case_id",
        "alert_id",
        "customer_id",
        "status",
        "created_at",
        "updated_at"
      ],

      properties: {
        case_id: {
          bsonType: "string"
        },

        alert_id: {
          bsonType: "string"
        },

        customer_id: {
          bsonType: "string"
        },

        status: {
          bsonType: "string",
          enum: ["open", "investigating", "closed"]
        },

        assigned_to: {
          bsonType: "string"
        },

        resolution: {
          bsonType: "string"
        },

        created_at: {
          bsonType: "date"
        },

        updated_at: {
          bsonType: "date"
        },

        closed_at: {
          bsonType: "date"
        }
      }
    }
  },

  validationLevel: "strict",
  validationAction: "error"
});

print("cases validation applied");

database.runCommand({
  collMod: "audit_logs",

  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: [
        "log_id",
        "entity_type",
        "entity_id",
        "action",
        "actor",
        "created_at"
      ],

      properties: {
        log_id: {
          bsonType: "string"
        },

        entity_type: {
          bsonType: "string"
        },

        entity_id: {
          bsonType: "string"
        },

        action: {
          bsonType: "string"
        },

        actor: {
          bsonType: "string"
        },

        created_at: {
          bsonType: "date"
        },

        metadata: {
          bsonType: "object"
        }
      }
    }
  },

  validationLevel: "strict",
  validationAction: "error"
});

print("audit_logs validation applied");