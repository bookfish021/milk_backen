from util.analysis import Analysis
from util.comment import Comment
from util.connect_mongo import Mongodb
from dotenv import dotenv_values
from datetime import datetime
import json
import argparse

def dumpResult(result, path):
    file = open(path, 'w')
    json.dump(result, file)
    file.close()

def genResult(args):
    collection = 'expertcomments' if args.role == 'expert' else 'normalcomments'
    path = './history/result.json'
    result = dict()
    
    c = Comment(collection)
    a = Analysis(collection)
    productNames = c.getProductName()
    for productName in productNames:
        result[productName] = dict()
        # get positive comments
        posComments = c.getRandomNumberComments(productName=productName)
        result[productName]['positive'] = posComments
        # get negative comments
        negComments = c.getRandomNumberComments(isPos=False, productName=productName)
        result[productName]['negative'] = negComments
        # get product score
        avgScore = list(a.cal_avg(productName))[0]
        for term in Analysis.TERMS:
            result[productName]['avg_' + term] = avgScore['avg_' + term]
    # gen result json file
    dumpResult(result, path)

if __name__ == '__main__':
    config = dotenv_values('.env.dev')
    
    parser = argparse.ArgumentParser()
    parser.add_argument('--role', '-r', type=str, dest='role', help='assign which collection to be calculated', default='expert')
    parser.add_argument('--start', type=str, dest='start', help='set start time of interval [YYYY-MM-DD]')
    parser.add_argument('--end', type=str, dest='end', help='set end time of interval [YYYY-MM-DD]')
    args = parser.parse_args()
    
    # initialize db
    Mongodb.initialize(config['MONGO_URI'], config['MONGO_DATABASE'])

    genResult(args)