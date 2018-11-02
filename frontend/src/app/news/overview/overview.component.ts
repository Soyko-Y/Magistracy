import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import {Operator} from '../../operator/classes/operator.class';
import {MatDialog, MatTableDataSource} from '@angular/material';
// import {ReportService} from '../report.service';
// import {ReportDataRow} from '../classes/report.class';
// import {ChartDialogComponent} from '../chartdialog/chartdialog.component';

export interface DateData {
  startDate: Date;
  endDate: Date;
}

export class ChartDisplayedColumn {
  constructor(
    public name: string,
    public checked: boolean,
    public showIfNumber: boolean
  ) {
  }
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  /**
   * The columns to display in the table
   */
  public displayedColumns: Array<string> = [];

  /**
   * The data source to the table
   */
  // public reportDataSource: MatTableDataSource<ReportDataRow>;

  /**
   * Active tab name
   */
  public activeReport: string;

  /**
   * Whether or not the report is in loading state
   */
  public loading = false;

  /**
   * The list with selected columns for using as names axes in chart
   */
  public checkedColumnsList: Array<string>;

  /**
   * Number of checked columns
   */
  public numOfCheckedColumns: number;

  /**
   * Number of max checked columns
   */
  public limitCheckedColumns = 2;

  /**
   * The columns with checked flag
   */
  public displayedColumnsList: Array<any>;

  /**
   * Constructor
   */
  constructor(//private reportService: ReportService,
              private route: ActivatedRoute,
              private matDialog: MatDialog) {
  }

  /**
   * Angular OnInit
   */
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params.name);

      this.activeReport = params.name;

      const now: Date = new Date();

      // this.reportDataSource = new MatTableDataSource<ReportDataRow>();
      this.displayedColumnsList = [];
      this.numOfCheckedColumns = 0;
      this.checkedColumnsList = [];

      // this.loadTable(params.name);
    });
  }

  /**
   * Refresh all data table
   */
  // public refresh() {
  //   this.loadTable(this.activeReport);
  // }

  /**
   * Open dialog with charts
   */
  // public openChartDialog() {
  //   this.createCheckedColumnsList();
  //   // Open dialog
  //   console.log(this.checkedColumnsList);
  //   const dialogRef = this.matDialog.open(ChartDialogComponent, {
  //     width: '80vw',
  //     data: {
  //       startDate: this.startDate,
  //       endDate: this.endDate,
  //       columnsList: this.checkedColumnsList,
  //       type: this.activeReport
  //     }
  //   });
  // }

  // public loadTable(type: string) {
  //   this.loading = true;

  //   this.reportService.getReport(type, this.startDate, this.endDate)
  //     .subscribe(report => {
  //       if (!report) {
  //         return;
  //       }

  //       this.loading = false;
  //       this.displayedColumns = report.data.length > 0 ? Object.getOwnPropertyNames(report.data[0]) : [];
  //       const displayedColumnsValues = report.data.length > 0 ? Object.values(report.data[0]) : [];
  //       if (this.displayedColumnsList.length === 0) {
  //         for (let i = 0; i < this.displayedColumns.length; i++) {
  //           if (typeof displayedColumnsValues[i] === 'number') {
  //             this.displayedColumnsList.push(new ChartDisplayedColumn(this.displayedColumns[i], false, true));
  //           } else {
  //             this.displayedColumnsList.push(new ChartDisplayedColumn(this.displayedColumns[i], false, false));
  //           }
  //         }
  //       }
  //       this.reportDataSource = new MatTableDataSource<ReportDataRow>(report.data);
  //       console.log(this.displayedColumns, report.data, this.reportDataSource);
  //     });
  // }

  public updateCheck(isChecked: boolean) {
    if (isChecked) {
      this.numOfCheckedColumns++;
    } else {
      this.numOfCheckedColumns--;
    }
  }

  private createCheckedColumnsList() {
    this.checkedColumnsList = [];
    this.displayedColumnsList.forEach(columnItem => {
      if (columnItem.checked) {
        this.checkedColumnsList.push(columnItem.name);
      }
    });
  }
}
