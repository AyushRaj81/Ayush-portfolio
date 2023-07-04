
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    const chatLog = document.getElementById('chatLog');
    let userInput = document.getElementById('userInput').value;
    appendMessage("Hi! I'm Mr. AyushBot 😎 Nice to meet you! 👋 <br> 🌟👋 Whats your name? 🤔 So that I can assist you. Lets get started on this amazing journey together! ✨😊",'Ayushbot');
    askName();
    
  });
  let userName='';
  
  function askName() {
    appendMessage('🌟👋 Whats your name? 🤔 So that I can assist you. Lets get started on this amazing journey together! ✨😊', 'Ayushbot');
    
      
  }
  /*handling user input*/
  function handleUserInput() {
    const userMessage = userInput.value.trim();
    
    if (userMessage !== '') {
      if (!userName) {
        userName = userMessage;
      
        appendMessage(`🌟 Nice to meet you, ${userName}! 🤗`, 'Ayushbot');
        appendMessage(`How can I assist you?  ${userName}!`, 'Ayushbot');
        processUserMessage(userMessage);
     
      } else {
        // Handle user's request or question
        // Example: sendRequestToServer(userMessage);
        appendMessage(`You said: ${userMessage} ❓ But I'm just a bot and don't understand that. 😅 If you're interested in the options below, please proceed with them.`, 'User');
        processUserMessage(userMessage);
        // Provide response from the bot
        // Example: appendMessage(response, 'Ayushbot');
        userInput.value = ''; // Clear the input field
      }
    }
  }



function sendMessage() {   
      console.log(userInput.value);
      const message = userInput.value;
      appendMessage(message, 'User');
      handleUserInput();
      
      userInput.value='';
      
  }
  
  
  function appendMessage(message, sender) {
    console.log("i am appendmessage is running")
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';
    messageContainer.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight;
    
  }

  function processUserMessage(userMessage) {
    const lowercaseMessage = userMessage.toLowerCase();
  
    if (lowercaseMessage.includes('generate code')) {
      const generatedCode = generateCode();
      appendMessage(generatedCode, 'Chatbot');
    } else if (lowercaseMessage.includes('tell me about yourself')) {
      const aboutYourself = getAboutYourself();
      appendMessage(aboutYourself, 'Chatbot');
    } else {
      const options = ['💼 Want to Hire Me', '📲 Want to Talk to Me', '🎓 Need Assistance in University Projects', '🌟 Know Ayush Skills'];
      showOptions(options);
    }
  }
  function wanttohire() {
    // Code generation logic goes here
    const options_want_to_hire = ['💬 Want to talk to me', '🌟 What are Ayush skills', '🔙 Return to main menu'];

    wanttohireoption(options_want_to_hire);
    
  
  }
  /*this will show option when want to hire will be clicked.*/
  function wanttohireoption(options) {
    let optionsMessage = '📞 Reach me Out or See my Skills, How can I will be value you? 💼<br>';
    optionsMessage += '<div class="options-container">';
    options.forEach((option, index) => {
      optionsMessage += `<button class="option-button" onclick="want_to_hire_selectOption(${index})">${option}</button>`;
    });
    optionsMessage += '</div>';
    appendMessage(optionsMessage, 'AyushBot');
  }

  function want_to_hire_selectOption(optionIndex) {
    //console.log("i am running in want_to_hire me")
    //console.log(optionIndex)
   if(optionIndex==0){
    selectOption(0);
   }
   else if(optionIndex===1){
    
    selectOption(3);
   }
   else{
     
     processUserMessage("nothing");//here nothing as pass as usless string.
   }
    

   //console.log(optionIndex)
  }

  function talk_to_me(){
    const options = ['📞 How to reach me?', '🌟 What are Ayush skills?', '🎓 Want assistance in University Project.', '🔙 Return to main menu'];

    wanttohireoption(options);
  }
  function talk_to_me_option(options) {
    let optionsMessage = '🤔 Choose any of the options below,<br>';
    optionsMessage += '<div class="options-container">';
    options.forEach((option, index) => {
      optionsMessage += `<button class="option-button" onclick="talk_to_me_selectOption(${index})">${option}</button>`;
    });
    optionsMessage += '</div>';
    appendMessage(optionsMessage, 'AyushBot');
  }
  function talk_to_me_selectOption(optionIndex) {
    //console.log("i am running in want_to_hire me")
    //console.log(optionIndex)
   if(optionIndex==0){
    selectOption(0);
   }
   else if(optionIndex==1){
    //console.log(optionIndex)
    //console.log("i am running");
    selectOption(3);
   }
   else if(optionIndex==2){
    selectOption(2);
   }
   else{
     //console.log("i am running in else")
     processUserMessage("nothing");//here nothing as pass as usless string.
   }
    

   //console.log(optionIndex)
  }

  function university_project(){
    const options_want_to_hire = ['💬 Want Reach me', '🌟 What are Ayush skills', '🔙 Return to main menu'];

    university_project_option(options_want_to_hire);
  }
  function university_project_option(options) {
    let optionsMessage = '📞 Reach me Out or See my Skills, How can I will be value you? 💼<br>';
    optionsMessage += '<div class="options-container">';
    options.forEach((option, index) => {
      optionsMessage += `<button class="option-button" onclick="university_project_selectOption(${index})">${option}</button>`;
    });
    optionsMessage += '</div>';
    appendMessage(optionsMessage, 'AyushBot');
  }
  function university_project_selectOption(optionIndex) {
    //console.log("i am running in want_to_hire me")
    //console.log(optionIndex)
   if(optionIndex==0){
    selectOption(0);
   }
   else if(optionIndex===1){
    
    selectOption(3);
   }
   else{
     
     processUserMessage("nothing");//here nothing as pass as usless string.
   }
    

   //console.log(optionIndex)
  }






  /*
  function getAboutYourself() {
    // About yourself information goes here
    return 'Information about yourself goes here';
  }*/
  /*this is main function to show option*/
  function showOptions(options) {
    let optionsMessage = '🤔 Choose any of the options below,<br>';
    optionsMessage += '<div class="options-container">';
    options.forEach((option, index) => {
     /* optionsMessage += `<button onclick="selectOption(${index})">${option}</button>`;*/
     optionsMessage += `<button class="option-button" onclick="selectOption(${index})">${option}</button>`;
    });
    optionsMessage += '</div>';
    appendMessage(optionsMessage, 'AyushBot');
  }
  /*this is main option for selecting the option*/
  function selectOption(optionIndex) {
    console.log(optionIndex);
    const options = [
      '💼 If you want to hire me, please contact me on:<br>📞 My phone no: 8825287706<br>✉️ You can also email me at <a class="contact-button " target="_blank" href="mailto:ayushraj21042002@gmail.com">✉️ Email Me</a>',
        '📲 To talk to me, please reach me on:<br>📷 <a class="contact-button" target="_blank" href="https://www.instagram.com/your_instagram_username">Instagram</a><br>🔗 <a class="contact-button" target="_blank" href="https://www.linkedin.com/in/ayush2124/">LinkedIn</a><br>✉️ <a class="contact-button"  target="_blank" href="mailto:ayushraj21042002@gmail.com">Email Me</a>',      
      '🎓 If you need assistance with your university-level project, you can contact me on:<br>📞 8825287706<br>📱 WhatsApp me <a class="contact-button" target="_blank" href="https://wa.me/8825287706">8825287706</a><br>✉️ Email me at<a class="contact-button" target="_blank" href="mailto:ayushraj21042002@gmail.com">Email Me</a><br>⚙️ I have experience in handling projects in subjects like:<br>📊 SQL<br>📈 Excel<br>💻 Website development using HTML, CSS, JS<br>🐍 Python (Pandas and NumPy)',
      '🔧 I have skills in:<br>📊 Excel<br>📊 Tableau<br>📊 Power BI<br>🐍 Python (Pandas, NumPy)<br>📊 SQL<br>🌐 HTML<br>💅 CSS<br>💻 JavaScript<br>📊 R'
    ];
    const selectedOption = options[optionIndex];
    appendMessage(selectedOption, 'AyushBot');
    

   console.log(optionIndex)
   switch (optionIndex) {
  case 0:
    //console.log("i am runningn in switch")
    wanttohire();
    break;
  case 1:
    //console.log("i am runningn in switch")
    talk_to_me();
    break;
  case 2:
    university_project()
    break;
  case 3:
    talk_to_me();
    break;
  
}


   /* processUserMessage(selectedOption);*/
  }


  function toggleChatContainer() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.classList.toggle('open');
    } else {
      console.error("Element with id 'chat-container' not found.");
    }
  }

  
  
 
  