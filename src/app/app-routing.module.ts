import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { HomeWithDebounceComponent } from './view/home/others/home-debounce/home-with-debounce.component';
import { HomeWithSearchButtonComponent } from './view/home/others/home-with-search-button/home-with-search-button.component';
import { HomeExampleComponent } from './view/home/others/home-example/home-example.component';

import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home-with-debounce', component: HomeWithDebounceComponent },
  { path: 'home-with-search-button', component: HomeWithSearchButtonComponent },
  { path: 'home-example', component: HomeExampleComponent },
  { path: 'search/:searchTerm', component: HomeExampleComponent },

  // { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
