const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348127240907";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_16_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZVFXQ2FqSzFEWFc3SFQrbjFzN1RCdHlRL3Q2VHVPcWZmbjlic2tObGNxUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI3MjQwOTA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMEIxNjAwRDYyNDAxMjE3Q0UzN0E3QjA4NUU1MDUwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxNzAxNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI3MjQwOTA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QTRCM0ExODM4RUMwQjEzMEFEREM0N0NGNzI0Q0IwN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxNzAxNjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGpBaGRPWnNRTnU1U3VhZnZCZ3I1QVwiLFxuICBcInBob25lSWRcIjogXCJjNDg4MTIxNy1mZjMwLTQzZjYtYjJiNS1iNjc4OTI2YTFhYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTg2LFxuICAgICAgOTksXG4gICAgICAxOTUsXG4gICAgICAxNjYsXG4gICAgICAxMTIsXG4gICAgICAxNDAsXG4gICAgICAxNDAsXG4gICAgICAxMSxcbiAgICAgIDc0LFxuICAgICAgMTY0LFxuICAgICAgMTE3LFxuICAgICAgMjQ2LFxuICAgICAgNzAsXG4gICAgICA3NSxcbiAgICAgIDIzMyxcbiAgICAgIDExOCxcbiAgICAgIDE1MCxcbiAgICAgIDExMixcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAyNCxcbiAgICAgIDczLFxuICAgICAgMTM0LFxuICAgICAgMTAyLFxuICAgICAgNjYsXG4gICAgICA0LFxuICAgICAgOTUsXG4gICAgICA5NixcbiAgICAgIDQwLFxuICAgICAgNzYsXG4gICAgICA4MixcbiAgICAgIDEyMyxcbiAgICAgIDMwLFxuICAgICAgMjA0LFxuICAgICAgMTU3LFxuICAgICAgNzAsXG4gICAgICAyMTYsXG4gICAgICAyMzUsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEhIV1hNNjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjcyNDA5MDc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NzQ5Njg5ODAwMzAxNTo1NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTZW5pIE1lZGlhIENvbmNlcHQg8J+RkfCfkZHwn5GRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGJ5OThRQ0VPN280Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5VjRCdWtHZzFOck9wckV6REVBTElpZmUxWm9PS2UxL3FVcU1HQ0d0dGhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklWN2lOUHQ0a21oZ0hCNmprY2wvQzdBN0UvYnAxVnBxYm9ubHpueU5GNXEvRmR3R09FSVZORmpBVnpZSnNOeEw1YitTaGN1bUo2L3B4RW4zbXk1Q0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVEMGthL1VacXJ3TS9hYU5SaDl6ZDl3N3pNS3FuM0VFR2tjS2IzNVhPRzRSOWFVcFV1TS9CUitncy9ReDVyTXIvNHpMS1lJY21TZVN0cE8yNDBBRWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjcyNDA5MDc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTE3MDE2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZreFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmt4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNGc3dG9hTWkxQWwzeGZHUk11TFRKTlFNTzZwNUJjOUJaKzJXUGhDVjl1dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODE0NDE2NTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE3MDE2NDU0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
