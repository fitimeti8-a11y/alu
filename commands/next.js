/*CMD
  command: next
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

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

if (isJsonString(content)) {
  var parsed = JSON.parse(content);

  // pretty-print JSON
  var prettyJson = JSON.stringify(parsed, null, 2);
  
  // /mycredits - show remaining credits only (no deduction)

// get today's date in IST (YYYY-MM-DD) with zero-padding
var credits = Libs.ResourcesLib.userRes("credits");
credits.add(-1)

  var msg = "📲 Mobile Info Result:\n\n" +
            "```json\n" + prettyJson + "\n```\n\n📊 Your remaining credits: " + credits.value() + "/30";
  Api.sendMessage({
    chat_id: chat.chatid,
    text: msg,
    parse_mode: "Markdown",
    reply_to_message_id: request.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🤫 Use Privately", url: "https://t.me/encorexosint_bot" }],[
          { text: "➕️ Add me to Your Group", url: "https://t.me/encorexosint_bot?startgroup=true" }
        ]
      ]
    }
  });

} else {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: "⚠️ Error: API is not working.\n Join @BreachedDBxencore for further updates.",
    reply_to_message_id: request.message_id
  });
}

