
$("#submitButtonId").click(function () {
  function showSuccessMessage(msg, color) {
    const messageElement = document.getElementById("successMessage");
    messageElement.innerHTML = msg;
    messageElement.style.backgroundColor = color;
    messageElement.style.fontWeight = "bolder";
    messageElement.classList.add("show");

    // Masquer le message après 3 secondes
    setTimeout(() => {
      messageElement.classList.remove("show");
    }, 3000);
  }

  var url = "https://jiem.pythonanywhere.com/portfolio/message_handler"; // the script where you handle the form input.

  var bearerToken = "lIuGU1fkl2yb1GwKKhSyXj34DOWiMDITdaaL9nkTZNQhFoe8TlZgb3NKPTTXWVPL"

  // Get form data using FormData
  const formElement = document.getElementById("idForm");
  const formData = new FormData(formElement);
  
  // AJAX request
  $.ajax({
      type: "POST",
      url: url,
      headers: {
          'Authorization': `Bearer ${bearerToken}`
      },
      processData: false, // Don't process the data into a query string
      contentType: false, // Let jQuery set the correct Content-Type
      data: formData, // Send the FormData object
      success: function (data) {
          showSuccessMessage("Message envoyé ! Merci", "#4CAF50");
      },
      error: function (data) {
          showSuccessMessage("Erreur d'envoi du message ?!", "#ba0000");
      },
  });

  return false;
});
