function showMessage() {
    var messageElement = document.getElementById("message");
    messageElement.innerHTML = `
    <p>Thank you for going through my answers and testing this form!</p>
    <p class="code-link">You can see my code <a href="https://github.com/rafasrib/iframe-implementation-form" target="_blank">here</a>.</p>
    <h5> - <a href="https://www.linkedin.com/in/rafael-s-ribeiro/" target="_blank">Rafael</a></h>
  `;
  messageElement.style.display = "block";
  }
