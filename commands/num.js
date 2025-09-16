/*CMD
  command: num
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🔎 Send Number to search (without+91)

example: 7090803040 ✅
78905 78905 ❌
+917890578905 ❌
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var now = Math.floor(Date.now()/1000);

// fetch expiry from both User + Bot props
var untilUser = User.getProperty("access_until");
var untilBot = Bot.getProperty("access_until_" + user.telegramid);

var until = 0;
if(untilUser && untilBot){
  until = Math.max(parseInt(untilUser), parseInt(untilBot));
}else if(untilUser){
  until = parseInt(untilUser);
}else if(untilBot){
  until = parseInt(untilBot);
}

// if no access or expired -> show alert
if(!until || until <= now){
  try{
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "❌ Your access time has expired.\nGet free access via referral or purchase it. or you can use this bot in group for free",
      show_alert: true
    });
  }catch(e){
    Bot.sendMessage("❌ Your access time has expired.\nGet free access via referral or purchase it.");
  }
  return; // stop here, don't run command logic
}
    var phoneNumber = message; // User's 10-digit phone number
    var apiUrl = "http://osintx.info/API/krobetahack.php?key=P6NW6D1&type=mobile&term=" + phoneNumber;
 // Replace with your actual API endpoint

    HTTP.get({
        url: apiUrl,
        success: "nex1" // Callback command on successful API response
    });

