import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  comicBookList: Content[];
  comicFilter: string;

  constructor() { 
    this.comicBookList = [];
    this.comicBookList[0] = {
      id: 0,
      alias:`Iron Man`,
      name: `Tony Stark`,
      body: `Genius, playboy, philanthropist, playboy`,
      genre: `Tech`,
      imgUrl: `https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/758887/758887._SX1280_QL80_TTD_.jpg`,
      tags: ['Marvel Comics']
    }; 
    this.comicBookList[1] = {
      id: 1,
      alias: `Black Panther`,
      name: `T'Challa`,
      body: `Genius, playboy, philanthropist, playboy. King and protecter of Wakanada - the most andvanced and wealthiest country in the Marvel universe. Wealthiest and eight smarted person on earth 616.`,
      genre: `Tech`,
      imgUrl: `https://i.annihil.us/u/prod/marvel/i/mg/4/50/59934cc186f38/clean.jpg`,
      tags: [`Marvel Comics`]
    };
    this.comicBookList[2] = {
      id: 2,
      alias: `Batman`,
      name: `Bruce Wayne`,
      body: `Genius, playboy, philanthropist, playboy. C.E.O of Wayne Enterprises, the world's greated detective. One of the waelthiest and smartest person's in the DC universe`,
      genre: `Detective`,
      imgUrl: `https://upload.wikimedia.org/wikipedia/en/7/77/Dark_knight_returns.jpg`,
      tags: [`Detective Comics`] 
    };
    this.comicBookList[3] = {
      id: 3,
      alias: `Hellspawn`,
      name: `Al Simmons`,
      body: `The Hellspawn is controlled by Malebolgia, the ruler of the eight realm of hell, and are mainly used as an officer corps for hells army. TYhe were created by Malebolgia and Mammon. Hellspawns are infused with dark energy matter, called Necroplasm, when they are  created. This power is infinite while in hell and finite when outside.`,
      genre: `Horror`,
      imgUrl: `http://pnjcomics.com/wp-content/uploads/2018/05/spawn230.jpg`,
      tags: [`Image Comics`] 
    };
    this.comicBookList[4] = {
      id: 4,
      alias: `Hellboy`,
      name: `Anung Un Rama`,
      body: `A well meaning half-demon, hellboy was summoned from Hell to Earth as a baby by Nazi occultists.`,
      genre: `Horror`,
      imgUrl: `https://paneldiscussions.files.wordpress.com/2011/08/hellboy-in-the-chapel-of-moloch-cover.jpg`,
      tags: [`Dark Horse Comics`] 
    };
    this.comicBookList[5] = {
      id: 5,
      alias: `Nightwing`,
      name: `Dick Grayson`,
      body: `Dick Grayson became Nightwing after he was dismissed from the role of Robin as a teenager. Grayson's Flamebird was Bette Kane. He was featured in a Nightwing series from 1995 to 2009; after Wayne's apparent death, Grayson became the new Batman, subsequently retiring his Nightwing mantle temporarily.`,
      genre: `Detective`,
      imgUrl: `https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/253447/352866/jan180328__82839.1520885292.jpg?c=2&imbypass=on`,
      tags: [`Detective Comics`] 
    };
  }

  ngOnInit() {
  }
  findComic (name: string): void {
    this.comicFilter = this.comicBookList.filter(c => c.alias === name).length != 0 ? `Here's your hero` : `Your hero has died` ;
  }
}
