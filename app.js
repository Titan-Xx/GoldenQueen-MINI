 {
  "name": "GoldenQueen",
  "description": "JavaScript WhatsApp bot made by Dushan. මෙය WhatsApp බොට් එකක් වන අතර auto read, typing, record, react වැනි විශේෂාංග සහිත වේ.",
  "keywords": ["bot", "WhatsApp", "Baileys", "Dushan"],
  "success_url": "/",
  "env": {
    "SESSION_ID": {
      "description": "ඔබගේ SESSION_ID මෙතැනට ඇතුළත් කරන්න.",
      "required": true
    },
"MODE": {
      "description": "Bot mode එක තෝරන්න: public | private | self.",
      "required": false,
      "value": "public"
    },

"ALIVE_MSG": {
      "description": "Alive මැසේජ් දාන්න",
      "required": false,
      "value": "Iam GoldenQueen Mini Online"
    },
    "PREFIX": {
      "description": "Command prefix එක මෙහි ඇතුළත් කරන්න. උදාහරණයක් ලෙස: '.'",
      "required": false,
      "value": "."
    },
    "AUTO_READ_STATUS": {
      "description": "Message auto-read තත්ත්වය ක්‍රියාත්මක/අක්‍රිය කිරීමට (true/false).",
      "required": false,
      "value": "true"
    },
    "AUTO_REACT": {
      "description": "Message auto-react ක්‍රියාත්මක කිරීමට (true/false).",
      "required": false,
      "value": "true"
    },
    "ALWAYS_ONLINE": {
      "description": "Bot එක නිතරම සබඳව තබා ගැනීම සඳහා (true/false).",
      "required": false,
      "value": "true"
    },
    "AUTO_READ": {
      "description": "Incoming messages auto-read කිරීම (true/false).",
      "required": false,
      "value": "true"
    },
    "AUTO_RECORD": {
      "description": "Bot එක record කිරීම simulation කිරීම (true/false).",
      "required": false,
      "value": "true"
    },
    "AUTO_TYPING": {
      "description": "Bot එක typing simulation එක ක්‍රියාත්මක කිරීම (true/false).",
      "required": false,
      "value": "true"
    },
    "AUTO_RECORDING": {
      "description": "Voice note recording simulation ක්‍රියාත්මක කිරීම (true/false).",
      "required": false,
      "value": "true"
    },
    "AUTO_REACT_STATUS": {
      "description": "Auto react status පෙනී සිටීම සක්‍රීය කිරීමට (true/false).",
      "required": false,
      "value": "true"
    },
    "RE": {
      "description": "212 number auto-block කිරීම සක්‍රීය කිරීමට (true/false).",
      "required": false,
      "value": "true"
    }
  },
  "buildpacks": [
    {
      "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
    }
  ],
  "stack": "heroku-24"
}
