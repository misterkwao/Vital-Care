// This lightframework is Experimental 

let renderer = document.querySelector('.pg-render'); // renderer container
let navigation =document.querySelectorAll('.btn')

//  waiting loader 
var loader = document.getElementById('loader');
window.addEventListener("load", function(){
    this.setTimeout(()=>{
        loader.style.display = "none";
    },1000) 
});


//Render initial component
renderer.insertAdjacentHTML("beforeend", main_component);

// SOme boring animations
vanillaAnime();

//Handling routing
navigation.forEach(button => {
    button.addEventListener("click", function() {
      // Remove 'active' class from all buttons
      navigation.forEach(btn => btn.classList.remove('active'));
      
      // Add 'active' class to the clicked button
      this.classList.add('active');
      //handle navigation
      if(this.id === "4"){
        renderer.innerHTML = ''; // clear previous component
        renderer.insertAdjacentHTML("beforeend", packages_component);
      }
      else{
        renderer.innerHTML = '';
        renderer.insertAdjacentHTML("beforeend", main_component);
        renderCards(); // this is to re-render cards
      }
      // SOme boring animations
      vanillaAnime();
    });
  });


function vanillaAnime (){
  // SOme boring animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      console.log('yh')
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
}

function renderCards(){
      //render our services cards
let cards = document.querySelector('.mini-cards');
for (let i = 0; i < cards_data.length; i++){
    let list_items = `<div class="card">
                    <div class="img"><img src=${cards_data[i]["img-path"]} alt="" srcset=""></div>
                    <h4>${cards_data[i]["heading"]}</h4>
                    <p>${cards_data[i]["description"]}</p>
                </div>`;
    cards.insertAdjacentHTML("beforeend", list_items);
}

}