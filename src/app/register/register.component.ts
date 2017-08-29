import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Http,Response}  from '@angular/http'
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
	 constructor(private http: Http,private ref:ChangeDetectorRef) {}
	regisInfo = {email:'',pass:''}
	emailAlready = false
	onSubmit(data)
	{
		if((this.emailAlready == true) || (data.invalid == true))
		{
			console.log('ไม่ผ่าน')
		}
		else
		{
			var info = {email:this.regisInfo.email,pass:this.regisInfo.pass}
			var body = JSON.stringify(info)
			var url = 'http://localhost/betgame/register/check_reg'
			this.http.post(url,info).subscribe(data => {
				console.log(data)
			})
		}

	}
	check_email()
	{
		var info = {email:this.regisInfo.email}
		var body = JSON.stringify(info)
		var url = 'http://localhost/betgame/register/check_email'
		this.http.post(url,info).subscribe(data => {
			if(data['_body'] == 'no')
			{
				this.emailAlready = true
				this.ref.detectChanges()
			}
			else
			{
				this.emailAlready = false
				this.ref.detectChanges()
			}
		})
	}


}
