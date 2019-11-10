from socket import *

serverName = '10.0.79.238'

serverPort = 5457

clientSocket = socket(AF_INET, SOCK_STREAM)

clientSocket.connect((serverName, serverPort))
confirmacao = 's'
while (confirmacao == 's'):
    mensagem = str(input('Insira a mensagem \n')).encode()


    #a mensagem deve estar em bytes antes de ser enviada ao buffer de transmissao
    clientSocket.send(mensagem)


    #recebe a resposta do servidor
    mensagem = clientSocket.recv(1024).decode()

    #devemos converter a mensagem de volta para string antes de imprimi-la
    print('Resposta:' , str(mensagem))

    confirmacao = str(input("Se quiser continuar a enviar aperte s\n"))

#fecha a conexao
clientSocket.close()