import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FormService, HistoryService } from '@app/core';
import { User } from '@app/shared/models/user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  form: any;
  user: User = {id: 0, login: 'Не найден', email: null, avatar_url: null};
  errorMessage: string;

  // call user by angular reactive form input data
  // if success, create User class
  // Push User class to data component
  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef,
              private formService: FormService,
              private historyService: HistoryService) {
	  this.form = this.fb.group({
      name: [undefined, []],
    });
    this.form.valueChanges.pipe(debounceTime(1000))
    .subscribe(() => {
        this.getUserData();
      });
	}

  //Use debounce for api request optimisation
  private getUserData() {
    this.formService.getUser(this.form.value.name).subscribe(data => {
      let user = new User(data.id, data.login, data.email, data.avatar_url);
      this.user = user;
      this.putLog(this.user);
      this.cdr.detectChanges();
    },
    error => {
      this.errorMessage = 'Not found';
      this.user = {id: 0, login: 'Не найден', email: null, avatar_url: null};
      console.log(this.errorMessage);
    })
  }

  private putLog(user: any) {
    this.historyService.logUser('userlog', user);
  }

  ngOnInit() {
  }


}
