/**
 * Created by Ihor on 6/24/2017.
 */

export default class SidebarController {
  constructor ($location) {
    "ngInject";   //this is needed for webpack's ng-annotate loader, it will do the dependency injection for us.
    this._$location = $location;
  }

  /*this.toggle() and this.opened are passed as attributes from parent app component
  * this.opened used in the template ($ctrl.opened) to toggle the css class .opened*/
  hideSidebar(){
    this.toggle({$event:{isOpened:false}})
  }

  navigateToScreen(screen){
    this._$location.url(screen)
    this.hideSidebar();
  }
}
