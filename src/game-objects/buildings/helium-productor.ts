import Building from './building';


export class heliumExcavator extends Building {

    constructor(){
        super();
        this.name = 'Helium productor';
        this.level = 0;
        this.icon = 'assets/building/heliumproductor.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Helium per hours.';
    }


}