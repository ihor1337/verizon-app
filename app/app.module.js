/**
 * Created by Ihor on 6/23/2017.
 */
import angular from 'angular'
import ngRoute from 'angular-route'

import AppComponent from './app.component'
import {MainScreenComponent} from './components/main-screen/main-screen.component'
import {SidebarComponent} from './components/sidebar/sidebar.component'
import {SettingsComponent} from './components/settings/settings.component'
import SettingsService from './components/settings/settings.service'

const app = angular
  .module('app', [ngRoute])
  .component('app', AppComponent)
  .component('mainScreen', MainScreenComponent)
  .component('sidebar', SidebarComponent)
  .component('settings', SettingsComponent)
  .service('SettingsService', SettingsService)
  .config(($routeProvider)=> {
    "ngInject";
    $routeProvider
      .when('/',{
        template: `<main-screen 
                        class="main-screen"
                        opened="$ctrl.isOpened" 
                        toggle="$ctrl.toggleSidebar($event)" 
                        ng-class="{'opened':$ctrl.isOpened}">
                    </main-screen>`
      })
      .when('/settings',{
        template: `<settings data="$resolve.settings"></settings>`,
        resolve:{
          settings: (SettingsService)=>{
            return SettingsService.getSettings()
          }
        }
      })
  })
  .name

export default app;
