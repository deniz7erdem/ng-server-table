import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() settings: any;

  dataService: any;
  displayedColumns: any;
  tableHeaders: any;
  dataSource: any;
  showFirstLastButtons: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  length: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 1;
  isLoading: boolean = true;

  ngOnInit() {
    this.dataService = this.settings.dataService;
    this.displayedColumns = this.settings.displayedColumns;
    this.tableHeaders = this.settings.tableHeaders;
    this.showFirstLastButtons = this.settings.showFirstLastButtons;
    this.dataService.getUsers(1, 10).subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.data);
      this.length = data.length;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }


  getData(pageIndex: number = 1, pageSize: number = 10) {
    this.isLoading = true;
    this.dataService.getUsers(pageIndex, pageSize).subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.data);
      this.length = data.length;
      this.isLoading = false;
    });
  }

  onPageChange(event: any) {
    console.log(event);
    this.getData(event.pageIndex + 1, event.pageSize);
  }
}
