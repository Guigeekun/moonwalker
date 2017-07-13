import Building from './building';


export class PowerPlant extends Building {

    constructor(){
        super();
        this.name = 'PowerPlant';
        this.level = 0;
        this.icon = 'assets/building/powerplant.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Produce x Energy.';
    }


}