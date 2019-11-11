#import socket module
from socket import *
from _thread import *
import time
import sys # para terminar o programa



serverSocket = socket(AF_INET, SOCK_STREAM)
#Prepara o socket servidor

#codigo_inicio
HOST = ''
PORT = 8090
serverSocket.bind((HOST, PORT))
serverSocket.listen(10)
#codigo_fim


def responderCliente(connectionSocket):
    try:
        message = connectionSocket.recv(1024)
        message = message.decode()
        filename = message.split()[1]
        
        if filename[1:] != "favicon.ico":
            f = open(filename[1:], "rb")
            outputdata = f.read()

            resposta = 'HTTP/1.0 200 OK \n'.encode()
            resposta += 'Content-type:text/html \n\n'.encode()
            #codigo_fim
            #Envia o conteúdo do arquivo solicitado ao cliente
            resposta += outputdata
            connectionSocket.send(resposta)
        connectionSocket.close()    
        pass
    except IOError:
        #Envia uma mensagem de resposta “File not Found”

        resposta = 'HTTP/1.0 404\n'
        resposta += 'Content-type: text/html\n\n'
        resposta += '<html lang="en">'
        resposta += '<body>'
        resposta += '404 - File Not Found'
        resposta += '</body>'
        resposta += '</html>\r\n'
        connectionSocket.send(resposta.encode())

        connectionSocket.close()

    except FileNotFoundError:
        print("File not Found")
        resposta = 'HTTP/1.0 404\n'
        resposta += 'Content-type: text/html\n\n'
        resposta += '<html lang="en">'
        resposta += '<body>'
        resposta += '404 - File Not Found'
        resposta += '</body>'
        resposta += '</html>\r\n'
        connectionSocket.send(resposta.encode())

        connectionSocket.close()

while True:
    #Estabelece a conexão
    print('Ready to serve...')
    try:
        connectionSocket, addr = serverSocket.accept()
        print("@   Comecando uma thread")
        start_new_thread(responderCliente, (connectionSocket, ))
    except OSError:
        serverSocket.close()
serverSocket.close()
sys.exit() #Termina o programa depois de enviar os dados