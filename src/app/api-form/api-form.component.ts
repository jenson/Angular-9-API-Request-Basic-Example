import { Component, OnInit } from '@angular/core';
import { LoadDataService } from "../service/load-data.service";

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})

export class ApiFormComponent implements OnInit {

  json_response: object;

  constructor(private loadDataService:LoadDataService) {
    console.log("The Component has been Instantiated.");
   }

  ngOnInit(): void {
  }

  fetchData(): any{
    alert("Loading Data From Server. It May Take Few Seconds.");
    this.loadDataService.getApiData().subscribe((apiData) => {
        this.json_response = apiData;
    });
  }

}
