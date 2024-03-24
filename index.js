const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "",
  prefix: "$getGuildVar[prefix]",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

client.loadCommands("./commands/", true); 
  

client.variables ({ 
    prefix: "!",
})

client.readyCommand({
    code: `
    $log[$userDisplayName[$clientID] aktif.]
    $setStatus[🔥︲Döviz Botu︲HamsterMert;PLAYING;online]
    `
})

