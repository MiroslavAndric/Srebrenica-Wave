import {  Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  isMenuOpen:boolean = false;
  status: boolean = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  };
  clickEvent(): void{
    this.status = !this.status;       
}


  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
      let element = document.querySelector('.header') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      };
    };
  
    
}
