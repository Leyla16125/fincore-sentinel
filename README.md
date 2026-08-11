# FinCore Sentinel

FinCore Sentinel is a fraud-monitoring project designed to evaluate transaction and activity events, detect suspicious behavior, calculate risk, and support fraud alerts.

The system focuses on event and risk data rather than core banking balances or ledger records. MongoDB is used for flexible event documents containing transaction, device, location, session, and risk information.

## Core capabilities

- Store transaction and customer risk data
- Track device and location context for events
- Apply fraud-risk rules to incoming activity
- Calculate risk signals and scores
- Create and manage fraud alerts
- Prevent duplicate event identifiers
- Support auditability and fraud-analysis reporting

## Technology stack

- MongoDB
- Python
- PyMongo
- Git / GitHub

The Python application layer is added after the MongoDB data model, validation rules, and database setup are finalized.

## Repository structure

```text
fincore-sentinel/
├── docs/
│   ├── data-dictionary.md
│   ├── nosql-decision.md
│   ├── problem-statement.md
│   └── system-requirements.md
├── scripts/
│   ├── seed/
│   │   ├── seed-customers.js
│   │   └── seed-transactions.js
│   └── setup/
│       └── create-indexes.js
├── .gitignore
└── README.md
```

## Database setup

The `scripts/seed` directory contains synthetic local-development data. The `scripts/setup` directory contains database configuration that is required by the project, such as unique and query-supporting indexes.

Practice-only MongoDB queries are intentionally not stored in the repository. Queries used by the final application will live in the Python application layer or in dedicated project modules when they are introduced.
