import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as AOS from 'aos';
import { createElementCssSelector } from '@angular/compiler';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'szpargalyfinally';
  desktop = this.deviceService.isDesktop();
  mobile = this.deviceService.isMobile();
  tablet = this.deviceService.isTablet();
  constructor(
    private deviceService: DeviceDetectorService) {
      this.epicFunction();
  }
  epicFunction(){
    console.log(this.deviceService.isDesktop());
    console.log(this.deviceService.isMobile());
    console.log(this.deviceService.isTablet());
  }
  ngOnInit(){
    AOS.init();
  }

  
  mouseEnter(imageNumber){
    let allegroImg = document.querySelectorAll('img')[imageNumber];
    let allegroSmall = document.querySelectorAll('.blockAllegroSmall')[imageNumber];
    switch (imageNumber) {
      case 0:
        var elementP = document.createElement('p');
        elementP.textContent = 'Allegro Smart, dostępne w naszych ofertach, przy zakupach za co najmniej 40 zł gwarantuje darmową wysyłkę do Paczkomatów i punktów Żabka, Orlen i Poczta Polska. Wysyłka kurierska z pakietem Smart  jest darmowa przy zamówieniach powyżej 100 zł.';
        elementP.setAttribute('data-aos', 'fade-right');
        allegroSmall.replaceChild(elementP, allegroImg);
        break;
      case 1:
        var elementP = document.createElement('p');
        elementP.textContent = "Nasz sklep na Allegro posiada odznaczenie Super Sprzedawcy - wyróżnia nas 100% pozytywnych ocen i komentarzy, najwyższy poziom obsługi klienta oraz szybka i terminowa wysyłka (zdarza się, że paczka jest u Kupującego już następnego dnia!).";
        elementP.setAttribute('data-aos', 'fade-up');
        allegroSmall.replaceChild(elementP, allegroImg);
        break;
      case 2:
        var elementP = document.createElement('p');
        elementP.textContent = "Duża część naszych produktów dodatkowo posiada Monety, które można wymieniać na kupony i płacić nimi podczas kolejnych zakupów.";
        elementP.setAttribute('data-aos', 'fade-left');
        allegroSmall.replaceChild(elementP, allegroImg);
        break;
    }
 }
  mouseLeave(imageNumber){
    let allegroSmall = document.querySelectorAll('.blockAllegroSmall')[imageNumber];
    switch (imageNumber) {
      case 0:
        var elementP = allegroSmall.firstChild;
        var elementImg = document.createElement("img");
        elementImg.setAttribute('src', 'assets/allegro-smart.png');
        elementImg.style.margin = '5% 0';
        allegroSmall.replaceChild(elementImg, elementP);
        break;
      case 1:
        var elementP = allegroSmall.firstChild;
        var elementImg = document.createElement("img");
        elementImg.style.width = '20%';
        elementImg.setAttribute('src', 'assets/super-sprzedawca.png');
        allegroSmall.replaceChild(elementImg, elementP);
        break;
      case 2:
        var elementP = allegroSmall.firstChild;
        var elementImg = document.createElement("img");
        elementImg.style.width = '10%';
        elementImg.style.margin = '5% 0';
        elementImg.setAttribute('src', 'assets/cash.png');
        allegroSmall.replaceChild(elementImg, elementP);
        break;
    }
    
  }
}
