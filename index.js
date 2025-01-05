document.getElementById('reservation-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupère les valeurs des champs
    const name = document.getElementById('name')?.value;
    const date = document.getElementById('date')?.value;
    const time = document.getElementById('time')?.value;
    const guests = document.getElementById('guests')?.value;

    // Vérifie si tous les champs sont remplis
    if (!name || !date || !time || !guests) {
        alert('Veuillez remplir tous les champs avant de soumettre votre réservation.');
        return;
    }

    // Affiche un message de confirmation
    alert(`Merci ${name}, votre réservation pour ${guests} personne(s) le ${date} à ${time} a bien été prise en compte !`);

    // Réinitialise le formulaire
    document.getElementById('reservation-form')?.reset();
});
