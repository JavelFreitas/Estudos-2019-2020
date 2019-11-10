import time
from socket import *
    
clientSocket = socket(AF_INET, SOCK_DGRAM)

clientSocket.settimeout(1)

remoteAddr = ('localhost', 12000)

for i in range(10):
    
    commitTime = time.time()
    message = 'PING ' + str((i + 1)) + " " + str(time.strftime("%H:%M:%S"))
    clientSocket.sendto(message.encode(), remoteAddr)
    
    try:
        modifiedMessage, server = clientSocket.recvfrom(1024)
        modifiedMessage = modifiedMessage.decode()
        collectedTime = time.time()
        rtt = collectedTime - commitTime
        print("-----MENSAGEM MODIFICADA: " + str(modifiedMessage) + "\n")
        print("-----Tempo de ida e volta: " + str(rtt) + "\n")
    
    except timeout:
        print("####Tempo Excedido\n")