import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'fintech-angular';

  ngOnInit(): void {
    if (window.innerWidth > 768) {
      alert('Mobile Only! UI will be compromised becuase you are visitng it on larger screens');
    }
  }
}
