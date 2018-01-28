
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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

  },
  {
    path: 'dashboard',
    component: DashboardComponent

  }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
