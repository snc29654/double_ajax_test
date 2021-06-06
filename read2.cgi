#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
import json
import signal
from contextlib import closing
#double_file = open("double2.txt", mode="w")
print("Content-type: application/json")
print("\n\n")
data = sys.stdin.read()
params = json.loads(data)
text1 = params['text1']
#try:
#    double_file.write(text1.encode("utf-8"))
#finally:
#    double_file.close()
f = open("double2.txt", "r")
text1=f.read()
f.close()
result = {'text1':text1}
print(json.JSONEncoder().encode(result))
#print(result)
print('\n')
