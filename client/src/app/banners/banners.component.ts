import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';
import { Banner } from "./banner";

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  banners: Banner[] = [];

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.getBanners().subscribe(data => {
      this.banners = data;
    });
  }

  deleteBanner(banner) {
    if (confirm("Are you sure you want to delete " + banner.name + "?")) {
      let index = this.banners.indexOf(banner);
      this.banners.splice(index, 1);

      this.bannerService.deleteBanner(banner.id)
          .subscribe(null,
              err => {
                alert("Could not delete banner.");
                // Revert the view back to its original state
                this.banners.splice(index, 0, banner);
              });
    }
  }
}


