import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { User } from '@app/shared/models/user';
import { map } from 'rxjs/operators'

@Injectable()

export class FormService {

  private _url = 'https://api.github.com/users/';   //github api url
  constructor (
    private http: Http
  ) {}

  // get user by login
  getUser(username: string): Observable<User> {
    return this.http.get(this._url + username)
        .pipe(
          map((res: Response) => res.json())
        )
  }

}
