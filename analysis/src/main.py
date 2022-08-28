from util.analysis import Analysis
from util.comment import Comment
from util.connect_mongo import Mongodb
from dotenv import dotenv_values
from datetime import datetime
import json
import argparse

def dumpAvgResult(results, path):
    l = list()
    for result in results:
        d = dict()
        d['product_name'] = result['_id']
        for term in Analysis.TERMS:
            d['avg_' + term] = result['avg_' + term]
        l.append(d)

    file = open(path, 'w')
    json.dump(l, file)
    file.close()

def dumpCommentResult(results, path, which='Positive'):
    l = list()
    for result in results:
        d = dict()
        d['productName'] = result['productName']
        for term in Comment.TERMS:
            d[term + which] = result[term + which]
        l.append(d)
        
    file = open(path, 'w')
    json.dump(l, file)
    file.close()

def calAvg(args):
    path = str()
    collection = str()
    match = None

    if (args.role == 'expert'):
        path = './history/expert.json'
        collection = 'expertcomments'
    elif (args.role == 'role'):
        path = './history/normal.json'
        collection = 'normalcomments'
    else:
        raise Exception('no such role in the database')

    if (args.start is not None and args.end is not None):
        startTime = datetime.strptime(args.start, '%Y-%m-%d')
        endTime = datetime.strptime(args.end, '%Y-%m-%d')
        match = {
            '$match': {
                'createdAt': {
                    '$gte': startTime,
                    '$lt': endTime,
                }
            }
        }
    elif (args.start is not None):
        startTime = datetime.strptime(args.start, '%Y-%m-%d')
        match = {
            '$match': {
                'createdAt': {
                    '$gte': startTime,
                }
            }
        }
    elif (args.end is not None):
        endTime = datetime.strptime(args.end, '%Y-%m-%d')
        match = {
            '$match': {
                'createdAt': {
                    '$lt': endTime,
                }
            }
        }

    a = Analysis(collection)
    result = a.cal_avg(match)
    dumpAvgResult(result, path)

def getComment(args):
    path = str()
    collection = str()
    
    if (args.role == 'expert'):
        path = './history/goodexpertcomment.json'
        collection = 'expertcomments'
    elif (args.role == 'normal'):
        path = './history/goodnormalcomment.json'
        collection = 'normalcomments'
    else:
        raise Exception('no such role in this database')
    
    c = Comment(collection)
    result = c.getPositiveComments(num=3)
    dumpCommentResult(result, path)
    

if __name__ == '__main__':
    config = dotenv_values('.env.dev')
    
    parser = argparse.ArgumentParser()
    parser.add_argument('--action', '-a', type=str, dest='action', help='specify the action to be executed, [calculate, comment]', required=True)
    parser.add_argument('--role', '-r', type=str, dest='role', help='assign which collection to be calculated', default='expert')
    parser.add_argument('--start', type=str, dest='start', help='set start time of interval [YYYY-MM-DD]')
    parser.add_argument('--end', type=str, dest='end', help='set end time of interval [YYYY-MM-DD]')
    args = parser.parse_args()
    
    # initialize db
    Mongodb.initialize(config['MONGO_URI'], config['MONGO_DATABASE'])
    
    if (args.action == 'calculate'):
        calAvg(args)
    elif (args.action == 'comment'):
        getComment(args)
    else:
        raise Exception("Invalid action, please specify which action to be executed.")
