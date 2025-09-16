/*CMD
  command: /pak
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

var balance = Libs.ResourcesLib.userRes("balance")
if (balance.value() < 1) {
  
   Api.sendMessage({
    chat_id: chat.chatid,
    text: "🚫 To use this bot, you must have started me in private..",
    parse_mode: "Markdown",
    reply_to_message_id: request.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Start The Bot", url: "https://t.me/A1InfoBot?start=8386452466" }],[
          { text: "➕️ Add me to Your Group", url: "https://t.me/A1infobot?startgroup=true" }
        ]
      ]
    }
  });
  return
} 
    var phoneNumber = params; // User's 10-digit phone number
    var apiUrl = "https://pkmkb.free.nf/api.php?number=" + phoneNumber+"i=1";
 // Replace with your actual API endpoint

    HTTP.get({
        url: apiUrl,
        success: "pak1" // Callback command on successful API response
    });

