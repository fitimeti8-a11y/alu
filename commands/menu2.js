/*CMD
  command: menu2
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

/* Command: /menu */
if(!Bot.getProperty("user_" + user.telegramid)){
  // give 2 free credits
  var now = Math.floor(Date.now()/1000);
var extra = 24 * 60 * 60; // 24 hours

// get current access from both sources
var untilUser = User.getProperty("access_until");
var untilBot = Bot.getProperty("access_until_" + user.telegramid);

var currentUntil = 0;
if(untilUser && untilBot){
  currentUntil = Math.max(parseInt(untilUser), parseInt(untilBot));
}else if(untilUser){
  currentUntil = parseInt(untilUser);
}else if(untilBot){
  currentUntil = parseInt(untilBot);
}

// if expired or never set, start from now
if(!currentUntil || currentUntil < now){
  currentUntil = now;
}

// add 24h
var newUntil = currentUntil + extra;

// save back
User.setProperty("access_until", newUntil, "integer");
Bot.setProperty("access_until_" + user.telegramid, newUntil, "integer");

// show confirmation
var remaining = newUntil - now;
var hours = Math.floor(remaining/3600);
var minutes = Math.floor((remaining%3600)/60);
var days = Math.floor(remaining/86400);

  var balance = Libs.ResourcesLib.userRes("balance");
 

  // mark user as registered
  Bot.setProperty("user_" + user.telegramid, true, "boolean");

  Bot.sendMessage("🎉 Welcome " + user.first_name + "!\n" +
                  "You received *24 Hours Free Access*✅\n",
                  {parse_mode: "Markdown"});
}
let refUser = User.getProperty("refer_by")
if (refUser) {
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser)
  var now = Math.floor(Date.now()/1000);
var extra = 24 * 60 * 60; // 24 hours

// get current access from both sources
var untilUser = User.getProperty("access_until");
var untilBot = Bot.getProperty("access_until_" + user.telegramid);

var currentUntil = 0;
if(untilUser && untilBot){
  currentUntil = Math.max(parseInt(untilUser), parseInt(untilBot));
}else if(untilUser){
  currentUntil = parseInt(untilUser);
}else if(untilBot){
  currentUntil = parseInt(untilBot);
}

// if expired or never set, start from now
if(!currentUntil || currentUntil < now){
  currentUntil = now;
}

// add 24h
var newUntil = currentUntil + extra;

// save back
User.setProperty("access_until", newUntil, "integer");
Bot.setProperty("access_until_" + user.telegramid, newUntil, "integer");

// show confirmation
var remaining = newUntil - now;
var hours = Math.floor(remaining/3600);
var minutes = Math.floor((remaining%3600)/60);
var days = Math.floor(remaining/86400);

  var total_ref = Bot.getProperty("total_ref" + refUser)
  Api.sendMessage({
    chat_id: refUser,
    text: " 🙋 *User : @"+user.username+" Successfully joined through your link.*\n\n✅️ *Reward:*You get +24 Hours Access\n\n⏳ Now, Your Access will over in: "+ days + " days "+ (hours%24) + " hours " + minutes + " minutes",
    parse_mode: "Markdown"
  })
  User.setProperty("refer_by", null)
}
var balance = Libs.ResourcesLib.userRes("balance")
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
Api.editMessageMedia({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://ibb.co/6d86df6",
    caption: "✅ Your Access Will Expire in: "  + days + " days "+ hours%24 +" hours  "+ minutes +" minutes\n\nThis is an Advanced OSINT Bot\n\n>You Can search informations from various methods\n\nClick Below to use 👇",
    parse_mode: "Markdown"
  },
  reply_markup: {
    inline_keyboard: [
      [
        { text: "🪪 Search Information", callback_data: "src" }
      ],
      [
        { text: "✅ Get Free Access", callback_data: "bal" }
      ]
    ]
  },
  on_result: "/p"   // callback after sending photo
});
/*CMD
  command: /menu
  help: Main menu
  need_reply: no
  auto_retry_time: 
  folder: 
  answer: 📋 Main Menu
  keyboard: 
  aliases: 
CMD*/


