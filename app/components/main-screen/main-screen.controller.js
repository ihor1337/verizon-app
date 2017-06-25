/**
 * Created by Ihor on 6/24/2017.
 */

export default class MainScreenController{
  constructor(){}

  /* $onInit (){
   onInit in one of the Angular Component's lifecycle methods.
   It gets called after the component was added to the dom and all bindings are resolved.
   At this stage bindings that were passed through attributes are available.
   In this case the bindings are:
   this.toggle()  - method for toggling the sidebar
   this.opened    - state of the sidebar (opened or not, true/false)
   }*/

  handleToggle(){
    this.toggle({
      $event: {
        isOpened: this.opened = !this.opened
      }
    })
  }
}