import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { CareersComponent } from './careers/careers.component';
import { DirectoryComponent } from './directory/directory.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewsComponent } from './previews/previews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoriesComponent,
    CareersComponent,
    DirectoryComponent,
    EventsComponent,
    FooterComponent,
    PreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
