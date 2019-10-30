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
 
    "my_success_story" : "My name is Osama, I have studied economics at Damascus University. I have worked in an international company as an export accountant in Jordan. Since 2015 I am living in Austria, during this time I´ve learned German. I like to learn coding and computer languages, for that I 've started the course \" web developer \" at Code Factory institute in September. It was a great experience to learn and get more knowledge."
 
    } , {
 
    "story_id" : "2",
 
    "first_name" : "Sarah",
 
    "last_name" : "Egger",
 
    "course_attending" : "Full Stack Web Development Q3 + Q4 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_960_720.jpg",
 
    "my_success_story" : "I started building websites when I was a kid and took every IT class possible at school. After a career in interfaith dialogue I returned to programming, took a course in Java Software Development and one for Full Stack Web Development. My languages include Java, a bit of Ruby, HTML5, (S)CSS, JavaScript and Typescript - though I have a special love for Java and Typescript."
 
    } , {
 
    "story_id" : "3",
 
    "first_name" : "Anu",
 
    "last_name" : "Nairis",
 
    "course_attending" : "Full Stack Web Development Q3 + Q4 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2015/01/27/19/34/giraffe-614141_960_720.jpg",
 
    "my_success_story" : "Studying coding has given me a better perspective of what I want to do in my life. Before CodeFactory I had not written a line of code in my life, but now I can present you a moderately nice and moderately responsive web page. Moreover, CodeFactory's moto on giving not only the education, but also serving as a gathering place for alumni is endearing. And they offer beer at the parties!"
 
    } , {
 
    "story_id" : "4",
 
    "first_name" : "Clemens",
 
    "last_name" : "Sauer",
 
    "course_attending" : "Full Stack Web Development Q3 + Q4 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_960_720.jpg",
 
    "my_success_story" : "I attended Full-Web Development course in September 2019 and finished in December 2019. Before attending the course, I worked in several companies in finance and business intelligence departments. Doing the course at Codefactory was the best decision for me to start a new working-life. They teach you how to work in a programming team and how to solve problems in the end. I am now working again in finance industry but with a lot of programming too, which I love 😊."
 
    } , {
 
    "story_id" : "5",
 
    "first_name" : "Peter",
 
    "last_name" : "Bravo",
 
    "course_attending" : "Full Stack Web Development Q1 + Q2 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2018/11/28/01/17/crocodile-3842768_960_720.jpg",
 
    "my_success_story" : "After the loss of my old job I decided to change completely my life. I started researching what will be the future of working and found that coding is definitely the FUTURE. It was difficult for me without any experience finding a coding school but then there was CodeFactory. The provided me with an extensive education and now I am working in the coding industry as a senior web developer. My motto is, everyone can be a programmer you just have to want it."
 
    } , {
 
    "story_id" : "6",
 
    "first_name" : "Lara",
 
    "last_name" : "Schmutz",
 
    "course_attending" : "Full Stack Web Development Q1 + Q2 2019",
 
    "picture" : "https://cdn.pixabay.com/photo/2018/09/10/21/02/bouquet-3668046_960_720.jpg",
 
    "my_success_story" : "I went to a polytechnical college in Burgenland and moved to Vienna to study Information Technology at the Technical University of Vienna. I'm an expert in IT-security with a specialization in power grids. In autumn 2019 I also certified as a SCRUM master."
    
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
