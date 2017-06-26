/**
 * Created by Ihor on 6/26/2017.
 */

export default class SettingsService{
  constructor($http){
    this._$http = $http;
  }

  getSettings(){
    return this._$http.get('data.json')
      .then(res => res.data)
  }
}