/**
 * Created by Ihor on 6/24/2017.
 */
import controller from './sidebar.controller'
import template from './sidebar.html'
import './sidebar.scss'

export const SidebarComponent = {
  bindings: {
    opened: '<',
    toggle: '&'
  },
  template,
  controller
}