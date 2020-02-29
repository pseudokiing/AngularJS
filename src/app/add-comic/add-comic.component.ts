import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Content } from '../content-card/content-helper';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit 
{
  @Input() startingId;
  @Output() newComicEvent = new EventEmitter<Content> ();
    newComicItem: Content;
    currentId: number;
    err = "User must try to create the content again wuth a description";
    addComicBinding: any;



  constructor() { }

  ngOnInit() {
    this.currentId = this.startingId;
  }

  
  
  addComic(alias: string, name: string, body: string, genre: string, imgUrl: string) 
  {
    let addNewComic = new Promise((success, fail) =>
    {
      try
      {
      this.newComicItem = 
      {
        id: 5,
        alias,
        name,
        body,
        genre,
        imgUrl,
        tags: [] 
      }
      let title = this.newComicItem.alias;
      this.currentId++;
      this.newComicEvent.emit(this.newComicItem);
      this.addComicBinding = ` `;
      if (this.newComicItem.body != "")
      {
        success(`The ${title} comic was added succesfully `);
      }
      else
      {
      throw "omg something went wrong";
      }
    }
    catch(err)
    {
      fail(err);
    }
  });

    addNewComic.then(r => 
      {
        console.log(addNewComic);
      }).catch(r => {
        
        console.log(r)
      })
    return 
    
  }

}

