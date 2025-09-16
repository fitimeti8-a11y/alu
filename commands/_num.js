/*CMD
  command: /num
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

if (chat.chat_type != "group" && chat.chat_type != "supergroup") {
  Bot.sendMessage("❌ This command works only in group. Please use this in our group @IntelXGroup.");
  return;
}
  var credits = Libs.ResourcesLib.userRes("credits");

  if (credits.value() < 1) {
    
    var ms = "❌ You don't have any credits, Click below button to get free 50 credits for today. ✅️";
    Api.sendMessage({
    chat_id: chat.chatid,
    text: ms,
    parse_mode: "HTML",
    reply_to_message_id: request.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "👆 Click To Get 50 Credits", callback_data: "30c" }],[
          { text: "👥️ Use Privately ", url: "https://t.me.encorexosint_bot?start" }
        ]
      ]
    }
  });   
  }else{

// --- Command logic ---
  // 👉 Actual command action
     var phoneNumber = params; // User's 10-digit phone number
    var apiUrl = "http://osintx.info/API/krobetahack.php?key=P6NW6D1&type=mobile&term=" + phoneNumber;
 // Replace with your actual API endpoint

    HTTP.get({
        url: apiUrl,
        success: "next" // Callback command on successful API response
    });

  }
