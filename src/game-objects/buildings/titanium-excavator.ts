import Building from './building';


export class titatiumExcavator extends Building {

    constructor(){
        super();
        this.name = 'Titanium excavator';
        this.level = 0;
        this.icon = 'assets/building/titaniumexcavator.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Titanium per hours';
    }


}