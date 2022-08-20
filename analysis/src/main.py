from util.analysis import Analysis
from util.connect_mongo import Mongodb
from dotenv import dotenv_values
import json
import os

if __name__ == '__main__':
    config = dotenv_values('./.env.dev')
    file = open('./history/result.json', 'w')
    mongoURI = config['MONGO_SCHEME'] + '://' + config['MONGO_USERNAME'] + ':' + config['MONGO_PASSWORD'] + '@' + config['MONGO_HOST'] + ':' + config['MONGO_PORT'] + '/' + config['MONGO_DATABASE'] + '?authSource=admin'
    Mongodb.initialize(mongoURI, config['MONGO_DATABASE'])
    a = Analysis('expertcomments')
    results = a.cal_all_avg()
    
    d = dict()
    for result in results:
        d[result['_id']] = dict()
        for term in Analysis.TERMS:
            d[result['_id']]['avg_' + term] = result['avg_' + term]
    json.dump(d, file)
    file.close()
