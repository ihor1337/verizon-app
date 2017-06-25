/**
 * Created by Ihor on 6/24/2017.
 */

export default class AppController{
  constructor(){
    this.isOpened = false;
  }

  toggleSidebar($event){
    this.isOpened = $event.isOpened;
  }
}