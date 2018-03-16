import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  list = null;

  constructor(private http: HttpClient){
  }

  ngOnInit() {
    this.http.get('/api/list-service/list').subscribe((data) => {
      this.list = data;
    });
  }

}
