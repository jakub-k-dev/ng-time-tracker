import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './pages/time-table/time-table.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/time-table', pathMatch: 'full' },
  { path: 'time-table', component: TimeTableComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
