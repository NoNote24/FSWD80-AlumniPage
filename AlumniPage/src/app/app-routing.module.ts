import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { CareersComponent } from './careers/careers.component';
import { DirectoryComponent } from './directory/directory.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"stories", component: StoriesComponent
  },
  {
    path:"careers", component: CareersComponent
  },
  {
    path:"directory", component: DirectoryComponent
  },
  {
    path:"events", component: EventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
