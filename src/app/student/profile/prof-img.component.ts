import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ImageService } from "../image.service";

@Component({
  standalone: false,
  selector : 'prof-img',
  changeDetection: ChangeDetectionStrategy.Eager,
  template : `<img [src]="imgUrl">`
})

export class ProfImage{
  imgUrl :any;
  constructor(private service : ImageService){
    //this.http.get('')
  }

  ngOnInit():void{
    this.service.getProfile('ok').subscribe(
      (res:any)=>{
        const reader = new FileReader();
        reader.readAsDataURL(res);
        reader.onloadend = () =>{
          this.imgUrl = reader.result as string;
        }
      }
    )
    this.imgUrl = "https://ichef.bbci.co.uk/news/976/cpsprodpb/17DA4/production/_127400779_muskgetty.png";
  }

}
