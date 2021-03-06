import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})

export class CareersComponent implements OnInit {
  careers = [{

    "story_id" : "1",
 
    "companyName" : "Rewe",
 
    "description" : "Die REWE International AG zeigt Verantwortung. In unserem nachhaltigen Handeln orientieren wir uns an den vier Nachhaltigkeitssäulen \"Grüne Produkte\", \"Mitarbeiter\", \"Energie, Klima und Umwelt\" und \"Gesellschaftliches Engagement\".",
 
    "searchingFor" : "Front-End Developers for our online shop",
 
    "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Rewe-group.svg/1200px-Rewe-group.svg.png",
 
    "contact" : "https://www.rewe-group.at/de/kontakt"
 
    } , {
 
    "story_id" : "2",
 
    "companyName" : "Spar",
 
    "description" : "Die SPAR Österreich-Gruppe ist ein mitteleuropäischer Handelskonzern und im Kerngeschäft auch in den Ländern Nordost-Italien, Ungarn, Slowenien und Kroatien tätig; im Shopping-Center-Bereich zudem in Tschechien und mit Hervis zusätzlich in Tschechien, Rumänien und Bayern. Mit REGIO, TANN und dem Weingut Schloss Fels führt SPAR auch drei eigene Produktionsbetriebe.",
 
    "searchingFor" : "Back-End Developers for our import department",
 
    "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spar-logo.svg/250px-Spar-logo.svg.png",
 
    "contact" : "office@spar.at"
 
    } , {
 
    "story_id" : "3",
 
    "companyName" : "Amazon",
 
    "description" : "Amazon.com, Inc. ist ein börsennotierter US-amerikanischer Onlineversandhändler mit einer breit gefächerten Produktpalette. Nach eigenen Angaben hat Amazon als Marktführer des Handels im Internet die weltweit größte Auswahl an Büchern, CDs und Videos.",
 
    "searchingFor" : "JavaScript Developers",
 
    "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/250px-Amazon.com-Logo.svg.png",
 
    "contact" : "jugendschutz@amazon.de"
 
    } , {
 
    "story_id" : "4",
 
    "companyName" : "Lush",
 
    "description" : "Lush ist ein Unternehmen mit Hauptsitz im britischen Poole, das Kosmetikartikel wie Seife und Duschgel herstellt und in einer eigenen Ladenkette vertreibt. Im Jahr 2015 betrieb das Unternehmen weltweit 936 Läden und verkaufte Produkte im Wert von 574 Millionen Pfund.",
 
    "searchingFor" : "Full Stack Developers",
 
    "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lush_%28Unternehmen%29_logo.svg/250px-Lush_%28Unternehmen%29_logo.svg.png",
 
    "contact" : "onlineshop@lush.at"
    
 }];


  constructor() { }

  // displayCareers(careers) {
  //   careers.forEach(element => {
  //     document.getElementById("divCareers").innerHTML += `
  //     <div class="card mb-3">
  //       <img src="` + element.img + `" class="card-img-top" alt="Image">
  //       <div class="card-body">
  //         <h5 class="card-title">`+ element.companyName + `</h5>
  //         <p class="card-text">` + element.description + `</p>
  //         <p class="card-text">We are searching for: ` + element.searchingFor + `</p>
  //         <a href="https://www.karriere.at/">View full job offer</a>
  //         <p class="card-text"><small class="text-muted">Contact us: ` + element.contact + ` </small></p>
  //       </div>
  //     </div>
  //     `
  //   });
  // }

  ngOnInit() {

  //  this.displayCareers(this.careers);

    }


  

  // displayCareers(careers) {
  //   for (let i = 0; i < careers.length; i++) {
  //     const element = careers[i];

  //     document.getElementById("divCareers").innerHTML += `
  //      <div class="card mb-3">
  //        <img src="`element.img`" class="card-img-top" alt="Image">
  //        <div class="card-body">
  //          <h5 class="card-title">`element.companyName`</h5>
  //          <p class="card-text">`element.description`</p>
  //          <p class="card-text">We are searching for: `element.searchingFor`</p>
  //          <a href="https://www.karriere.at/">View full job offer</a>
  //          <p class="card-text"><small class="text-muted">Contact us: `element.contact` </small></p>
  //        </div>
  //      </div>
  //      `
      
  //   }
  // }


  }
