const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_31_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg1LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT1FnZDdSUlY2VzJZV2c0bjAwR2pSbk1mU0l4cndjbUFXUlZ0UU5HKzBIMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MjQwMzI2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDU4MkNFNzUwMUQ4OUM0RTZFRTFENjBCMDZFOERGM0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwODAyNjgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDI0MDMyNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlBNUE3NjE4RUEzMTY5MTJBNkE4NjI4MDY3QUI1M0Y1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDgwMjY4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoNFkzVFdfZVJ6R3F2bXRiZTMwNXVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNhYTkzNTIxLWM4YTgtNGE3Yy1hMTMyLTQ4YjUwNGY3N2M3ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDI1MSxcbiAgICAgIDI4LFxuICAgICAgNCxcbiAgICAgIDIyNyxcbiAgICAgIDIyNSxcbiAgICAgIDIyOCxcbiAgICAgIDMzLFxuICAgICAgMzQsXG4gICAgICAxNjYsXG4gICAgICA4NCxcbiAgICAgIDE0OSxcbiAgICAgIDIzNCxcbiAgICAgIDIzMyxcbiAgICAgIDIwNSxcbiAgICAgIDEzNyxcbiAgICAgIDE2MyxcbiAgICAgIDU5LFxuICAgICAgNDUsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMyxcbiAgICAgIDE0NCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNixcbiAgICAgIDU2LFxuICAgICAgOTMsXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNjgsXG4gICAgICAyOCxcbiAgICAgIDMxLFxuICAgICAgMTM2LFxuICAgICAgMjI3LFxuICAgICAgMTA1LFxuICAgICAgNzQsXG4gICAgICA4MCxcbiAgICAgIDI0LFxuICAgICAgMTQwLFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQyUzVLTFRXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MjQwMzI2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE4NDE0MzYxODIxOToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ0hvdTRIRVBMbnA3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRUL0M1UWVqa21VSyszNGh4L2FSdzB1dVdJaHZ2czVOYnpPck1MWStIQ2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNkQ1OGM4cEVObkdSeW5KZG5hZW95OVpSSGE2ZFJSazBPcGpHT2V4WXBDZGtEQ01xbi9yQXg4RnYyK0NSejcvMVhFcWtBc3BXVS9LK1k3RzErMXZERFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicjJaZjhia0VEb1BjMit4REJid2JWRUpDc3dvNWFmNjlndCtIRXQvZmtRc2xBemRQVkM5Y0VFbkNaSmhib09UWG5CM0FpeS8vZVZtVkFCL09ublIzQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDI0MDMyNjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODAyNjc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2RqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSM2tCUkRPaUdMQXR5MFgwWm92YXFOdjlJd0RLcmRweUozNnNBL2ovdFl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTAyOTI4ODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDgwMjY4MDAwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
