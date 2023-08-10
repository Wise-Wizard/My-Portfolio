var contactForm = document.querySelector("#contact-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("sender");
var subjectInput = document.getElementById("subject");
var messageInput = document.getElementById("user_dtls");
var submitBtn = document.querySelector(".submit-btn");

const publicKey = "Az67CNB9iqwzW3Pc6";
const serviceID = "service_tiwxt9s";
const templateID = "template_3y2snqc";

// Initialize EmailJS with your user ID
emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting and reloading the page
  submitBtn.classList.add("clicked");
  submitBtn.innerHTML = "Just a Moment...";
  submitBtn.style.color = "white"; // Change text color to white

  var templateParams = {
    from_name: nameInput.value,
    from_email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };
  setTimeout(() => {
    submitBtn.classList.remove("clicked");
  }, 500); // Animation duration
  emailjs.send(serviceID, templateID, templateParams).then(
    () => {
      console.log("Email sent successfully!");
      submitBtn.innerHTML = "Message Sent Succesfully!";
      // Clear input values after successful submission
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    },
    function (error) {
      console.error("Error sending email:", error);
      alert("Error sending message. Please try again.");
    }
  );
});
