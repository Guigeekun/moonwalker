import Building from './building';


export class Factory extends Building {

    constructor(){
        super();
        this.name = 'Factory';
        this.level = 0;
        this.icon = 'assets/building/factory.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Unlock the factory and blueprints.';
        this.cost = {titanium:{a:450,b:-400},rareEarths:{a:250,b:200},helium:{a:100,b:90},energy:{a:2.5}};
    }


}