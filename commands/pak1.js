/*CMD
  command: pak1
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

  if (parsed.status == "success" && parsed.data && parsed.data.length > 0) {
    var d = parsed.data[0];

    var msg = "🗂️ <b>Pakistan Number Information</b>\n\n" +
              "👤 <b>Full Name:</b> " + (d.fullName || "—") + "\n" +
              "👨‍👦 <b>Father's Name:</b> " + (d.fatherName || "—") + "\n" +
              "🎂 <b>Date of Birth:</b> " + (d.dateofBirth || "—") + "\n" +
              "🩸 <b>Blood Group:</b> " + (d.bloodGroup || "—") + "\n\n" +

              "🏢 <b>Department:</b> " + (d.department || "—") + "\n" +
              "📌 <b>Section:</b> " + (d.section || "—") + "\n" +
              "💼 <b>Designation:</b> " + (d.designation || "—") + "\n" +
              "⭐ <b>Grade:</b> " + (d.grade || "—") + "\n" +
              "📅 <b>Joined Service:</b> " + (d.dateofJoiningService || "—") + "\n" +
              "📅 <b>Present Posting:</b> " + (d.dateofPresentPosting || "—") + "\n\n" +

              "🏠 <b>Home Address:</b>\n" + (d.homeAddess || "—") + "\n\n" +

              "📱 <b>Mobile:</b> " + (d.moblePhone || "—") + "\n" +
              "☎️ <b>Emergency Contact:</b> " + (d.emergencyContact || "—") + "\n" +
              "📧 <b>Email:</b> " + (d.email || "—") + "\n\n" +

              "🔖 <b>Personal No:</b> " + (d.personalNO || "—") + "\n" +
              "🏷️ <b>Category:</b> " + (d.category || "—") + "\n\n" +

              "💠 <i>@A1BlackHats</i>";

    Api.sendMessage({
      chat_id: chat.chatid,
      text: msg,
      parse_mode: "HTML",
      reply_to_message_id: request.message_id,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🤫 Use Privately", url: "https://t.me/A1InfoBot?start=8386452466" }
          ],
          [
            { text: "➕ Add me to Your Group", url: "https://t.me/A1infobot?startgroup=true" }
          ]
        ]
      }
    });

  } else {
    Api.sendMessage({
      chat_id: chat.chatid,
      text: "⚠️ API returned no employee data.",
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

