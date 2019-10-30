class eventClass {
    //Attributes
    event;
    typeOfEvent;
    date;
    location;
    img;
    description;

    //Constructor
    constructor(event:string, typeOfEvent:string, date:string, location:string, img:string, description:string) {
        this.event = event;
        this.typeOfEvent = typeOfEvent;
        this.date = date;
        this.location = location;
        this.img = img;
        this.description = description;
    }

    //Method
    displayEvents() {
//         <div class="wrapper" *ngFor="let val of events">
//         <div class="parent" onclick="">
//            <div class="child"  [ngStyle]="{'background-image': url({{val.img}})}"">
//                <p class="header">{{val.type_of_event}}</p>
//                <p class="date">Date: {{val.date}}<br>Location: {{val.location}}</p>
//                <p class="description">{{val.description}}</p>
//            </div>
//        </div>
// </div>
    }

}

var eventArray = [];

