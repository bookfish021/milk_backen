from util.connect_mongo import Mongodb
import random

class Comment(object):
    TERMS = [
        'aroma',
        'flavor',
        'sweetness',
        'body',
        'texture',
        'aftertaste',
        'balance',
    ]

    COLLECTIONS = [
        'expertcomments',
        'normalcomments'
    ]
    
    def __init__(self, collection='expertcomments') -> None:
        if collection not in Comment.COLLECTIONS:
            raise Exception('this colleciton is not allowed or does not exist')

        self.__collection = collection
        
    def __get(self, filter=None, projection=None):
        return Mongodb.find(self.__collection, filter, projection)
    
    def __getOne(self, filter=None, projection=None):
        return Mongodb.find_one(self.__collection, filter, projection)
    
    def getProductName(self):
        return Mongodb.distinct(self.__collection, 'productName')
    
    def getRandomNumberComments(self, isPos=True, productName=None, num=5):
        projection = dict()
        filter = None
        
        if productName is not None:
            filter = dict()
            filter['productName'] = productName
            
        evaluation = 'Positive' if isPos is True else 'Negative'
        
        projection['productName'] = 1
        for term in Comment.TERMS:
            projection[term + evaluation] = 1

        comments = list()
        results = list(self.__get(filter=filter, projection=projection))
        count = len(results)
        for i in range(num):
            skip = random.randint(0, count-1)
            result = results[skip]
            for term in Comment.TERMS:
                comments.extend(result[term + evaluation])
                
        return comments
