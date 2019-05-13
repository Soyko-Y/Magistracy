import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { DetailComponent } from './detail/detail.component';

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
    declarations: [
        ProjectsComponent,
        DetailComponent
    ]
})
export class ProjectsModule {
}
