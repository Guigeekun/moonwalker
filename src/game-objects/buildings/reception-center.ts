import Building from './building';


export class ReceptionCenter extends Building {

    constructor(){
        super();
        this.name = 'Reception center';
        this.level = 0;
        this.icon = 'assets/building/receptioncenter.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Allows you to trade items.';
    }


}