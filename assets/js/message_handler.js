
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

  // Collect form data and convert to JSON
const formData = $("#idForm").serializeArray();
const jsonData = {};

formData.forEach(function(item) {
    jsonData[item.name] = item.value;
});

// AJAX request
$.ajax({
    type: "POST",
    url: url,
    contentType: 'application/json',
    headers: {
        'Authorization': `Bearer ${bearerToken}`
    },
    data: JSON.stringify(jsonData),  // Convert the object to a JSON string
    success: function (data) {
        showSuccessMessage("Message envoyé ! Merci", "#4CAF50");
    },
    error: function (data) {
        showSuccessMessage("Erreur d'envoi du message ?!", "#ba0000");
    },
});

  return false;
});
