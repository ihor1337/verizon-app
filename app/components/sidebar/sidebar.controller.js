/**
 * Created by Ihor on 6/24/2017.
 */

export default class SidebarController {
  constructor () {

  }

  $onInit (){
    console.log(this.opened)
    this.toggle()
    console.log(this.opened)
  }
}
