import Building from './building';


export class TitaniumExcavator extends Building {

    constructor(){
        super();
        this.name = 'Titanium excavator';
        this.level = 1;
        this.icon = 'assets/buildings/titaniumproductor.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Titanium per hours.';
        this.cost = {titanium:{a:500,b:-480},rareEarths:{a:0,b:0},helium:{a:0,b:0},energy:{a:5}}
    }


}