import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() dataService: any;
  @Input() displayedColumns: any;
  @Input() dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  length:number = 0;
  pageSize:number = 10;
  pageSizeOptions:number[] = [5, 10, 25, 100];
  pageIndex:number = 1;

  ngOnInit() {
    this.dataService.getUsers(1, 10).subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.data);
      this.length = data.length;
      this.dataSource.paginator = this.paginator;
    });
  }


  getData(pageIndex: number = 1, pageSize: number = 10){
    this.dataService.getUsers(pageIndex, pageSize).subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.data);
      this.length = data.length;
    });
  }

  onPageChange(event: any) {
    console.log(event);
    this.getData(event.pageIndex + 1, event.pageSize);
  }
}
