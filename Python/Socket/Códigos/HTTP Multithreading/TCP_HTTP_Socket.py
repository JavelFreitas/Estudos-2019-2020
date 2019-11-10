#import socket module
from socket import *
from _thread import *
import time
import sys # para terminar o programa



serverSocket = socket(AF_INET, SOCK_STREAM)
#Prepara o socket servidor

#codigo_inicio
HOST = ''
PORT = 8087
serverSocket.bind((HOST, PORT))
serverSocket.listen(5)
#codigo_fim


def responderCliente(message):
    try:
        filename = message.decode().split()[1]
        f = open(filename[1:])
        outputdata = f.readlines()
        #codigo_inicio
        #codigo_fim
        
        #Envia um linha de cabeçalho HTTP para o socket
        #codigo_inicio
        connectionSocket.send('HTTP/1.0 200 OK \n'.encode())
        connectionSocket.send('Content-type:text/html \n\n'.encode())
        #codigo_fim
        #Envia o conteúdo do arquivo solicitado ao cliente
        for i in range(0, len(outputdata)):
            connectionSocket.send(outputdata[i].encode())
        connectionSocket.send("\r\n".encode())
        connectionSocket.close()    
        pass
    except IOError:
        #Envia uma mensagem de resposta “File not Found”

        #codigo_inicio
        connectionSocket.send('HTTP/1.0 200 OK\n'.encode())
        connectionSocket.send('Content-type: text/html\n\n'.encode())
        connectionSocket.send('<html lang="en">'.encode())
        connectionSocket.send('<body>'.encode())
        connectionSocket.send('404 - File Not Found'.encode())
        connectionSocket.send('</body>'.encode())
        connectionSocket.send('</html>\r\n'.encode())
        #codigo_fim

        #Fecha o socket cliente
        #codigo_inicio
        connectionSocket.close()
        #codigo_fim
        serverSocket.close()
        sys.exit()
    except OSError:
        #Envia uma mensagem de resposta “File not Found”

        #codigo_inicio
        connectionSocket.send('HTTP/1.0 200 OK\n'.encode())
        connectionSocket.send('Content-type: text/html\n\n'.encode())
        connectionSocket.send('<html lang="en">'.encode())
        connectionSocket.send('<body>'.encode())
        connectionSocket.send('404 - File Not Found'.encode())
        connectionSocket.send('</body>'.encode())
        connectionSocket.send('</html>\r\n'.encode())
        #codigo_fim

        #Fecha o socket cliente
        #codigo_inicio
        connectionSocket.close()
        #codigo_fim
        serverSocket.close()
        sys.exit()

while True:
    #Estabelece a conexão
    print('Ready to serve...')
    connectionSocket = 1
    connectionSocket, addr = serverSocket.accept()
    #codigo_fim
    if (connectionSocket != 1):
        start_new_thread(responderCliente, (connectionSocket.recv(1024), ))
serverSocket.close()
sys.exit()#Termina o programa depois de enviar os dados