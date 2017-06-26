/**
 * Created by Ihor on 6/25/2017.
 */

export default class SettingsController{
  constructor ($window){
    "ngInject";
    this._$window = $window;
  }

  //The close button method.
  // Could be also a redirect to main page instead of going back.
  goBack(){
    this._$window.history.back();
  }
}