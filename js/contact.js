function sendContact() {
    const name = document.getElementById("fname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    if (!name.value || !email.value || !phone.value || !message.value) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Please fill in all fields.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    const bodyMessage = 
        `Name: ${name.value}\n` +
        `Email: ${email.value}\n` +
        `Phone Number: ${phone.value}\n` +
        `Message: ${message.value}`;

    const param = {
        to_name: "Nirvighna Contact Customer Details",
        from_name: "Nirvighna Customer Support Information",
        message: bodyMessage
    };

    const service_Id = "service_y8nbvic";
    const template_Id = "template_x4w50ef";

    emailjs.send(service_Id, template_Id, param)
        .then(() => {
            name.value = "";
            email.value = "";
            phone.value = "";
            message.value = "";

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thanks for contacting us!",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch((err) => console.error(err));
}
