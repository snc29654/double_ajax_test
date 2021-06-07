#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
import json
import signal
from contextlib import closing
print("Content-type: application/json")
print("\n\n")
data = sys.stdin.read()
params = json.loads(data)
f = open("double1.txt", "r")
text=f.read()
f.close()
result = {'text':text}
print(json.JSONEncoder().encode(result))
print('\n')
