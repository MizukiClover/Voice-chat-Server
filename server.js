const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });
const clients = new Map();

wss.on("connection", (ws) => {
  let clientId = null;

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);
      if (data.type === "join") {
        clientId = data.id;
        clients.set(clientId, ws);

        // Broadcast ke client lain kalau ada peer baru
        for (const [id, client] of clients) {
          if (id !== clientId) {
            client.send(JSON.stringify({ type: "new-peer", id: clientId }));
          }
        }
      }
    } catch (err) {
      console.error("Error parsing message", err);
    }
  });

  ws.on("close", () => {
    if (clientId && clients.has(clientId)) {
      clients.delete(clientId);
      for (const [id, client] of clients) {
        client.send(JSON.stringify({ type: "peer-left", id: clientId }));
      }
    }
  });
});

console.log("🔌 Signaling server running...");