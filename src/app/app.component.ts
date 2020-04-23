import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

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
}
