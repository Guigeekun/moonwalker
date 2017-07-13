import Building from './building';


export class Hangar extends Building {

    constructor(){
        super();
        this.name = 'Hangar';
        this.level = 0;
        this.icon = 'assets/buildings/hangar.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Unlock the Rover modification and enhance it.';
        this.cost = {titanium:{a:200,b:0},rareEarths:{a:100,b:0},helium:{a:40,b:0},energy:{a:2.5}};

    }


}