/*CMD
  command: tg1
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

  // Check if API success
  if (parsed.success && parsed.data) {
    var d = parsed.data;
// Helper function to get today's date in IST
var credits = Libs.ResourcesLib.userRes("credits");
credits.add(-1)

    var msg = "📲 <b>Telegram Info Result</b>\n\n" +
              "👤 <b>First Name:</b> " + (d.first_name || "—") + "\n" +
              "🆔 <b>User ID:</b> <code>" + d.id + "</code>\n" +
              "🤖 <b>Is Bot:</b> " + (d.is_bot ? "✅ Yes" : "❌ No") + "\n" +
              "🟢 <b>Active:</b> " + (d.is_active ? "✅ Yes" : "❌ No") + "\n" +
              "📅 <b>First Message:</b> " + (d.first_msg_date || "—") + "\n" +
              "📅 <b>Last Message:</b> " + (d.last_msg_date || "—") + "\n\n" +
              "💬 <b>Total Messages:</b> " + (d.total_msg_count || 0) + "\n" +
              "👥 <b>Groups:</b> " + (d.total_groups || 0) + "\n" +
              "📨 <b>Messages in Groups:</b> " + (d.msg_in_groups_count || 0) + "\n" +
              "⭐ <b>Admin in Groups:</b> " + (d.adm_in_groups || 0) + "\n\n" +
              "📛 <b>Names Used:</b> " + (d.names_count || 0) + "\n" +
              "🔗 <b>Usernames Used:</b> " + (d.usernames_count || 0)+ "\n\n📊 Your remaining credits: " + credits.value() + "/30";

    Api.sendMessage({
      chat_id: chat.chatid,
      text: msg,
      parse_mode: "HTML",
      reply_to_message_id: request.message_id,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🤫 Use Privately", url: "https://t.me/encorexosint" }
          ],
          [
            { text: "➕️ Add me to Your Group", url: "https://t.me/encorexosint?startgroup=true" }
          ]
        ]
      }
    });

  } else {
    Api.sendMessage({
      chat_id: chat.chatid,
      text: "⚠️ API returned no valid data.",
      reply_to_message_id: request.message_id
    });
  }

} else {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: "⚠️ Error: API is not working.\nJoin @A1BlackHats for further updates.",
    reply_to_message_id: request.message_id
  });
}

