import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultRootGuard } from './app.route.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './home/NewComponent/new.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: NewComponent },
    { path: 'contact', component: ContactComponent }
  ], canActivate: [DefaultRootGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
