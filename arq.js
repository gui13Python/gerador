function generatePassword() {
  var length = 8;
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  document.getElementById("password").value = password;
}

document
  .getElementById("generate-btn")
  .addEventListener("click", generatePassword);

function clean_input() {
  var campo = document.querySelector("#password");
  campo.value = " ";
  var input = document.getElementById("generate-btn");
  var text = input.value;

  navigator.clipboard
    .writeText(text)
    .then(function () {
      alert("LA CONTRASEÑA HA SIDO COPIADA: " + text);
    })
    .catch(function (error) {
      console.error("Failed to copy content:", error);
    });
}
