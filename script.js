
//salvo l'endpoint in una costante e anche l'output che avremo in pagina
const endpoint= "https://lanciweb.github.io/demo/api/pictures/"
//console.log(endpoint)
const output= document.getElementById("container")

//faccio la chiamata all'endpoint
axios.get(endpoint)
    .then(response => {
        //console.log(response.data)
        //ottenuto l'array di obj lo salvo in una variabile
        const photos= response.data
        //console.log(photos)

        //salviamo una variabile vuota di accumulo per l'output
        let photosOutput = ""

        //cicliamo l'array
        photos.forEach((photo,i) => {
            
        //destruttiriamo e salviamo i singoli item degli obj
        
            const { title, date, url} = photo;

        photosOutput += `
        <div class="card col-lg-4 col-md-6 col-12 bg-light gx-5">
          <img src="${url}" alt="travel-photo" />
          <div class="photo-description">
          <h6 class="post-title">${title}</h6>
          <p>${date}</p>
          </div>
        </div>
        `
        });
        
        output.innerHTML=photosOutput;
    })
