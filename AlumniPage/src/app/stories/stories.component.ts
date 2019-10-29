import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories = [{

    "story_id" : "1",
 
    "first_name" : "Osama",
 
    "last_name" : "Hussin",
 
    "course_attending" : "Full Stack Web Development Q3 + Q4 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2019/05/07/23/57/hippo-4187448_960_720.jpg",
 
    "my_success_story" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis earum consequuntur suscipit veritatis labore iusto deserunt, id dicta molestias, deleniti. Deserunt temporibus veniam provident esse quisquam hic facere ab aut!"
 
    } , {
 
    "story_id" : "2",
 
    "first_name" : "Sarah",
 
    "last_name" : "Egger",
 
    "course_attending" : "Full Stack Web Development Q3 + Q4 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_960_720.jpg",
 
    "my_success_story" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis earum consequuntur suscipit veritatis labore iusto deserunt, id dicta molestias, deleniti. Deserunt temporibus veniam provident esse quisquam hic facere ab aut!"
 
    } , {
 
    "story_id" : "3",
 
    "first_name" : "Anu",
 
    "last_name" : "Nairis",
 
    "course_attending" : "Full Stack Web Development Q3 + Q4 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2015/01/27/19/34/giraffe-614141_960_720.jpg",
 
    "my_success_story" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis earum consequuntur suscipit veritatis labore iusto deserunt, id dicta molestias, deleniti. Deserunt temporibus veniam provident esse quisquam hic facere ab aut!"
 
    } , {
 
    "story_id" : "4",
 
    "first_name" : "Clemens",
 
    "last_name" : "Sauer",
 
    "course_attending" : "Full Stack Web Development Q3 + Q4 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_960_720.jpg",
 
    "my_success_story" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis earum consequuntur suscipit veritatis labore iusto deserunt, id dicta molestias, deleniti. Deserunt temporibus veniam provident esse quisquam hic facere ab aut!"
 
    } , {
 
    "story_id" : "5",
 
    "first_name" : "Peter",
 
    "last_name" : "Bravo",
 
    "course_attending" : "Full Stack Web Development Q1 + Q2 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2018/11/28/01/17/crocodile-3842768_960_720.jpg",
 
    "my_success_story" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis earum consequuntur suscipit veritatis labore iusto deserunt, id dicta molestias, deleniti. Deserunt temporibus veniam provident esse quisquam hic facere ab aut!"
 
    } , {
 
    "story_id" : "6",
 
    "first_name" : "Lara",
 
    "last_name" : "Schmutz",
 
    "course_attending" : "Full Stack Web Development Q1 + Q2 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2018/09/10/21/02/bouquet-3668046_960_720.jpg",
 
    "my_success_story" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis earum consequuntur suscipit veritatis labore iusto deserunt, id dicta molestias, deleniti. Deserunt temporibus veniam provident esse quisquam hic facere ab aut!"
    
 }];

  constructor() { }

  ngOnInit() {
    var container = document.getElementById("container");

for (let i = 0; i < this.stories.length; i++) {
    container.innerHTML += `
   <div class="col-lg-5 col-md-5 col-sm-12 mx-auto mt-5">
      <div class="card mb-2">
        <!--Card image-->
        <div class="view overlay">
          <img class="card-img-top" src="` + this.stories[i].picture + `" style="width:100%; height:38vh; object-fit:cover;">
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        <!--Card content-->
        <div class="card-body">
          <!--Title-->
          <h4 class="card-title">` + this.stories[i].first_name + " " + this.stories[i].last_name + `</h4>
          <!--Text-->
          <p class="card-text">` + this.stories[i].my_success_story + `</p>
          <button type="button" class="btn btn-light-blue btn-md">Read more</button>
        </div>
      <!-- Card -->
      </div>
    </div>
  `;
}
  }

}
