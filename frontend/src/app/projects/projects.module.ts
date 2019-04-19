import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';

import { ProjectsService } from './projects.service';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    providers: [],
    declarations: [OverviewComponent]
})
export class ProjectsModule {
}
