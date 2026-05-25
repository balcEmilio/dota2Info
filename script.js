

let contenedorHeroes = document.getElementById("contenedorHeroes");
let allHeroes = [];
let allHeroesNombreCorto = [];
let habIconosHeroes = {}
let habHeroesImg = {}

let iconosHabilidadesHeroes = {}

const habilidadesAllHeroes = {};
let habilidadesAllHeroes2 = [];
let i = 0;


//let divHabilidades = document.getElementById("divHabilidades")

//const habilidadesHero = traerHabilidades();



async function cargarHeroes() {

  const res = await fetch("https://api.opendota.com/api/heroStats");
  const heroes = await res.json();

 // console.log(heroes); 

  heroes.forEach(hero => {
    const img = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace("npc_dota_hero_", "")}.png`;

   /* console.log({
      nombre: hero.localized_name,
      atributo: hero.primary_attr,
      vida: hero.base_health,
      mana: hero.base_mana,
    daño: `${hero.base_attack_min} - ${hero.base_attack_max}`,
      armor: hero.base_armor,
      imagen: img,
      id : hero.id
    });
    */
    allHeroes.push(hero.name);
    
    
        let br = document.createElement("br");
       
    
        let divHero = document.createElement("div");
        divHero.classList.add("card");
        


        divHero.classList.add("mb-3")

    
    
        let div1 = document.createElement("div");
        div1.classList.add("card-body");
    
        let h5 = document.createElement("h5");
        h5.innerHTML = hero.localized_name;
        h5.classList.add("card-title");
    
        let p = document.createElement("p");
        p.classList.add("card-text");
        
    //p.innerHTML = "Atributo: " + hero.primary_attr + "Vida: " + hero.base_healt + "Mana: " + hero.base_mana;
        p.innerHTML = hero.primary_attr; 
    
        let imgHeroe = document.createElement("img");
        imgHeroe.setAttribute("src",img);
    
        imgHeroe.classList.add("card-img-top");
    
        
        div1.appendChild(h5);
        div1.appendChild(p);
        
        divHero.appendChild(imgHeroe);
        divHero.appendChild(div1);
        divHero.appendChild(br);


    contenedorHeroes.appendChild(divHero);
    contenedorHeroes.appendChild(br);

    


    // divHero.appendChild(imgHeroe);
    // contenedorHeroes.appendChild(divHero);
    // contenedorHeroes.appendChild(br);
    // console.log(hero.id);

    
  });
  return heroes;
}

function modificarHeroesNombres(){

  allHeroes.forEach(element => {
  //  console.log(element);
  });
}

//conseguir habilidades
async function traerConstantes(){

  const res = await fetch("https://api.opendota.com/api/constants/hero_abilities");
  const data = await res.json();

  //console.log(data);

allHeroes.forEach(element => {
  habilidadesAllHeroes[element] = {};
});

let i=0;
Object.keys(data).forEach(key => {
  //console.log(key, data[key]);
  data[key]["abilities"].forEach(element => {
  //  console.log(element);
 // console.log(key);
    if(element != "generic_hidden"){

      habilidadesAllHeroes[key][i] = element;
      i++;
      
    }
   
      
  });

const texto = key;
const hero2 = texto.slice("npc_dota_hero_".length);
allHeroesNombreCorto.push(hero2);

});

allHeroesNombreCorto.forEach(element => {
    iconosHabilidadesHeroes[element] = {}
  });




}


async function traerHabilidades(){

  const res = await fetch("https://api.opendota.com/api/constants/abilities");
  const dataHabilidades = await res.json();

  //console.log(dataHabilidades);
  //return dataHabilidades;
  //console.log(habilidadesAllHeroes);

// allHeroesNombreCorto.forEach(element => {
//   habIconosHeroes[element] = {};
// });


  Object.keys(dataHabilidades).forEach((key)=>{
    //console.log(key, dataHabilidades[key])

    if(!key.startsWith("special")){

      habIconosHeroes[key] = dataHabilidades[key].img;
    
    }


  })

  
 

}

async function itemsRecomendables(idHeroe) {
  
  const res = await fetch(`https://api.opendota.com/api/heroes/${idHeroe}/itemPopularity`);

  const items = await res.json();

 // console.log(items);
}


async function cardsPequeñas(){


    const res = await fetch("https://api.opendota.com/api/heroStats");
    const heroes = await res.json();



    heroes.forEach(hero => {

      const img = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace("npc_dota_hero_", "")}.png`;

      const icon = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/icons/${hero.name.replace("npc_dota_hero_","")}.png`;

     // console.log(hero.icon);
    //  console.log(hero.name);


      const texto = hero.name;
      const heroName = texto.slice("npc_dota_hero_".length);


    //  console.log(hero.roles);

/*      console.log({
      nombre: hero.localized_name,
      atributo: hero.primary_attr,
      vida: hero.base_health,
      mana: hero.base_mana,
      daño: `${hero.base_attack_min} - ${hero.base_attack_max}`,
      armor: hero.base_armor,
      imagen: img,
      id : hero.id
      
      });
*/
        allHeroes.push(hero.name);

      let cadenaRoles = "Roles: ";
      hero.roles.forEach(rol => {
        cadenaRoles += rol + " ";

      });


     // console.log(cadenaRoles);
      divPrincipal = document.createElement("div");
      divPrincipal.classList.add("card")
      divPrincipal.classList.add("col-xs-12");
      divPrincipal.classList.add("col-sm-6");
      divPrincipal.classList.add("col-md-12");
      divPrincipal.classList.add("col-lg-6");
    

      // divPrincipal.setAttribute("style", "max-width: auto;")



      col8 = document.createElement("div")
      col8.classList.add("col-md-8")
   //   col8.classList.add("col-9")
      col8.classList.add("col-sm-12")
    //  col8.setAttribute("id",heroName)
    col8.classList.add("columnaInfoHero");

      

      col4 = document.createElement("div")
      col4.classList.add("col-md-4")
    //  col4.classList.add("col-3")
      col4.classList.add("col-sm-12")
col4.classList.add("columnaImgHero")
     

      divImg = document.createElement("img")
      divImg.setAttribute("src", img)
      
      divImg.classList.add("img-fluid");
      divImg.classList.add("rounded-start");
      divImg.classList.add("imgHeroe");



      iconoSecundario = document.createElement("img");
      iconoSecundario.setAttribute("src", icon)
      iconoSecundario.classList.add("imgIcono");



      divSecundario = document.createElement("div");
      divSecundario.classList.add("row");
      divSecundario.classList.add("g-0");
      divSecundario.classList.add("divContenedorImgInfoHero")
      



      cardBody = document.createElement("div");
      cardBody.classList.add("card-body")


      h3 = document.createElement("h3")
      h3.classList.add("card-title")

      h3.innerHTML = hero.localized_name + "<br>";
      
      pVida = document.createElement("p");
      pVida.classList.add("card-text");
      pVida.innerHTML = "Vida: " + hero.base_health;

      pArmor = document.createElement("p");
      pArmor.classList.add("card-text");
      pArmor.innerHTML = "Armadura: " + hero.base_armor;

      cardBody.appendChild(iconoSecundario);

      pDaño = document.createElement("p");
      pDaño.classList.add("card-text");
      pDaño.innerHTML = "Daño: " + `${hero.base_attack_min} - ${hero.base_attack_max}`;

      p = document.createElement("p");
      p.classList.add("card-text")

      if(hero.primary_attr === "agi"){

        p.innerHTML = "Atributo principal: Agilidad";
        divImg.classList.add("heroeAgilidad")
         cardBody.classList.add("heroAgi");
      }else if(hero.primary_attr === "str"){
        p.innerHTML = "Atributo principal: Fuerza";
           divImg.classList.add("heroeFuerza")
           cardBody.classList.add("heroSTR");

      }else if(hero.primary_attr === "int"){
        p.innerHTML = "Atributo principal: Inteligencia";
           divImg.classList.add("heroeInteligencia")
            cardBody.classList.add("heroInt");
        
      }else{
        p.innerHTML = "Atributo principal: Universal";
           divImg.classList.add("heroeUniversal")
            cardBody.classList.add("heroUni");

      }

      pStats = document.createElement("p");
      pStats.classList.add("card-text");
      pStats.innerHTML = "Vida: " + hero.base_health + "  |   Armadura: " + hero.base_armor + "  |    Daño: " + `${hero.base_attack_min} - ${hero.base_attack_max}` + "<br>" + cadenaRoles;


      let divHabilidades = document.createElement("div");
      divHabilidades.setAttribute("id",heroName);

      divHabilidades.classList.add("divHab");

      
      cardBody.appendChild(h3);
      col4.appendChild(divImg)
      //cardBody.appendChild(p);
      cardBody.appendChild(pStats);
      cardBody.appendChild(divHabilidades);
    

      col8.appendChild(cardBody);

      divSecundario.appendChild(col4);
      divSecundario.appendChild(col8);

      divPrincipal.appendChild(divSecundario);
      contenedorHeroes.appendChild(divPrincipal);


    });





}


function iconosHabilidades(){


//console.log(habilidadesAllHeroes);
  
  Object.entries(habilidadesAllHeroes).forEach(([personaje, habilidades])=>{
  //  console.log(`Habilidades de ${personaje}:`)

    habilidades.foreach((habilidad,index)=>{
  //   console.log(`  ${index + 1}. ${habilidad}`);
    });
  });

}

function f1(){

 // console.log(allHeroesNombreCorto)

  

  Object.entries(habIconosHeroes).forEach(([key,value])=>{
//console.log(key);
    habHeroesImg[key] = value;
  });


  
  
  Object.entries(habHeroesImg).forEach(([key,value])=>{
    

    for(let i=0; i<allHeroesNombreCorto.length; i++){
    
    //  console.log(key);
      if(key.startsWith(allHeroesNombreCorto[i])){
        iconosHabilidadesHeroes[allHeroesNombreCorto[i]][key] = value;
      }  
    }
  });

  //console.log(iconosHabilidadesHeroes);
  





//console.log(habHeroesImg);
}


function f2(){


  Object.entries(iconosHabilidadesHeroes).forEach((heroe,habilidades)=>{

        //console.log("Heroe:", heroe);

        Object.entries(heroe[1]).forEach(([key, value]) => {
         // console.log(key, value);
          let nombreHabilidad = key.slice(heroe[0].length);
          let encabezadoImg = `https://cdn.cloudflare.steamstatic.com${value}`;

         

          let lblNombre = document.createElement("label");
          lblNombre.innerHTML = nombreHabilidad;

          let imgHabilidad = document.createElement("img");
          imgHabilidad.setAttribute("src",encabezadoImg);


          // let div = document.getElementById(heroe[0]);
          // div.appendChild(lblNombre);
          // div.appendChild(imgHabilidad);

          let divHabilidades = document.getElementById(heroe[0]);
         // divHabilidades.appendChild(lblNombre);
          divHabilidades.appendChild(imgHabilidad);
         

        });
    

      });

  

  console.log(iconosHabilidadesHeroes)


}


async function init() {
  await cardsPequeñas();
  await traerConstantes();
  await traerHabilidades();
  
  f1();

  f2();
}

init();

//console.log(allHeroesNombreCorto);
