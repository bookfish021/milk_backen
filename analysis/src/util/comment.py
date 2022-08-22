from util.connect_mongo import Mongodb

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
    
    def getPositiveComments(self, productName=None, num=5):
        projection = dict()
        filter = None
        
        if productName is not None:
            filter = dict()
            filter['productName'] = productName
        
        projection['productName'] = 1
        for term in Comment.TERMS:
            projection[term + 'Positive'] = 1
        
        result = self.__get(filter=filter, projection=projection)

        return result.limit(num)
    
    def getNegativeComments(self, num=5):
        projection = dict()
        
        projection['productName'] = 1
        for term in Comment.TERMS:
            projection[term + 'Negative'] = 1
        
        result = self.__get(projection=projection)

        return result.limit(num)
