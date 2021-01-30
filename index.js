const {Client} = require("discord-rpc")
const client = new Client({transport: "ipc"})

const config = require("./config")

client.once("ready", () => {
    console.log("Connected to RPC!")
    client.setActivity(config)
})

client.login({clientId: config.clientId})