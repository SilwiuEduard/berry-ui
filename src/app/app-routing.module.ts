import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home/home.component';
import { LoginComponent } from './view/login/login.component';
// import { AppComponent } from './app.component';
import { HomeWithSearchButtonComponent } from './view/home/home-with-search-button/home-with-search-button.component';
import { HomeExampleComponent } from './view/home/home-example/home-example.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },

  { path: 'home-with-search-button', component: HomeWithSearchButtonComponent },
  { path: 'home-example', component: HomeExampleComponent },
  { path: 'search/:searchTerm', component: HomeExampleComponent },

  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
