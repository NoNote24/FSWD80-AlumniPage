import { Component, OnInit } from '@angular/core';
import Events from "./Events";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events : Events[] = [{

    event_id : 1,
 
    type_of_event : "Get Together",
 
    date : "29.10.2019",
 
    location : "CodeFactory Kettenbrückengasse",
 
    img : "https://cdn.pixabay.com/photo/2017/12/01/08/52/feedback-2990424_960_720.jpg",
 
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, beatae ratione, blanditiis necessitatibus nesciunt alias consequuntur dolor iste, nulla officia possimus voluptatibus maiores eos asperiores, est? Distinctio corporis perferendis earum?"
 
    } , {
 
    event_id : 2,
 
    type_of_event : "Cooking at Codefactory",
 
    date : "04.11.2019",
 
    location : "CodeFactory Kettenbrückengasse",
 
    img : "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg",
 
     "description" : "Let's cook together. Everyone should bring his favorite ingriedents. After that we decide together what to cook."
 
    } , {
 
    event_id : 3,
 
    type_of_event : "Lecture and discussion",
 
    date : "16.12.2019",
 
    location : "CodeFactory Stutterheimstraße",
 
    img : "https://cdn.pixabay.com/photo/2016/11/15/07/56/group-1825510_960_720.jpg",
 
    description : "The topic of the Discussion will be \"Programming in 1 year, what will change?\" Afterwards we will host a discussion with our guest Mr. X"
 
    } , {
 
    event_id : 4,
 
    type_of_event : "Get Together",
 
    date : "31.10.2019",
 
    location : "CodeFactory Kettenbrückengasse",
 
    img : "https://cdn.pixabay.com/photo/2017/12/01/08/52/feedback-2990424_960_720.jpg",
 
     description : "Our regular two week get-together. Come over and chat with current and former students"
    
 }];

 
  constructor() { }

  addingImage(element,i){
    element.style.background = "url("+i+")";
  }
  ngOnInit() {
//     // loop for adding html div
// for (let i = 0; i < this.careers.length; i++)
// {
//    // definition of the new element
//    var newItem_1 = 
//     `<div class="parent" onclick="">
//           <div class="child" style="background-image: url('`+ careers[i].img +`');">
//               <p class="header">`+ this.careers[i].type_of_event +`</p>
//               <p class="date">Date: `+ this.careers[i].date +`<br>Location: `+ careers[i].location +`</p>
//               <p class="description">`+ this.careers[i].description +`</p>
//           </div>
//       </div>`
  
//    };
  }


}
