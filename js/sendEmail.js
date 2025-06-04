document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById("button");

  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("time").value = new Date();
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_uu18axg";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
});