import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _login:LoginService) { }

  ngOnInit(): void {
    this._login.logout();
    this._login.loginStatusSubject.next(false);
    document.body.className = "backg";
  }

ngOnDestroy(){
    document.body.className="";
  }

}
