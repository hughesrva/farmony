import { Component, OnInit } from '@angular/core';
const express = require('express');
const router = express.Router();

@Component({
  selector: 'app-service-login-form',
  templateUrl: './service-login-form.component.html',
  styleUrls: ['./service-login-form.component.css'],
})
export class ServiceLoginFormComponent implements OnInit {
  unValue: string;
  pwValue: string;
  result: string;

  constructor() {}

  onSubmitClick = (un, pw) => {
    this.result = 'Username: ' + un + '. Password: ' + pw + '.';
    router.get('/spotify/auth').then((res) => {
      console.log(res);
    });
  };

  ngOnInit(): void {}
}
