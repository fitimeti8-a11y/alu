/*CMD
  command: bal
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

var total_ref = Bot.getProperty("total_ref"+user.telegramid) == undefined ?0:Bot.getProperty("total_ref"+user.telegramid)
var balance = Libs.ResourcesLib.userRes("balance")
var buttons = [[{title:"< Back", command:"/joined"}]]

var now = Math.floor(Date.now()/1000);

// get both values
var untilUser = User.getProperty("access_until");
var untilBot = Bot.getProperty("access_until_" + user.telegramid);

// pick the greater one
var until = 0;
if(untilUser && untilBot){
  until = Math.max(parseInt(untilUser), parseInt(untilBot));
}else if(untilUser){
  until = parseInt(untilUser);
}else if(untilBot){
  until = parseInt(untilBot);
}
var remaining = until - now;
  var hours = Math.floor(remaining/3600);
  var minutes = Math.floor((remaining%3600)/60);
  var days = Math.floor(remaining/86400);
 

Api.editMessageCaption({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
    caption: "*⚠ Your Access will Expire in: "+ hours+" Hours "+ minutes+" minutes\n\n⚜️ You can get extra free time via refer!!!*\n\n*💰 Invite Users And get 24 hours per user. \n\n💹 Your Link* : https://t.me/" +
    bot.name +
    "?start=" +
    user.telegramid +
    "\n\n• You can use this bot in group for free no access time required in group!! @IntelXGroup",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{text:"⚡ Buy Paid Access", callback_data:"buy"}],[{text:"< Back", callback_data:"menu2"}]] }
  })
