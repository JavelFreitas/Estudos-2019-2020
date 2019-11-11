from socket import *
import sys
import _thread

serverSocket = socket(AF_INET, SOCK_STREAM)

HOST = ''
PORT = 8094
serverSocket.bind((HOST, PORT))
serverSocket.listen(10)

while True:

    print('Ready to serve...')
    connectionSocket, addr = serverSocket.accept()
    
    try:
        print("Começo do try")
        message = connectionSocket.recv(1024).decode()
        
        filename = message.split()[1]
        print(filename)
        f = open(filename[1:],"rb")
        outputdata = f.read()
        
        print("Antes de enviar")
        connectionSocket.send('HTTP/1.0 200 OK \n'.encode())
        connectionSocket.send('Connection: close\r\n'.encode())
        #connectionSocket.send('Content-type:text/html \n\n'.encode())   
        

        
        connectionSocket.send(outputdata)
        connectionSocket.send("\r\n".encode())
        connectionSocket.close()

        print("Final do try")
    except IOError:
        print("Dentro do IOERROR")
        connectionSocket.send('HTTP/1.0 404\n'.encode())
    
        connectionSocket.send('Connection: close\r\n'.encode())
        connectionSocket.close()
    finally:
        print("fechando")
        serverSocket.close()
        sys.exit()
        