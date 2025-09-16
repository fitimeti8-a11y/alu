/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔎 search information 🔍
  group: 
CMD*/

/*CMD
  command: /start
  help: start handler with parameter
  need_reply: false
  auto_retry_time:
  folder: system
CMD*/

if(params=="redeem"){
  Bot.runCommand("/redeem");
}else{

if (request.chat && request.chat.type == "group") {
  Api.sendMessage({
    chat_id: request.chat.id,
    text: "👋 Hello everyone! Thanks for adding me to this group.\n\nMake sure i am admin here so that i can work properly.\n\n\n🤙Group Commands: \n/num - To extract details from any indian number.\n_Example: /num 9999999999_\n\n/tg - To Extract User details from Telegram Userid\n_Example: /tg 11111111_",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "ℹ️ Help", callback_data: "help" },
          { text: "⚙️ Settings", callback_data: "settings" }
        ],
        [
          { text: "📢 Channel", url: "https://t.me/yourchannel" }
        ]
      ]
    }
  });
}
 else {
 // First send the photo with caption and buttons
Api.sendPhoto({
  photo: "https://ibb.co/6d86df6", // <-- replace with your image URL
  caption:
    "<code>Hey there " + user.first_name + " and welcome to</code> <b>A¹ Information Bot</b>\n\n<u>⚠ Due to high traffic, only our channel subscribers can use this bot. </u>👇",
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "JOIN",
          url: "https://t.me/BreachedDBxencore"
        },
        {
          text: "JOIN",
          url: "https://t.me/A1blackhats"
        }
      ],
      [
        {
          text: "JOIN",
          url: "https://t.me/Intelxgroup"
        }
      ],
      [
        {
          text: "Joined ✅",
          callback_data: "/joined"
        }
      ]
    ]
  }
});


var hh = user.username != undefined ? "[@"+ user.username + "]" : "";

// Command: /start

if (!User.getProperty("isStarte")) {
  // First time user started the bot
  User.setProperty("isStarte", true, "boolean");

  // Increase global user counter
  var totalUser = Bot.getProperty("totalUser", 0);
  totalUser++;
  Bot.setProperty("totalUser", totalUser, "integer");

  // User details
  var name = user.first_name;
  var username = user.username ? "@" + user.username : "(no username)";
  var userid = user.telegramid;

 
// Send welcome message to user
Api.sendMessage({
  chat_id: "@encorexlog",
  text: "📢 New User started the @encorexosint\n\n" +
                "👤 Name: " + name + "\n" +
                "🔗 Username: " + username + "\n" +
                "🆔 UserID: " + userid + "\n\n" +
                "📊 Total Users: " + totalUser
,
  parse_mode: "Markdown",
  reply_markup: {inline_keyboard: [[{text: "Bot Link", url: "https://t.me/encorexlog"}]]}
})
}
/*CMD
  command: /start
  help: Start command with referral
  need_reply: no
  auto_retry_time: 
  folder: 
  answer: Welcome!
  keyboard: 
  aliases: 
CMD*/

if (params) {
if (params == user.telegramid) {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: `🤧 <i>Do not Use Your Referral Link To earn, Share it with Your Friends!</i>`,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🙂 Refer",
              url:
                "https://t.me/share/url?text=https://t.me/" +
                bot.name +
                "?start=" +
                user.telegramid
            }
          ]
        ]
      }
    })
  return}
  if (User.getProperty("sdone") != undefined) {
    Bot.sendMessage("_🤧 You Already Started Bot!_")
   
  }
   else {
    User.setProperty("refer_by", params, "string")
    var total_ref = Bot.getProperty("total_ref" + params)
    if (total_ref == undefined) {
      Bot.setProperty("total_ref" + params, 1, "integer")
    } else {
      Bot.setProperty("total_ref"+params, total_ref + 1, "integer")
    }
  }
}
var sdone = User.getProperty("sdone")
if (!sdone) {
  User.setProperty("sdone", "true", "string")
}

/*var status = Libs.ResourcesLib.anotherChatRes("totalusers", "global")*/

var welco = User.getProperty("welo")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  
}
User.setProperty("welo", user.telegramid, "text")
}
}
