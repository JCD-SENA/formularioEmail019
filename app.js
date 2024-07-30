const serviceId = "service_o26n644"
const apiKey = "yPFeXCI4JQQJcA58P"
const templateId = "template_0fj9q0w"

document.getElementById("contact-form").addEventListener("submit", (e) => {
	e.preventDefault()
	emailjs.init(serviceId);
	emailjs.sendForm(serviceId, templateId, document.getElementById("contact-form"), apiKey).then(() => {
		Swal.fire({
			title: "Se ha mando el email",
			text: "waos"
		});
	}).catch((e) =>  {
		console.log(e)
		Swal.fire({
			icon: "error",
			title: "Error",
			text: "No se pudo mandar el email"
		});
	})
})