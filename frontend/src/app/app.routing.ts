import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent as NewsComponent } from './news/news.component';
import { AboutComponent as AboutComponent } from './about/about.component';
import { DownloadsComponent as DownloadsComponent } from './downloads/downloads.component';
import { ProjectsComponent as ProjectsComponent } from './projects/projects.component';
import { LoginComponent as LoginComponent } from './login/login.component';
import { DetailComponent as ProjectsDetailComponent } from './projects/detail/detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'downloads', component: DownloadsComponent },
      {
        path: 'projects', component: ProjectsComponent,
        children: [
          { path: ':project', component: ProjectsDetailComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
