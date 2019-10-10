import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { WctabletComponent } from './wctablet/wctablet.component';
import { GstreamerComponent } from './gstreamer/gstreamer.component';

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
        WctabletComponent,
        GstreamerComponent
    ]
})
export class ProjectsModule {
}
