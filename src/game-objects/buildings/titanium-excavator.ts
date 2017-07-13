import Building from './building';


export class TitatiumExcavator extends Building {

    constructor(){
        super();
        this.name = 'Titanium excavator';
        this.level = 0;
        this.icon = 'assets/building/titaniumproductor.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Titanium per hours.';
    }


}