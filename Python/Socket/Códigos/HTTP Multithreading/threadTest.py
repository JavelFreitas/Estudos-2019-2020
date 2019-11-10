#!/usr/bin/python

from _thread import *
import time
import sys

# Define a function for the thread
def print_time( threadName, delay):
   count = 0
   while count < 5:
      time.sleep(delay)
      count += 1
      print ("%s: %s" % ( threadName, time.ctime(time.time()) ))

# Create two threads as follows
try:
    stamp1 = int(input('Digite o tempo para a thread 1'))
    stamp2 = int(input('Digite o tempo para a thread 2'))
    stamp3 = int(input('Digite o tempo para a thread 3'))
    start_new_thread( print_time, ("Thread-1", stamp1, ) )
    start_new_thread( print_time, ("Thread-2", stamp2, ) )
    start_new_thread( print_time, ("Gabriel eh lindo", stamp3, ) )
   
except:
   print ("Error: unable to start thread")

if stamp1 > stamp2 > stamp3:
    time.sleep(stamp1*5 + 1)
elif stamp2 > stamp3 > stamp1:
    time.sleep(stamp2*5 + 1)
else:
    time.sleep(stamp3*5 + 1)
    pass
# podeIr = input('Deseja continuar[s/n]?')



# if podeIr == 's':

#    pass
# else:
    