waClone.service('ChatSvc', ChatSvc);
ChatSvc.$inject = ['SocketSvc'];
function ChatSvc(SocketSvc) {
    var self = this;

    self.messageToClient = function () {
        SocketSvc.on('message-to-client', (data) => {
            console.log('message to client: ', data);
        });
    }

    self.messageFromServer = function () {
        SocketSvc.emit('message-from-server', {
            token: 'some-awesome-token-here',
            message: 'some message',
        });
    }

}
