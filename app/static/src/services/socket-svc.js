waClone.service('SocketSvc', SocketSvc);
function SocketSvc() {
    var self = this;
    if (!self._socket) {
        self._socket = io.connect('http://localhost:3000');
    }
    self.on = function (event, callback) {
        self._socket.on(event, callback);
    }
    self.emit = function (event, data) {
        self._socket.emit(event, data);
    }
}
