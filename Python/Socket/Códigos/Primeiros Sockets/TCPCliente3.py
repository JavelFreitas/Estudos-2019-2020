from socket import *

serverName = 'localhost'

serverPort = 5454

clientSocket = socket(AF_INET, SOCK_STREAM)

clientSocket.connect((serverName, serverPort))
mensagem = 'oi bruno'.encode()


#a mensagem deve estar em bytes antes de ser enviada ao buffer de transmissao
clientSocket.send(mensagem)


#recebe a resposta do servidor
mensagem = clientSocket.recv(1024).decode()

#devemos converter a mensagem de volta para string antes de imprimi-la
print('Resposta:' , str(mensagem))

#fecha a conexao
clientSocket.close()