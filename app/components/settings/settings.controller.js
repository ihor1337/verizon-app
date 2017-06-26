/**
 * Created by Ihor on 6/25/2017.
 */

export default class SettingsController{
  constructor ($window){
    "ngInject";
    this._$window = $window;
  }

  /*this.data is the data that was returned from the settings service and was passed to the component through attribute.
  this.user is model that used to display data in the view.
  if user update the fields, it will override the existing values. We could use ng-change directive or $watch in order
  to react to changes and save them on the server. The better approach would be to add a button 'save' to the view and
  save updated data on click on that button rather than on every keystroke (ng-change) or in $watch*/

  $onInit(){
    this.user ={
      fName: this.data['user-info'].name.fname,
      lName : this.data['user-info'].name.lname,
      email: this.data['user-info'].email,
      dob: this.data['user-info'].dob,
      anniversary: this.data['user-info'].anniversary
    }
    this.test = this.data['user-info'].name.fname;
  }

  //The close button method.
  // Could be also a redirect to main page instead of going back.
  goBack(){
    this._$window.history.back();
  }
}