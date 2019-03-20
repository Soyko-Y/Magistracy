import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsService) {
  }

  ngOnInit() {
    // load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }


  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
