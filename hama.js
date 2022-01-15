const Discord = require('discord.js');
 const client = new Discord.Client();

 const ptax =require('probot-tax-calculator');

 client.on("message",message=>{
   if(message.content.startsWith("!tax")){
     let amount=message.content.split(" ").slice(1).join(" ");
     if(!amount) {return message.channel.send("**يرجى ادخال عدد**")}
     let tax=ptax.tax(amount);
     var taxembed=new Discord.MessageEmbed()
     .setTitle("Tax Calculator")
     .addField("**Probot Tax**",`**${tax.protax}**`)
     .addField("**Take Tax**",`**${tax.wasitTax}**`)
     .addField("**Total Taxes**",`**${tax.tax}**`)
     .addField("**Amount To Be Transferred **",`**${tax.all}**`)
     .setFooter("**This package was made by Hama Bs**")
     message.channel.send(taxembed);
     
   }});
 client.on("message",message=>{
   if(message.content.startsWith("!tax")){
     let amount=message.content.split(" ").slice(1).join(" ");
     if(!amount) {return message.channel.send("**يرجى ادخال عدد**")}
     let tax=ptax.tax(amount);
     var taxembed=new Discord.MessageEmbed()
     .setTitle("Tax Calculator")
     .addField("**Probot Tax**",`**${tax.protax}**`)
     .addField("**Take Tax**",`**${tax.wasitTax}**`)
     .addField("**Total Taxes**",`**${tax.tax}**`)
     .addField("**Amount To Be Transferred **",`**${tax.all}**`)
     .setFooter("**This package was made by Hama Bs**")
     message.channel.send(taxembed);
   }});

 client.login("Token")
