import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  model = {
    username: '',
    password: ''
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  async register(): Promise<any> {
    if (this.model.username == '' || this.model.password == '') {
      return this.model.username = 'Plase Insert data'
    }
    let data = JSON.stringify(this.model);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://localhost:3000/user/register`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config).then((res) => {
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.log(err);
    })
  }

}
