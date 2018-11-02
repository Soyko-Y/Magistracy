import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';

import { RouterModule } from '@angular/router';
import { ProjectsService } from './projects.service';
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
export class ProjectsModule {
}
