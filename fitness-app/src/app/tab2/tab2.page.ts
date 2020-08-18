import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment'
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
    @ViewChild('slides') slides: IonSlides;
    
    public slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    public range = []

    constructor() {}

    ngOnInit(): void {
        this.seed();
    }

    seed() {
        let start = moment();
        let end = moment();

        end.add('week', 1);

        while (start.diff(end, 'days') !== 0) {
            
            this.range.push(start.format('DD-MMM'))
            start.add(1, 'days');
        }
        console.log(this.range);
        
    }

    async c(ev) {
        console.log(await this.slides.getActiveIndex())
    }
}
