import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BankHomeComponent } from './pages/bank-home/bank-home.component';
import { BankServicesHomeComponent } from './pages/bank-services-home/bank-services-home.component';

// Routes configuration
const routes: Routes = [
  { path: 'services', component: BankServicesHomeComponent },
  {
    path: '',
    component: BankHomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
