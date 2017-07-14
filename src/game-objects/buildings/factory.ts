import Building from './building';


export class Factory extends Building {

    constructor(){
        super();
        this.name = 'Factory';
        this.level = 0;
        this.icon = 'assets/buildings/factory.png';
        this.buyingDescription = 'Unlock factory, blueprints and reduce the craft time of '+this.craftReductionTime()+2.5+'%.';
        this.mainDescription = 'Unlock the factory and blueprints.';
        this.cost = {titanium:{a:450,b:-400},rareEarths:{a:250,b:200},helium:{a:100,b:90},energy:{a:2.5}};
    }
    public craftReductionTime()
    {
         return this.level*2.5; // return a %
    }



}