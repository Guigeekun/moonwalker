import Building from './building';


export class Factory extends Building {

    constructor(){
        super();
        this.name = 'Factory';
        this.level = 0;
        this.icon = 'assets/building/factory.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Unlock the factory and blueprints.';
    }


}