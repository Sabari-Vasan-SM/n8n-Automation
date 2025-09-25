// Extract sender number and message text
const msg = $json["entry"][0]["changes"][0]["value"]["messages"][0];
return [{
  json: {
    phone: msg.from,          // Sender phone number
    text: msg.text.body       // Message text
  }
}];
