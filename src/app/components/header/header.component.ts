import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription  } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string = 'To Do List.';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor( private uiService:UiService, private router:Router){
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value);
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string):boolean {
    return this.router.url === route;
  }

}
