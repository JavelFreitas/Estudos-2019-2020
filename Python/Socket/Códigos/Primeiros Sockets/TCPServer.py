from socket import *
import datetime
#ANCHOR ta funcionando
serverPort = 5457

serverSocket = socket(AF_INET, SOCK_STREAM)

#atribui a porta ao socket criado
serverSocket.bind(('', serverPort))

#aceita conexoes com no maximo um cliente na fila
serverSocket.listen(1)

print('The server is ready to receive')
connectionSocket, addr = serverSocket.accept()

try:
    while (True):
        #recebe a mensagem do cliente em bytes
        mensagem = connectionSocket.recv(1024).decode()

        uppercase = mensagem.upper()
        now = datetime.datetime.now()
        dataAgora = str(now.hour) + ":" + str(now.minute) + ':' + str(now.second)
        mensagem = "Mensagem: " + uppercase + " Hora: " + str(dataAgora)
        print(mensagem)
        #envio tbm deve ser em bytes
        connectionSocket.send(mensagem.encode())

except:
    print('Algo deu errado')
connectionSocket.close()