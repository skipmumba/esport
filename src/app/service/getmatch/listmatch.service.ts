import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ListmatchService {

  constructor(private http:Http) {}
  	get_json(url)
	{
	 	return this.http.get(url).map(
	 		(response:Response) => response.json()
	 		
	 	);	 	
	}

}
