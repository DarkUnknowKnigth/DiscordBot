import env from "dotenv";
import  axios from "axios";
import { Client, Message } from "discord.js";
class Bot{
  private response;
  private city;
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
    this.client.on('message', (msg: Message) => {
      switch (msg.content) {
        case '!ping':
          msg.reply('Pong!');
          break;
        case '!hello':
          msg.reply(`Hello from nodejs: ${msg.author}!`);
          break;
        case '!raining':
          console.log(this.getWeather());
          break;
        default:
          break;
      }
    });
  }
  async getWeather(){
    try{
      this.city = 'chiapas';
      this.response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.WAPI}`);
      return this.response.data;
    } catch (error){
      console.error(error);
    }
  }

}
const client = new Client();
const bot = new Bot(client);