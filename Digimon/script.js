const container = document.querySelector('#digimon');

axios.get('https://digimon-api.vercel.app/api/digimon')
  .then(function (response) {
    // handle success
    // console.log(response.data);
for(digimon of response.data){
    renderDigimon(digimon);
}
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  const renderDigimon = (digimon) => {
    console.log('Rendering');
    console.log(digimon);

    let  digimonContainer = document.createElement('div');
    digimonContainer.setAttribute('name', 'digimon_'+digimon.name)
    digimonContainer.classList.add('digimon');
    
    let  menuItem = document.createElement('a');
    if ( digimon.level !=null){
      let cssClass = digimon.level.replaceAll(/\s/g,'');
      menuItem.classList.add(cssClass);
    }

    menuItem.innerHTML = digimon.name;
    // menuItem.addEventListener('click', (e)=>{


    //     document.querySelector('.digimon')
    //    .style.width= 'auto';

    //     document.querySelector('#digimon_'+digimon.name)
    //         .style.width= '100vw';

    //     document.querySelectorAll('.digimonDetails').forEach((el)=>{
    //         el.style.display = "none";
    //     })
        

    //     document.querySelector('#digimon_'+digimon.name+'.digimonDetails')
    //         .style.display = "block";
    // })
    digimonContainer.appendChild(menuItem)


    let digimonDetails = document.createElement('div');
    digimonDetails.innerHTML = `<img id="image" src="${digimon.img}">`;
    
    digimonDetails.classList.add('digimonDetails');
    digimonContainer.appendChild(digimonDetails)

    container.appendChild(digimonContainer);

  }
  function myFunction() {
    alert("DANGEROUS CREATURES!!");
    alert("Don't tap the glass!!");
  }
  