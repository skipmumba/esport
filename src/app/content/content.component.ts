import { Component, OnInit} from '@angular/core';
import { ListmatchService } from '../service/getmatch/listmatch.service';
import { KeypipePipe } from '../pipe/keypipe.pipe'
import * as myGlobal from  '../global';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[ListmatchService],
})
export class ContentComponent implements OnInit {

  	constructor(private getMatch:ListmatchService) {}
  	listMatch:any
    spinShow:boolean
    random = new Date().getTime()+new Date().getMilliseconds()
  	ngOnInit() 
  	{
  		this.fetchMatch(0,0,0)
  	}

    getTabChoose(event)
    {
        this.fetchMatch(event.day,event.month,event.year)
        console.log(event);
    }

  	fetchMatch(d,m,y)
  	{
      this.spinShow = true
  		this.getMatch.get_json(myGlobal.hostphp+'/getmatch/getlistMatch/'+d+'/'+m+'/'+y+'?nocache='+this.random).subscribe
      ( data => 
  		    {
          	this.listMatch = data
            this.spinShow = false
          }
      )
  	}
}
