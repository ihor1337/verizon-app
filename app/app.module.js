/**
 * Created by Ihor on 6/23/2017.
 */
import angular from 'angular'

import AppComponent from './app.component'
import {MainScreenComponent} from './components/main-screen/main-screen.component'
import {SidebarComponent} from './components/sidebar/sidebar.component'

const app = angular
  .module('app', [])
  .component('app', AppComponent)
  .component('mainScreen', MainScreenComponent)
  .component('sidebar', SidebarComponent)
  .name

export default app;
