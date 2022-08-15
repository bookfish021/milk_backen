from util.connect_mongo import Mongodb

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

    def __init__(self, collection) -> None:
        self.__collection = collection
    
    def cal_all_avg(self):
        pipeline = list()
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
        result = Mongodb.aggregate(self.__collection, pipeline)
        
        return result

