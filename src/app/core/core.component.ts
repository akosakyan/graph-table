import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  template: `
    <mat-toolbar color="accent" class="app-toolbar">
      <h2>Graph Table</h2>
    </mat-toolbar>
    
    <section class="app-content">
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [`
    .app-toolbar {
      padding: 12px;
      margin-bottom: 20px;
    }
    
    .app-content {
      padding: 20px 40px 20px;
    }
  `]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
