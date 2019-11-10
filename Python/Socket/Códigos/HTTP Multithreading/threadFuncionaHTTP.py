from socket import *
import sys 

serverSocket = socket(AF_INET, SOCK_STREAM)

HOST = ''
PORT = 8081
serverSocket.bind((HOST, PORT))
serverSocket.listen(3)

while True:

    print('Ready to serve...')
    connectionSocket, addr = serverSocket.accept()
    print("Connected to the server")
    try:
        message = connectionSocket.recv(1024)
        print("Recieve message")
        print(message.decode())
        filename = message.decode().split()[1]
        f = open(filename[1:])
        outputdata = f.readlines()
        print("set output")
        connectionSocket.send('HTTP/1.0 200 OK \n'.encode())
        connectionSocket.send('Content-type:text/html \n\n'.encode())
        for i in range(0, len(outputdata)):
            connectionSocket.send(outputdata[i].encode())

        connectionSocket.send("\r\n".encode())
        connectionSocket.close()
    except IOError:
      
        connectionSocket.send('HTTP/1.0 404\n'.encode())
        connectionSocket.send('Content-type: text/html\n\n'.encode())
        connectionSocket.send('<html lang="en">'.encode())
        connectionSocket.send('<body>'.encode())
        connectionSocket.send('404 - File Not Found'.encode())
        connectionSocket.send('</body>'.encode())
        connectionSocket.send('</html>\r\n'.encode())

        connectionSocket.close()
serverSocket.close()
sys.exit()