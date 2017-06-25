/**
 * Created by Ihor on 6/24/2017.
 */
import controller from "./main-screen.controller"
import template from "./main-screen.html"
import "./main-screen.scss"

export const MainScreenComponent = {
  bindings:{
    opened: '<',
    toggle: '&'
  },
  template,
  controller
}