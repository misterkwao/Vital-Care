//render whole page
let main_component = ` <!-- Landing image card -->
     <section id="landing-section" class="hidden">
        <div class="landing-card">
            <div class="card-text">
                <h1>Your new primary healthcare provider</h1>
                <p>We make primary healthcare more accessible, dependable & personalized by bringing world class medical care into your home.</p>
            </div>
            <div class="card-img"><img src="/assests/images/caring-doctor-talking-senior-woman-wheelchair-nursing-home-during-coronavirus-pandemic.jpg" alt="" srcset=""></div>
        </div>
     </section>

    <!-- About Us -->
     <section id="about-us-section" class="hidden">
        <div class="about-us-card">
            <div class="card-img">
                <img src="/assests/images/2150994993.jpg" alt="" srcset="">
            </div>
            <div class="card-text">
                <h3>About Us</h3>
                <p>
                    We're creating a revolutionary, reliable primary healthcare service. 
                    We provide GP's, nurses, physiotherapists, adult care, medication delivery and sample collection. 
                    The best part? You can access us from the comfort of your home! Browse our list of accessible packages or customize one to suit your needs and enjoy easy healthcare at your convenience.
                </p>
            </div>
        </div>
     </section>
    
     <!-- Our services -->
      <section id="services-section" class="hidden">
        <div class="services-card">
            <span class="services-heading"><h3>Our Services</h3></span>
            <div class="mini-cards">
              <!-- Cards are being rendered from js -->
            </div>
        </div>
      </section>

    <!-- Benefits -->
     <section id="benefits-section" class="hidden">
        <div class="benefits-card">
            <span class="benefits-heading"><h3>Benefits of our services</h3></span>
            <div class="mini-cards">
                <div class="card">
                    <div class="img"><img src="/assests/images/VitalCare-Eliminating-Long-.png" alt="" srcset=""></div>
                    <h4>Eliminating Long Wait Times</h4>
                </div>
                <div class="card">
                    <div class="img"><img src="/assests/images/VitalCare-PRivacy.png" alt="" srcset=""></div>
                    <h4>Confidentiality and Privacy</h4>
                </div>
                <div class="card">
                    <div class="img"><img src="/assests/images/VitalCare-Providing-Convenient-.png" alt="" srcset=""></div>
                    <h4>Providing Convenient Services</h4>
                </div>
                <div class="card">
                    <div class="img"><img src="/assests/images/VitalCare-Medical-Care.png" alt="" srcset=""></div>
                    <h4>Providing Sustained Medical Care</h4>
                </div>
              </div>
        </div>
     </section>`;

// Waiting for dom to be ready before ren
document.addEventListener('DOMContentLoaded', ()=>{
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

});