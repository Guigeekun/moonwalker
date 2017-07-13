import Building from './building';


export class RareEarthsExcavator extends Building {

    constructor(){
        super();
        this.name = 'Rare earths excavator';
        this.level = 0;
        this.icon = 'assets/building/rareearthsproductor.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Rare earths per hours.';
    }


}