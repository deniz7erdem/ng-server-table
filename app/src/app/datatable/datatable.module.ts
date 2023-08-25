import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
