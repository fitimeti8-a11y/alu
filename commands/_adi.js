/*CMD
  command: /adi
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/* 
  Command: /adi
  Usage: /adi <telegramid> <amount>
  Example: /adi 123456789 50
*/

var adminId = 8241699347; // change this to your own Telegram ID

if(user.telegramid != adminId){
  Bot.sendMessage("🚫 You are not allowed to use this command.");
  return;
}

if(!message){
  Bot.sendMessage("❌ Usage: /adi <telegramid> <amount>");
  return;
}

var parts = message.split(" ");
if(parts.length < 2){
  Bot.sendMessage("❌ Usage: /adi <telegramid> <amount>");
  return;
}

var targetId = parts[1];
var amount = parseFloat(parts[2]);

if(isNaN(amount)){
  Bot.sendMessage("❌ Invalid amount.");
  return;
}

// 🔑 Make sure we use the same resource name: "balance"
var res = Libs.ResourcesLib.anotherUserRes("balance", targetId);
res.add(amount);

Bot.sendMessage(
  "✅ Added *" + amount + "* credits to user `" + targetId + "`.\n" +
  "📊 New balance: *" + res.value() + "*",
  {parse_mode:"Markdown"}
);

