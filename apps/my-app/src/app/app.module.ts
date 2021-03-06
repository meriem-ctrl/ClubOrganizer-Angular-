import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

//angularfire imports
/*import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

//environment import
import { environment } from "../environments/environment";*/


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscrireSiteComponent } from './inscrire-site/inscrire-site.component';
import { AbonnerClubComponent } from './abonner-club/abonner-club.component';
import { CreerClubComponent } from './creer-club/creer-club.component';
import { SAuthentifierComponent } from './s-authentifier/s-authentifier.component';
import { CardsClubsComponent } from './cards-clubs/cards-clubs.component';
import { HttpClientModule } from '@angular/common/http';




import {FormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ParametresComponent } from './parametres/parametres.component';
import { EventComponent } from './event/event.component';
import { PageClubComponent } from './page-club/page-club.component';
import { ListeMembreSComponent } from './liste-membre-s/liste-membre-s.component';
import { ListClubsComponent } from './list-clubs/list-clubs.component';
import { TestComponent } from './test/test.component';
import { PubService } from './pub.service';







const appRoutes: Routes =[
  {path:'creerClub',component:CreerClubComponent},
  {path:'inscrireSite',component:InscrireSiteComponent},
  {path:'home',component:HomeComponent},
  {path:'clubsCards',component:CardsClubsComponent},
  {path:'sAuthentifier', component:SAuthentifierComponent},
  {path:'logo',component:LogoComponent},
  {path:'meetings',component:MeetingsComponent},
  {path:'event',component:EventComponent},
  {path:'listeMembreS',component:ListeMembreSComponent},
  {path:'parametres',component:ParametresComponent},
  {path:'pageClub',component:PageClubComponent},
  {path:'listClubs',component: ListClubsComponent},
  {path:'abonnerClub',component:AbonnerClubComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscrireSiteComponent,
    AbonnerClubComponent,
    CreerClubComponent,
    SAuthentifierComponent,
    CardsClubsComponent,
    NavComponent,
    LogoComponent,
    MeetingsComponent,
    ParametresComponent,
    EventComponent,
    PageClubComponent,
    ListeMembreSComponent,
    ListClubsComponent,
    TestComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
 

    
    
  ],
  providers: [PubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
