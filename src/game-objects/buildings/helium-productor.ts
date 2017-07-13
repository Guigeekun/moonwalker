import Building from './building';


export class heliumExcavator extends Building {

    constructor(){
        super();
        this.name = 'Helium productor';
        this.level = 0;
        this.icon = 'assets/building/heliumproductor.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Helium per hours.';
        this.cost = {titanium:{a:1000,b:-980},rareEarths:{a:200,b:-190},helium:{a:0,b:0},energy:{a:5}};

    }


}