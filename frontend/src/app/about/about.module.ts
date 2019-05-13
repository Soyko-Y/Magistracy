import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutService } from './about.service';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    providers: [],
    declarations: [AboutComponent]
})
export class AboutModule {
}
