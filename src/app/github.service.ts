import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  profile = new Profile();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  updateProfile(username: string) {
    this.profile.userName = username;
  }

  getProfile(): Observable<any> {
    const url = 'https://api.github.com/users/';
    const profileUrl = this.http.get(url + this.profile.userName + '?access_token=' + environment.apiKey);

    return profileUrl;
  }

  getPublicRepos(): Observable<any> {
    const url = 'https://api.github.com/users/';
    const reposUrl = this.http.get(url + this.profile.userName + '/repos?access_token=' + environment.apiKey);

    return reposUrl;
  }

}