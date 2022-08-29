import pymongo

class Mongodb(object):
    URI = None 
    DATABASE = None
    DATABASE_NAME = None

    @staticmethod
    def initialize(URI, DATABASE_NAME):
        Mongodb.URI = URI
        Mongodb.DATABASE_NAME = DATABASE_NAME
        client = pymongo.MongoClient(Mongodb.URI)
        Mongodb.DATABASE = client[Mongodb.DATABASE_NAME]

    @staticmethod
    def insert_one(collection, data):
        Mongodb.DATABASE[collection].insert_one(data)

    @staticmethod
    def insert_many(collection, datas):
        Mongodb.DATABASE[collection].insert_many(datas)

    @staticmethod
    def find_one(collection, filter, projection=None):
        return Mongodb.DATABASE[collection].find_one(filter, projection)
        
    @staticmethod
    def find(collection, filter=None, projection=None):
        return Mongodb.DATABASE[collection].find(filter, projection)
        
    @staticmethod
    def update_one(collection, filter, data):
        Mongodb.DATABASE[collection].update_one(filter, data)

    @staticmethod
    def delete_one(collection, filter):
        Mongodb.DATABASE[collection].delete_one(filter)
        
    @staticmethod
    def delete_many(collection, filter):
        Mongodb.DATABASE[collection].delete_many(filter)

    @staticmethod
    def aggregate(collection, pipeline):
        return Mongodb.DATABASE[collection].aggregate(pipeline)
    
    @staticmethod
    def distinct(collection, field):
        return Mongodb.DATABASE[collection].distinct(field)
