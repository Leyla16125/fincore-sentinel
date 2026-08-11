from app.database import database


transactions_collection = database["transaction_events"]


def get_transaction_by_id(transaction_id):
    transaction = transactions_collection.find_one({
        "transaction_id": transaction_id
    })

    return transaction


def get_transactions_by_customer_id(customer_id):
    transactions = transactions_collection.find({
        "customer_id": customer_id
    })

    return transactions


def create_transaction(transaction_data):
    result = transactions_collection.insert_one(transaction_data)

    return result


def update_transaction_status(transaction_id, status):
    result = transactions_collection.update_one(
        {"transaction_id": transaction_id},
        {"$set": {"status": status}}
    )

    return result