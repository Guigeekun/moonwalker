import Building from './building';


export class Hangar extends Building {

    constructor(){
        super();
        this.name = 'Hangar';
        this.level = 0;
        this.icon = 'assets/building/hangar.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Unlock the Rover modification and enhance it.';
    }


}