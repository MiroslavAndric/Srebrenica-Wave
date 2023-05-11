import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { SWFestComponent } from './components/home/sw-fest/sw-fest.component';
import { MfCenterComponent } from './components/home/mf-center/mf-center.component';
import { EventsComponent } from './components/home/events/events.component';
import { HomeComponentHolderComponent } from './components/home/home-component-holder/home-component-holder.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { BreweryComponent } from './components/brewery/brewery.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InfoPointComponent } from './components/info-point/info-point.component';
import { AboutComponent } from './components/about/about.component';
import { AlleventsComponent } from './components/allevents/allevents.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainContentComponent } from './components/contacts/main-content/main-content.component';
import { HeaderContainerComponent } from './components/brewery/header-container/header-container.component';
import { MainContentBreweryComponent } from './components/brewery/main-content-brewery/main-content-brewery.component';
import { HeaderFestivalComponent } from './components/festival/header-festival/header-festival.component';
import { MainContentFestivalComponent } from './components/festival/main-content-festival/main-content-festival.component';
import { HederInfoContainerComponent } from './components/about/heder-info-container/heder-info-container.component';
import { MainContentAboutComponent } from './components/about/main-content-about/main-content-about.component';
import { HeaderAlleventsComponent } from './components/allevents/header-allevents/header-allevents.component';
import {MainContentAlleventsComponent} from './components/allevents/main-content-allevents/main-content-allevents.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PerformInPivnicaComponent } from './components/perform-in-pivnica/perform-in-pivnica.component';
import { BookPivnicaComponent } from './components/book-pivnica/book-pivnica.component';
import { FormsModule } from '@angular/forms';
import { SingleEventComponent } from './components/allevents/single-event/single-event.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    component: HomeComponentHolderComponent
  },
  {
    path: 'o-nama',
    component: AboutComponent
  },
  {
    path: 'info-point',
    component: InfoPointComponent
  },
  {
    path: 'pivnica',
    component: BreweryComponent
  },
  {
    path: 'festival',
    component: FestivalComponent
  },
  {
    path: 'dogadjaji',
    component: AlleventsComponent
  },
  {
    path: 'kontakt',
    component: ContactsComponent
  },
  {
    path: 'sviraj-i-ti',
    component: PerformInPivnicaComponent
  },
  {
    path: 'bookiraj-pivnicu',
    component: BookPivnicaComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    SWFestComponent,
    MfCenterComponent,
    EventsComponent,
    HomeComponentHolderComponent,
    FooterComponent,
    BreweryComponent,
    FestivalComponent,
    ContactsComponent,
    AboutComponent,
    AlleventsComponent,
    NotFoundComponent,
    MainContentComponent,
    HeaderContainerComponent,
    MainContentBreweryComponent,
    HeaderFestivalComponent,
    MainContentFestivalComponent,
    HederInfoContainerComponent,
    MainContentAboutComponent,
    HeaderAlleventsComponent,
    MainContentAlleventsComponent,
    ScrollToTopComponent,
    PerformInPivnicaComponent,
    BookPivnicaComponent,
    SingleEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
