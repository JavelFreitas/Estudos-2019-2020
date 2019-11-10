from socket import *
serverPort = 5601
serverSocket = socket(AF_INET, SOCK_DGRAM)


#atribui a porta ao socket criado
serverSocket.bind(('', serverPort))
print("The server is ready to receive")
while True:
    #recebe a mensagem do cliente em bytes
    message, clientAddress = serverSocket.recvfrom(2048)
    message = message.decode()
    print(message + '\n')
    message =  "\nMensagem anterior: " + message + "\nResposta: " + input("Insira o que quer mandar de volta ")
    #envio tbm deve ser em bytes
    serverSocket.sendto(message.encode(), clientAddress)