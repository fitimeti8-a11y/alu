/*CMD
  command: /vnum1
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

  var msg = "🚗 Vehicle Number Details:\n\n" +
            "```json\n" + prettyJson + "\n```";

  Api.sendMessage({
    chat_id: chat.chatid,
    text: msg,
    parse_mode: "Markdown",
    reply_to_message_id: request.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🤫 Use Privately", url: "https://t.me/A1Infobot" }],[
          { text: "➕️ Add me to Your Group", url: "https://t.me/A1infobot?startgroup=true" }
        ]
      ]
    }
  });

} else {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: "⚠️ Error: API is not working.\n Join @A1BlackHats for further updates.",
    reply_to_message_id: request.message_id
  });
}

