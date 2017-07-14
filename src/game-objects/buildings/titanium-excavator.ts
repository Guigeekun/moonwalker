import Building from './building';


export class TitaniumExcavator extends Building {

    constructor(){
        super();
        this.name = 'Titanium excavator';
        this.level = 0;
        this.icon = 'assets/buildings/titaniumproductor.png';
        this.buyingDescription = 'At level '+this.getNextLvl()+' the excavator will produce '+this.titaniumNextIncome()+' rare earths per hours.';
        this.mainDescription = 'Produce '+this.titaniumIncome()+' Titanium per hours.';
        this.cost = {titanium:{a:500,b:-480},rareEarths:{a:0,b:0},helium:{a:0,b:0},energy:{a:5}};
        this.income = {titanium:100/60,rareEarths:0,helium:0,energy:0};

    }


}