import Building from './building';


export class heliumProductor extends Building {

    constructor(){
        super();
        this.name = 'Helium productor';
        this.level = 1;
        this.icon = 'assets/buildings/heliumproductor.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Helium per hours.';
        this.cost = {titanium:{a:1000,b:-980},rareEarths:{a:200,b:-190},helium:{a:0,b:0},energy:{a:5}};
        this.income = {titanium:0,rareEarths:0,helium:25/60,energy:0};


    }


}