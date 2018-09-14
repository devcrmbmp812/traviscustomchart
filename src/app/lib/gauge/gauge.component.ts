import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import * as c3 from 'c3';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css',
  '../../../../node_modules/c3/c3.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class GaugeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const gauge = c3.generate({
        bindto: '#gauge',
        data: {
          columns: [
            ['Germany', 50],
            ['United States', 80],
            ['France', 50],
            ['United Kingdom', 60],
            ['Italy', 70],
            ['Russia', 55],
          ],
          type: 'donut',
          onclick: function (d, i) {
            console.log('onclick', d, i);
          },
          onmouseover: function (d, i) {
            console.log('onmouseover', d, i);
          },
          onmouseout: function (d, i) {
            console.log('onmouseout', d, i);
          }
        },
        color: {
          pattern: ['#a8385d', '#7aa3e5','#a27ea8','#aae3f5','#adcded','#a95963']
        },
        donut: {
          title: ''
        },
        legend: {
           text: "legend",
           position: 'right',
        }
      });
    }, 1);
    
  }

}
