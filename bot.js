Discord = require("discord.js");
const client = new Discord.Client();
let token = process.env.token;




client.on('ready', () => {
        client.user.setActivity(`Gen.Me Server `, { type: "Watching" });
        setTimeout(game2, 20000)
    });
    
    function game1() {
        client.user.setActivity(`To .gen fortnite/steamkeys/netflix`, { type: "Listening" });
        setTimeout(game2, 20000)
    }
    
    function game2() {
        client.user.setActivity(`To People Who Had Gen PRemium Perms`, { type: "LISTENING" });
        setTimeout(game3, 20000)
    }
    
    function game3() {
       client.user.setActivity(`Watching People Who Had Gen Premium Perms`, { type: "LISTENING" });
        setTimeout(game1, 20000);//these times are in ms, so 30,000 = 30 seconds
    } 

client.on('message', message => {

 
 

  
	
	
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);




        
        
//command handler
let commandfile = client.commands.get(command);
  let alias = client.aliases.get(command);

  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
//end of handler


});

client.login(process.env.token);
