import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Banner } from "../banner";
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['../banners.component.css']
})
export class BannerFormComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({
    url:'http://localhost/~eugeneart/api/public/api/files'
  });
  form: FormGroup;
  title: string;
  banner: Banner = new Banner;
  currentId: number;


  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private bannerService: BannerService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {
    let id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      this.title = this.currentId? 'Edit banner': 'New Banner';

      if(!this.currentId) {
        return;
      }

      this.bannerService.getBanner(this.currentId).subscribe( banner => this.banner = banner,
          response => {
            if(response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });

    if(this.currentId) {
      this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
        form.append('image',this.banner.image_url);
      };
    }

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.banner.image_url = response;
    };
  }

  save() {
    let result, bannerValue = this.form.value;

    bannerValue.id = this.currentId;
    bannerValue.image_url = this.banner.image_url;

    if(bannerValue.id) {
      result = this.bannerService.updateBanner(bannerValue);
    } else {
      result = this.bannerService.addBanner(bannerValue);
    }

    result.subscribe(data => this.router.navigate(['admin/banners']));
  }

}
