from util.connect_mongo import Mongodb
from datetime import datetime

class Analysis(object):
    TERMS = [
        'score',
        'aromaScore',
        'flavorScore',
        'sweetnessScore',
        'bodyScore',
        'textureScore',
        'aftertasteScore',
        'balanceScore',
        'defectScore'
    ]
    
    COLLECTIONS = [
        'expertcomments',
        'normalcomments'
    ]

    def __init__(self, collection='expertcomments') -> None:
        if collection not in Analysis.COLLECTIONS:
            raise Exception('this collection is not allowed or does not exist')

        self.__collection = collection
        
    def __cal(self, pipeline):
        if (len(pipeline) <= 0): 
            raise Exception("no pipeline argument provided")
    
        return Mongodb.aggregate(self.__collection, pipeline)
      
    def cal_avg(self, match=None):
        pipeline = list()

        if match is not None:
            pipeline.append(match)
        
        group = {
            '$group': {
                '_id': '$productName'
            }
        }
        
        for term in Analysis.TERMS:
            group['$group']['avg_' + term] = {
                '$avg': f'${term}'
            }
        
        pipeline.append(group)
        
        return self.__cal(pipeline)
