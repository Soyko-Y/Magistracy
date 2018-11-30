import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { NewsService } from './news.service';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  declarations: [OverviewComponent]
})
export class NewsModule {
}
