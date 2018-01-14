
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login';
=======
>>>>>>> master

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: AppComponent
<<<<<<< HEAD
  },
  {
    path: 'login',
    component: LoginComponent
=======
>>>>>>> master
  }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
