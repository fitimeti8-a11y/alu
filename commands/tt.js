/*CMD
  command: tt
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
  var dataObj = parsed.data;

  var balance = Libs.ResourcesLib.userRes("balance");
  balance.add(-1);

  if (dataObj) {
    var msg = "📊 GST INFORMATION\n";
    msg += "=====================\n";
    msg += "🆔 GSTIN: " + (dataObj.Gstin || "N/A") + "\n";
    msg += "🏢 Trade Name: " + (dataObj.TradeName || "N/A") + "\n";
    msg += "⚖️ Legal Name: " + (dataObj.LegalName || "N/A") + "\n";
    msg += "🏠 Address: " + 
            (dataObj.AddrBno || "") + ", " + 
            (dataObj.AddrFlno || "") + ", " + 
            (dataObj.AddrSt || "") + ", " + 
            (dataObj.AddrLoc || "") + "\n";
    msg += "🌐 State Code: " + (dataObj.StateCode || "N/A") + "\n";
    msg += "📮 Pincode: " + (dataObj.AddrPncd || "N/A") + "\n";
    msg += "💼 Taxpayer Type: " + (dataObj.TxpType || "N/A") + "\n";
    msg += "📊 Status: " + (dataObj.Status || "N/A") + "\n";
    msg += "🚫 Block Status: " + (dataObj.BlkStatus || "N/A") + "\n";
    msg += "📅 Date of Registration: " + (dataObj.DtReg || "N/A") + "\n";
    msg += "📅 Date of Deregistration: " + (dataObj.DtDReg || "N/A") + "\n";

    Bot.sendMessage(msg);

  } else {
    Bot.sendMessage("⚠️ No data found in API response.");
  }
} else {
  Bot.sendMessage("⚠️ Error: API is not working.\nJoin @A1BlackHats for further updates.");
}

