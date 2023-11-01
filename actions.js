// Scroll To Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToBottom() {
  window.scrollTo({ bottom: 0, behavior: "smooth" });
}

async function myFunction(e) {
  e.preventDefault();
  let nameField = document.getElementById("name");
  let emailField = document.getElementById("email");
  let phoneField = document.getElementById("phone");
  let messageField = document.getElementById("message");
  let submitBtn = document.getElementById("submit");
  
  let errorText = document.getElementById("error");
  let successText = document.getElementById("success");

  // Check if any of the required fields are empty
  if (!nameField.value || !emailField.value || !messageField.value) {
    document.getElementById("empty-fields").style.display = "block";
    return;
  } else {
    document.getElementById("empty-fields").style.display = "none";
  }

  submitBtn.textContent = "Sending..."; // Change button text on click

  let data = {
    Name: nameField.value,
    Email: emailField.value,
    Phone: phoneField.value, // Include phone number
    Message: messageField.value,
  };

  try {
    let res = await fetch(
      "https://cloud.activepieces.com/api/v1/webhooks/7ckCHZ0dsehCNUI2lidF8/sync",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.status === 200 || res.status === 201) {
      successText.style.display = "block";
      errorText.style.display = "none";

      // Clear the input fields
      nameField.value = "";
      emailField.value = "";
      phoneField.value = "";
      messageField.value = "";

    setTimeout(() => {
      successText.style.display = "none"; // Hide the error message after a second
    }, 3000);

      // Reset the button text after success
      submitBtn.textContent = "Send Request";
    } else {
      successText.style.display = "none";
      errorText.style.display = "block";

      // Reset the button text after error
      submitBtn.textContent = "Send Request";
    }
  } catch (err) {
    console.error(err);
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "block";

    setTimeout(() => {
      errorText.style.display = "none"; // Hide the error message after a second
    }, 3000);

    // Reset the button text after error
    submitBtn.textContent = "Send Request";
  }
}

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myFunction(e);
});
