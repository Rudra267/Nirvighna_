const Fname = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const product = document.getElementById("product");
const mess = document.getElementById("message");

function sendEmail() {
    if (!Fname.value || !email.value || !phone.value || !product.value || !mess.value) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        const bodyMessage = 
            `Full Name: ${Fname.value}\n` +
            `Email: ${email.value}\n` +
            `Phone Number: ${phone.value}\n` +
            `Product Interested: ${product.value}\n` +
            `Message: ${mess.value}`;

        console.log(bodyMessage);

        const param = {
            to_name: "Nirvighna Customer Support",
            from_name: "Nirvighna Enquire Customer Support Information",
            message: bodyMessage
        };

        const service_Id = "service_y8nbvic";
        const template_Id = "template_x4w50ef";

        emailjs.send(service_Id, template_Id, param)
            .then((res) => {
                // Clear form after successful send
                Fname.value = "";
                email.value = "";
                phone.value = "";
                product.value = "";
                mess.value = "";

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `We will reach out to contact you`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err) => console.log(err));
    }
}
