waClone.service('ChatSvc', ChatSvc);
ChatSvc.$inject = ['SocketSvc'];
function ChatSvc(SocketSvc) {
    var self = this;

    self.sendMessage = function (msgObj) {
        SocketSvc.emit('send-message', msgObj);
    }

    self.onNewMessage = function (callback) {
        SocketSvc.on('get-message', callback);
    }
}
