const axios = require('axios');
async function sendNotification() {
  try {
   await axios.get("https://backend-7e7e.onrender.com/send-notification")	  
  } catch(error) { 
     console.log("Error occured in the sendNotification functin under api.js file", error);
}
}
module.exports = {sendNotification};
