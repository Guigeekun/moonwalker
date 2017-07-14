import Building from './building';


export class PowerPlant extends Building {

    constructor(){
        super();
        this.name = 'PowerPlant';
        this.level = 0;
        this.icon = 'assets/buildings/powerplant.png';
        this.buyingDescription = 'The powerplant will produce 15 more energy.'
        this.mainDescription = 'Produce x Energy.';
        this.cost = {titanium:{a:650,b:-610},rareEarths:{a:150,b:130},helium:{a:0,b:0},energy:{a:0}};
        this.income = {titanium:0,rareEarths:0,helium:0,energy:15};


    }


}