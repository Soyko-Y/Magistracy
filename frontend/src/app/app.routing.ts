import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent as NewsComponent } from './news/news.component';
import { AboutComponent as AboutComponent } from './about/about.component';
import { DownloadsComponent as DownloadsComponent } from './downloads/downloads.component';
import { ProjectsComponent as ProjectsComponent } from './projects/projects.component';
import { LoginComponent as LoginComponent } from './login/login.component';
import { WctabletComponent as ProjectsWctabletComponent } from './projects/wctablet/wctablet.component';
import { GstreamerComponent as ProjectsGstreamerComponent } from './projects/gstreamer/gstreamer.component';
import { ArchitectureComponent as AboutArchitectureComponent } from './architecture/architecture.component';
import { InstallationComponent as AboutInstallationComponent } from './installation/installation.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'architecture', component: AboutArchitectureComponent },
      { path: 'installation', component: AboutInstallationComponent },
      { path: 'downloads', component: DownloadsComponent },
      {
        path: 'projects', component: ProjectsComponent,
        children: [
          { path: 'wctablet', component: ProjectsWctabletComponent },
          { path: 'gstreamer', component: ProjectsGstreamerComponent },
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
