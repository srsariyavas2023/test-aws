import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model = {
    username: '',
    password: ''
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('username')) {
      this.router.navigate(['/home']);
    }
  }

  async login(): Promise<any> {
    if (this.model.username == '' || this.model.password == '') {
      return this.model.username = 'Plase Insert data'
    }
    let data = JSON.stringify(this.model);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://localhost:3000/user/login`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config).then((res) => {
      this.router.navigate(['/home']);
      localStorage.setItem('username', res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
}
