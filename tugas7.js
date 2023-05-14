 function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.getElementById("result").innerHTML = "Thank you, " + name + "! We have received your message: " + message;
    document.getElementById("myForm").reset();
  }