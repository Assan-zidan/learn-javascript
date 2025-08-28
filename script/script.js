const form = document.getElementById("formulaire");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");

const erreurNom = document.getElementById("erreurNom");
const erreurEmail = document.getElementById("erreurEmail");
const erreurPassword = document.getElementById("erreurPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
	e.preventDefault(); // Empêche l'envoi du formulaire
	let valide = true;

	// Réinitialiser messages
	erreurNom.textContent = "";
	erreurEmail.textContent = "";
	erreurPassword.textContent = "";
	message.textContent = "";

	// Validation du nom
	if (nom.value.trim() === "" || nom.value.length < 2) {
		erreurNom.textContent = "Le nom est obligatoire et doit contenir au moins 2 caractères.";
		valide = false;
	}

	// Validation email
	if (!email.value.includes("@")) {
		erreurEmail.textContent = "L'email doit contenir @.";
		valide = false;
	}

	// Validation mot de passe
	if (password.value.length < 6) {
		erreurPassword.textContent =
			"Le mot de passe doit contenir au moins 6 caractères.";
		valide = false;
	}

	// Si tout est bon
	if (valide) {
		message.textContent = "✅ Inscription réussie !";
	}
});
