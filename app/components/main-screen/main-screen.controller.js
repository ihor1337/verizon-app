/**
 * Created by Ihor on 6/24/2017.
 */

export default class MainScreenController{
  constructor(){

  }

  handleToggle(){
    this.toggle({
      $event: {
        isOpened: this.opened = !this.opened
      }
    })
  }
}