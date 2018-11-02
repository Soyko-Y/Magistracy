import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutModule } from './about/about.module';
import { DownloadsModule } from './downloads/downloads.module';
import { NewsModule } from './news/news.module';
import { LoginModule } from './login/login.module';
import { ProjectsModule } from './projects/projects.module';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AboutModule,
    DownloadsModule,
    NewsModule,
    ProjectsModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
