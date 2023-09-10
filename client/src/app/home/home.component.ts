import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  async clearLocalStorage (){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
