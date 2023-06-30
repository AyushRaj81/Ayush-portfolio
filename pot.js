const text = "I am a Data Analyst";
const text2 = "I am a Web Developer";


document.addEventListener('DOMContentLoaded', function() {
  typingText = (document.getElementById("typing-text"));
  typingdesc = document.getElementById("typing-aboutme");
  let isText1Visible = true;

  typingText.textContent=text;
  setInterval(function() {
    if (isText1Visible) {
      console.log("i am running")
      typingText.textContent = text2;
  
      
    } else {
      typingText.textContent = text;
    }
    isText1Visible = !isText1Visible;
  }, 4000); // Delay of 2 seconds between switching texts
});

window.addEventListener('scroll', function() {
  console.log("i am runningt00000")
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

/*scrolling to contact*/
function scrollToContact() {
  const contactContainer = document.getElementById("contactcontainer");
  contactContainer.scrollIntoView({ behavior: "smooth" });
}
function scrollToProject() {
  const contactContainer = document.getElementById("projects");
  contactContainer.scrollIntoView({ behavior: "smooth" });
}
/*function openEmailClient() {
  const subject = encodeURIComponent("I want to hire you");
  const mailtoLink = `mailto:?subject=${subject}`;
  window.location.href = mailtoLink;
}*/
function openEmailClient() {
  const recipientEmail = 'ayushraj21042002@gmail.com'; // Replace with the actual email address
  const subject = encodeURIComponent("I want to hire you Ayush");
  const mailtoLink = `mailto:${recipientEmail}?subject=${subject}`;
  window.location.href = mailtoLink;
}

/*for navbar*/
/*function toggleNavbar() {
  var navbar = document.getElementById("myTopnav");
  navbar.classList.toggle("responsive");
}*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



