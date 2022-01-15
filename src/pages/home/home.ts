import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
// import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
declare var TikApi;
const CLIENT_KEY = 'awegopykzpwzs5rk' // this value can be found in app's developer portal
const CLIENT_SECRET = '3d308825d7f368ecb44feb0d72761d0f'
declare var app;
// var express = require('express');
// declare var app = express();
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
            constructor(public navCtrl: NavController,
            public fb: Facebook,
            // public http: HttpClient, 
            ) {
  }

  login() {
    TikApi.oauth({
      client_id: "3d308825d7f368ecb44feb0d72761d0f",
      scope: 'VIEW_PROFILE',
    });

    TikApi.onLogin((data) => {
      console.log(data);
    });
   
  }

  login2() {
    app.get('/oauth', (req, res) => {
      const csrfState = Math.random().toString(36).substring(7);
      res.cookie('csrfState', csrfState, { maxAge: 60000 });  
      let url = 'https://open-api.tiktok.com/platform/oauth/connect/';  
      url += '?client_key={CLIENT_KEY}';
      url += '&scope=user.info.basic,video.list';
      url += '&response_type=code';
      url += '&redirect_uri={SERVER_ENDPOINT_REDIRECT}';
      url += '&state=' + csrfState;  
      res.redirect(url);
    })
  }

  

}

