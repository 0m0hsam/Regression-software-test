emailjs.init("vJOBbt-Gb-IiyzH5g"); // Replace with your EmailJS user ID

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const sendername = document.getElementById('fullName').value;
    const to = document.getElementById('email').value;
    const replyto = document.getElementById('replyto').value;
    // const phone = document.getElementById('phone').value;
    // const location = document.getElementById('location').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    emailjs.send("Incredible_Sam", "template_ujyhnsg", {
        to: to,
        sendername: sendername,
        replyto: replyto,
        subject: subject,
        message: message,
        // message: `${message}
        
        //           Contact us: ${phone}
        //           ${location}`,
    })
    .then(function (response) {
        console.log("Message sent successfully", response);
        alert("Message sent successfully");
        document.getElementById('contactForm').reset();
    }, function (error) {
        console.error("Message not sent", error);
        alert("Message not sent. Please check your input and try again.");
    });
});