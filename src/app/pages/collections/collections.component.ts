import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService } from 'src/app/services/data.service';

export interface SupervisorCollections {
  transaction_id: number;
  casual_id: number;
  casual_name: string;
  total_weight: number;
}

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  supervisorDisplayedColumns: string[] = ['transaction_id', 'casual_id', 'casual_name', 'total_weight'];
  driverDisplayedColumns: string[] = ['transaction_id', 'supervisor_id', 'supervisor_name', 'total_weight', 'block_name'];
  factoryDisplayedColumns: string[] = ['transaction_id', 'driver_id', 'driver_name', 'total_weight', 'zone_name'];

  supervisorDataSource!: MatTableDataSource<any>;
  driverDataSource!: MatTableDataSource<any>;
  factoryDataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getSupervisorCollections();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.supervisorDataSource.filter = filterValue.trim().toLowerCase();

    if (this.supervisorDataSource.paginator) {
      this.supervisorDataSource.paginator.firstPage();
    }
  }

  getSupervisorCollections() {
    this.dataService.getData().subscribe(data => {
      this.supervisorDataSource = new MatTableDataSource(data.supervisor)
      this.driverDataSource = new MatTableDataSource(data.driver)
      this.supervisorDataSource.paginator = this.paginator;
      this.supervisorDataSource.sort = this.sort;
    }
    );
  }

  // getDriverCollections() {
  //   this.dataService.getData().subscribe(data => {
  //     this.driverDataSource = new MatTableDataSource(data.driver)
  //     this.driverDataSource.paginator = this.paginator;
  //     this.driverDataSource.sort = this.sort;
  //   }
  //   );
  // }
}
