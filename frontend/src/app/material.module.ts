import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatTabsModule,
        MatChipsModule,
        MatExpansionModule,
        MatDialogModule,
        MatTooltipModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
    ],
    exports: [
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatTabsModule,
        MatChipsModule,
        MatExpansionModule,
        MatDialogModule,
        MatTooltipModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
    ]
})
export class MaterialModule { }
