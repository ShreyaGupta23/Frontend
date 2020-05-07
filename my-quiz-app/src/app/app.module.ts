import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ViewquizComponent } from './components/viewquiz/viewquiz.component';
import { TakequizComponent } from './components/takequiz/takequiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './components/results/results.component';
const appRoutes: Routes = [
  { path: 'take', component:  TakequizComponent},
  { path: 'view',      component: ViewquizComponent },
  { path: 'result',      component: ResultsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ViewquizComponent,
    TakequizComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
