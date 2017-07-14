import Building from './building';


export class RareEarthsExcavator extends Building {

    constructor(){
        super();
        this.name = 'Rare earths excavator';
        this.level = 0;
        this.icon = 'assets/buildings/rareearthsproductor.png';
        this.buyingDescription = 'At level '+this.getNextLvl()+' the excavator will produce '+this.rareEarthsNextIncome()+' rare earths per hours.';
        this.mainDescription = 'Produce '+this.rareEarthsIncome()+' Rare earths per hours.';
        this.cost = {titanium:{a:700,b:-680},rareEarths:{a:0,b:0},helium:{a:0,b:0},energy:{a:5}};
        this.income = {titanium:0,rareEarths:50/60,helium:0,energy:0};

    }


}