//salvo l'endpoint in una costante e anche l'output che avremo in pagina
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
//console.log(endpoint)
const output = document.getElementById("container");

//aggiungo altre variabili per gestire l'apertura e la chiusura dell'overlay
const overlay = document.getElementById("overlay");
const btnOverlay = document.getElementById("btn-overlay");

//faccio la chiamata all'endpoint
axios
  .get(endpoint)
  .then((response) => {
    //console.log(response.data)
    //ottenuto l'array di obj lo salvo in una variabile
    const photos = response.data;
    //console.log(photos)

    //salviamo una variabile vuota di accumulo per l'output
    let photosOutput = "";

    //cicliamo l'array
    photos.forEach((photo) => {
      //destrutturiamo e salviamo i singoli item degli obj

      const { title, date, url } = photo;

      photosOutput += `
        <div class="col-lg-4 col-md-6 col-12  g-5 p-3">
        <button class="btn-card">
        <div class="card bg-light position-relative border-0">
          <img src="img/pin.svg" alt="pin" id="pin" class="position-absolute top-0 start-50 translate-middle">
          <img src="${url}" alt="travel-photo" />
          <div class="photo-description pt-1">
          <h6 class="post-title">${title}</h6>
          <p>${date}</p>
          </div>
          </div>
          </button>
          </div>
          `;
    });

    output.innerHTML = photosOutput;
    const btnCards = document.querySelectorAll(".btn-card");

    btnCards.forEach((btnCard) => {
      btnCard.addEventListener("click", () => {
        overlay.classList.remove("d-none");
        overlay.classList.add("d-block");
      });
    });
    btnOverlay.addEventListener("click", () => {
      overlay.classList.remove("d-block");
      overlay.classList.add("d-none");
    });
  })
  .catch((error) => {
    console.log(error);
    output.innerHTML = "<p>Impossibile caricare le foto al momento.</p>";
  });
