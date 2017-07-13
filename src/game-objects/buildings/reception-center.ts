import Building from './building';


export class ReceptionCenter extends Building {

    constructor(){
        super();
        this.name = 'Reception center';
        this.level = 0;
        this.icon = 'assets/buildings/receptioncenter.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Allows you to trade items.';
        this.cost = {titanium:{a:300,b:0},rareEarths:{a:100,b:0},helium:{a:20,b:0},energy:{a:0}};

    }


}