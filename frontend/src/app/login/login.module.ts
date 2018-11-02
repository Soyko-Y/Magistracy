import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
    ],
    providers: [],
    declarations: [LoginComponent]
})
export class LoginModule {
}
