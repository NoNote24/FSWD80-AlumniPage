import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
    alumni = [{

        "alumni_id" : "1",
     
        "first_name" : "Osama",
     
        "last_name" : "Hussin",
     
        "my_skills" : "HTML, CSS, Javascript, Delphi, Pascal",
     
        "current_working_field" : "web-development",
     
        "job_title" : "Junior Web Developer",
     
        "e_mail" : "osamahossien@yahoo.com"
     
        } , {
     
        "alumni_id" : "2",
     
        "first_name" : "Sarah",
     
        "last_name" : "Egger",
     
        "my_skills" : "HTML, CSS, Javascript, Java",
     
        "current_working_field" : "java-software-development",
     
        "job_title" : "Trainee Java Software Developer",
     
        "e_mail" : "####.###@###.###"
     
        } , {
     
        "alumni_id" : "3",
     
        "first_name" : "Anu",
     
        "last_name" : "Nairis",
     
        "my_skills" : "HTML, CSS, Javascript",
     
        "current_working_field" : "web-development",
     
        "job_title" : "Junior Web Developer",
     
        "e_mail" : "####.###@###.###"
     
        } , {
     
        "alumni_id" : "4",
     
        "first_name" : "Clemens",
     
        "last_name" : "Sauer",
     
        "my_skills" : "HTML, CSS, Javascript, VBA",
     
        "current_working_field" : "finance",
     
        "job_title" : "trader",
     
        "e_mail" : "clemens.sauer@gmx.net"
     
        } , {
     
        "alumni_id" : "5",
     
        "first_name" : "Peter",
     
        "last_name" : "Bravo",
     
        "my_skills" : "HTML, CSS, Javascript, SQL, PHP, Python",
     
        "current_working_field" : "self-employed",
     
        "job_title" : "Web Developer",
     
        "e_mail" : "####.###@###.###",
     
        } , {
     
        "alumni_id" : "6",
     
        "first_name" : "Lara",
     
        "last_name" : "Schmutz",
     
        "my_skills" : "HTML, CSS, Javascript, SQL, PHP, Python",
     
        "current_working_field" : "system developer",
     
        "job_title" : "junior c++ developer",
     
        "e_mail" : "####.###@###.###",
        
     }];

  constructor() { }

  ngOnInit() {
// loop for adding html div
for (let i = 0; i < this.alumni.length; i++)
      {
         // definition of the new element
         var newItem_1 = 
        	`<tr class="">
                <td>`+ this.alumni[i].first_name +`</td>
                <td>`+ this.alumni[i].last_name +`</td>
                <td>`+ this.alumni[i].current_working_field +`</td>
                <td>`+ this.alumni[i].job_title +`</td>
                <td>`+ this.alumni[i].e_mail +`</td>
                <td><input type="submit" class="btn" value="Write to me!"></td>
              </tr>`
         // insert the new element 
         document.getElementById("test").innerHTML += newItem_1;
        //  $("#test").append(newItem_1); 
         };

function sendMail(obj)
{
    var yourMessage = "Hi, please write me your question!";
    var subject = "Question regarding Alumni Codefactory";
    document.location.href = "mailto:" + obj.e_mail + "?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}
   
var btns = document.getElementsByClassName("btn");

for(let i = 0; i< btns.length ; i+=1){
    btns[ i ].addEventListener("click",function(){
        sendMail(this.alumni[ i ])
        // console.log(i)
    });
}

  }
}