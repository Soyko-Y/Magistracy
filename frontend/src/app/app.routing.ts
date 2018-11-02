import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OverviewComponent as NewsOverviewComponent } from './news/overview/overview.component';
import { OverviewComponent as AboutOverviewComponent } from './about/overview/overview.component';
import { OverviewComponent as DownloadsOverviewComponent } from './downloads/overview/overview.component';
import { OverviewComponent as ProjectsOverviewComponent } from './projects/overview/overview.component';
import { LoginComponent as LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'news', children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: NewsOverviewComponent },
        ]
      },
      {
        path: 'about', children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: AboutOverviewComponent },
        ]
      },
      {
        path: 'downloads', children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: DownloadsOverviewComponent },
        ]
      },
      {
        path: 'projects', children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: ProjectsOverviewComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
