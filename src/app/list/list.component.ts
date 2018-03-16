import { ListService } from './list.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: List;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getList().subscribe(
      (list: List) => this.list = list
    );
  }

}
