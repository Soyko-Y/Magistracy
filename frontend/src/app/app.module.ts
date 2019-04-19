import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutModule } from './about/about.module';
import { DownloadsModule } from './downloads/downloads.module';
import { NewsModule } from './news/news.module';
import { LoginModule } from './login/login.module';
import { ProjectsModule } from './projects/projects.module';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    CommonModule,
    AboutModule,
    DownloadsModule,
    NewsModule,
    ProjectsModule,
    LoginModule,
    HomeModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
