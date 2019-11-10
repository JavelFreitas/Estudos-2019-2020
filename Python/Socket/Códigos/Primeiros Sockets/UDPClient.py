from socket import *
serverName = 'localhost'

serverPort = 5601

op = ''
while True:
    mensagem = input("insira uma mensagem ")

    clientSocket = socket(AF_INET, SOCK_DGRAM)

    #a mensagem deve estar em bytes antes de ser enviada ao buffer de transmissao
    clientSocket.sendto(mensagem.encode(),(serverName, serverPort))

    modifiedMessage, serverAddress = clientSocket.recvfrom(2048)

    #devemos converter a mensagem de volta para string antes de imprimi-la
    modifiedMessage = modifiedMessage.decode()
    print(modifiedMessage)
    
    op = input("Se deseja enviar outra mensagem digite [s] ")
    if op != 's':
        break


#fecha a conexao
clientSocket.close()

