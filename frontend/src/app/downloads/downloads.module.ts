import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadsComponent } from './downloads.component';

import { RouterModule } from '@angular/router';
import { DownloadsService } from './downloads.service';
import { MaterialModule } from '../material.module';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    providers: [],
    declarations: [DownloadsComponent]
})
export class DownloadsModule {
}
