import { Component, HostListener ,Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  // Variables to keep track of scroll position and sidebar state
  isScrolled = false;
  isOpen = false;

  // Event listener for scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Set isScrolled to true if the page is scrolled more than 0px
    this.isScrolled = window.pageYOffset > 0;
  }

  // Function to toggle the state of the sidebar
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  //shoping cart
  
slide(){
  const slideStatus=document.getElementById('slide');
  console.log();
  
  slideStatus?.classList.replace('slideout','slidein');
  
}
close(){
  const slideStatus=document.getElementById('slide');
  slideStatus?.classList.replace('slidein','slideout');
}


}
