#!/usr/bin/python
# -*- coding: utf-8 -*-
import time
import sys
import json
import signal
from contextlib import closing
double_file = open("double1.txt", mode="w")
print("Content-type: application/json")
print("\n\n")
data = sys.stdin.read()
params = json.loads(data)
text = params['text']
try:
    double_file.write(text.encode("utf-8"))
finally:
    double_file.close()
f = open("double1.txt", "r")
text=f.read()
f.close()
result = {'text': text}
#time.sleep (10)
print(json.JSONEncoder().encode(result))
#print(result)
print('\n')
