import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  
    private targetPosition = 0;
    private currentPosition = 0;
  
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      if (window.scrollY > 0) {
        const targetElement = document.getElementById('section2');
        if (targetElement) {
          this.targetPosition = targetElement.offsetTop;
          this.scrollToTarget();
        }
      }
    }
  
    private scrollToTarget() {
      if (this.currentPosition < this.targetPosition) {
        this.currentPosition += 0.3; // Ajusta este valor para cambiar la velocidad
        window.scrollTo(0, this.currentPosition);
        window.requestAnimationFrame(() => this.scrollToTarget());
      }
    }
  

}
