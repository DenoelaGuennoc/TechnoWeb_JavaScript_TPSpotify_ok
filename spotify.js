const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer BQA6qcuuc5Vc0-EbpRizcR2QYuGJ6Cs0eInBp8YTPSLD5wL-IfsxGx4tczEX3khprnoyj80BXKf8k6kUsRS0aptU-WoFzUgBVTmEkptFXFyN_TNVAhlFiQXbTJ4Op5rLgabPJw71SVytgfvUARvWHKQBnF-_d49XyIk"
};
const fetchOptions = { headers: headers };

document.getElementById("fm").addEventListener("submit", chercherAlbums);

function chercherAlbums(event) {
  // Empêcher le rechargement de la page
  // car par défaut le navigateur recharge la page après un "submit"
  event.preventDefault();

  let motcle = document.getElementById("motcle").value;

  let url =
    "https://api.spotify.com/v1/search?q=" +
    motcle +
    "&type=album&market=FR&limit=10";

  // Exécution de la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })

    .then((dataJSON) => {
      console.log(dataJSON);
    })

    .catch((error) => {
      console.log(error);
    });
}
