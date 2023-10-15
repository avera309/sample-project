import { Component, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


 sidemenu:boolean | undefined;
 slider(){
  this.sidemenu=true;
 }
 mobilemenu() {
  const mobilemenustushidden = document.querySelectorAll('.hiddenmobileMune');
  const mobilemenustusblock = document.querySelectorAll('.blockmobileMune');
  mobilemenustushidden.forEach(element => {
    if(element.classList.contains('block'))
    {element.classList.replace('block','hidden');}
    else {element.classList.replace('hidden','block');}
  });

  mobilemenustusblock.forEach(element => {
    if(element.classList.contains('block'))
    element.classList.replace('block','hidden')
    else element.classList.replace('hidden','block')
  });
 
}
profile(){
  const profile = document.getElementById('profile');
  
  if(profile?.classList.contains('block')){profile?.classList.replace('block','hidden');
profile?.classList.replace('is-open','is-closed');console.log(profile)}
   else {profile?.classList.replace('hidden','block');
   profile?.classList.replace('is-closed','is-open');console.log(profile)}
}

private toggleButton: any;
private sidebarVisible: boolean;

constructor(public location: Location, private element : ElementRef) {
    this.sidebarVisible = false;
}

ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
}
sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
};
sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
};
sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
};

isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if( titlee === '/documentation' ) {
        return true;
    }
    else {
        return false;
    }
}
}
