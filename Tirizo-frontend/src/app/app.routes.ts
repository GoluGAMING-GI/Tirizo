import { Routes } from '@angular/router';
import { Seller } from '../seller/seller/seller';
import { Admin } from '../admin/admin/admin';
import { About } from '../about/about/about';
import { Categories } from '../categories/categories/categories';
import { Contact } from '../contact/contact/contact';


export const routes: Routes = [
  { path: 'admin', component: Admin },
  { path: 'seller', component: Seller },
  { path: 'categories', component: Categories },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];
