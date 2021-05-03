import env from "dotenv";
import { Client } from "discord.js";
class Bot{
  constructor(private client: Client){
    env.config();
    console.log('Bot Initialized');
    this.loadEvents();
    this.loadCredentials();
  }
  loadCredentials(){
    this.client.login(process.env.DISCORD_TOKEN);
  }  
  loadEvents(){
    this.client.on('ready', ()=>{
      console.log(`Logged in as ${client.user.tag}!`);
    });
    this.client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply('Pong!');
      }
    });
  }

}
const client = new Client();
const bot = new Bot(client);