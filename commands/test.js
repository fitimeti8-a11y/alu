/*CMD
  command: test
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

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function sendLongMessage(chat_id, text, parse_mode, reply_markup) {
  var limit = 4000; // safe chunk size
  var parts = [];
  for (var i = 0; i < text.length; i += limit) {
    parts.push(text.substr(i, limit));
  }

  for (var j = 0; j < parts.length; j++) {
    Api.sendMessage({
      chat_id: chat_id,
      text: parts[j],
      parse_mode: parse_mode,
      reply_markup: (j == parts.length - 1 ? reply_markup : undefined)
    });
  }
}

if (isJsonString(content)) {
  var parsed = JSON.parse(content);

  // pretty-print JSON
  var prettyJson = JSON.stringify(parsed, null, 2);

  // escape special chars for HTML safety
  var safeJson = escapeHtml(prettyJson);

  // deduct credits
  var credits = Libs.ResourcesLib.userRes("credits");
  credits.add(-1);

  var msg = "📲 Mobile Info Result:\n\n" +
            "<pre>" + safeJson + "</pre>\n\n" +
            "📊 Your remaining credits: " + credits.value() + "/30";

  sendLongMessage(chat.chatid, msg, "HTML", {
    inline_keyboard: [
      [
        { text: "🤫 Use Privately", url: "https://t.me/encorexosint" }
      ],
      [
        { text: "➕️ Add me to Your Group", url: "https://t.me/encorexosint?startgroup=true" }
      ]
    ]
  });

} else {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: "⚠️ Error: API is not working.\nJoin @A1BlackHats for further updates.",
    reply_to_message_id: request.message_id
  });
}

