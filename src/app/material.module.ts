import { NgModule } from '@angular/core';

import {
 MatCardModule,
 MatButtonModule,
 MatMenuModule,
 MatToolbarModule,
 MatIconModule,
 MatSelectModule,
 MatFormFieldModule,
 MatInputModule,
 MatDividerModule,
 MatListModule,
 MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ]
})
  export class MaterialModule {}
