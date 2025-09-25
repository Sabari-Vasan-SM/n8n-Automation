POST https://graph.facebook.com/v22.0/<PHONE_NUMBER_ID>/messages
Headers:
  Authorization: Bearer <ACCESS_TOKEN>
  Content-Type: application/json
Body:
{
  "messaging_product": "whatsapp",
  "to": "<USER_PHONE_NUMBER>",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": { "code": "en_US" }
  }
}
