import Building from './building';


export class RareEarthsExcavator extends Building {

    constructor(){
        super();
        this.name = 'Rare earths excavator';
        this.level = 1;
        this.icon = 'assets/buildings/rareearthsproductor.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Rare earths per hours.';
        this.cost = {titanium:{a:700,b:-680},rareEarths:{a:0,b:0},helium:{a:0,b:0},energy:{a:5}};

    }


}