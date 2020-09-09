import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Profile } from '../profile';
import { Repos } from '../repos';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  profile: Profile[];
  repos: Repos[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  searchProfile(username) {
    this.githubService.updateProfile(username);

    this.githubService.getProfile().subscribe(profile => { this.profile = profile; });

    this.githubService.getPublicRepos().subscribe(repos => { this.repos = repos; });
  }
}
