import { Component, OnInit ,EventEmitter,Output } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import * as myGlobal from '../../global'
@Component({
  selector: 'app-tabdate',
  templateUrl: './tabdate.component.html',
  styleUrls: ['./tabdate.component.css'],
})
export class TabdateComponent implements OnInit {
	tabId = 2
	listTab;
	@Output() emitTab = new EventEmitter<any>();

  	constructor(private http:Http) {}

  	emitDateClick(day,month,year,id)
  	{
  		this.tabId = id
  		this.emitTab.emit({day,month,year,id})
  	}

  	get_json(url)
	{
	 	return this.http.get(url).map(
	 		(response:Response) => response.json());
	}
	fetchDate()
	{
	      this.get_json(myGlobal.hostphp+'/getmatch/daySelected').subscribe(
	          data => this.listTab = data
	      )
	 }
  	ngOnInit() {
 		this.fetchDate()
  	}

}
