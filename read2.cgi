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
f = open("double2.txt", "r")
text1=f.read()
f.close()
result = {'text1':text1}
print(json.JSONEncoder().encode(result))
print('\n')
