
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent

  }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
