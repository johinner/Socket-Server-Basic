class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {

      // EScuchar evento: mensaje-to-server
      socket.on("mensaje-to-server", (data) => {
        //console.info('El Cliente emitio algo!')
        console.log(data);

        // io emite a todos los clientes conectados a este servicio
        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
