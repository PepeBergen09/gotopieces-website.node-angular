import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-fjordar-info',
  templateUrl: './fjordar-info.component.html',
  styleUrls: ['./fjordar-info.component.css']
})
export class FjordarInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function ($) {
      $(document).ready(function(){
        $(".fancybox").fancybox({
              openEffect: "none",
              closeEffect: "none"
          });

          $(".zoom").hover(function(){

          $(this).addClass('transition');
        }, function(){

          $(this).removeClass('transition');
        });
      });
    })(jQuery);
  }

}
