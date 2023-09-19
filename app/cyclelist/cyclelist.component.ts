import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cycle  } from '../cycle';

@Component({
  selector: 'app-cyclelist',
  templateUrl: './cyclelist.component.html',
  styleUrls: ['./cyclelist.component.css']
})
export class CycleListComponent implements OnInit {
  allCycles: Cycle[] = [];
  path ='http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Cycle[]>(`${this.path}/cycle/list`).subscribe(cycles => this.allCycles = cycles);
  }

}
