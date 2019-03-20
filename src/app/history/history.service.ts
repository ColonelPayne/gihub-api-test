import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()

export class HistoryService {

  protected subjects: {[key: string]: BehaviorSubject<any>} = {};
  private logs: any = [];

  // put user data to log
  logUser(key: string, user: any): void {
    if (window.localStorage.getItem(key)) {
      this.logs = JSON.parse(window.localStorage.getItem(key));
    }
    this.logs.push(user);
    window.localStorage.setItem(key, JSON.stringify(this.logs));
    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(this.logs);
    }
  }

  // get log search user
  getLog(key: string, defaultValue: any = null): Observable<any> {

   if (this.subjects.hasOwnProperty(key)) {
     return this.subjects[key];
   }

   if (!window.localStorage.getItem(key)) {
     window.localStorage.setItem(key, JSON.stringify(this.logs));
   }

   const value = window.localStorage.getItem(key)
     ? JSON.parse(window.localStorage.getItem(key))
     : defaultValue;

   return this.subjects[key] = new BehaviorSubject(value);
 }

  remove(key: string): void {

    window.localStorage.removeItem(key);
    this.logs = [];
    
    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(null);
    }
  }

}
