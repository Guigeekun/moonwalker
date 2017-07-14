import Building from './building';


export class Laboratory extends Building {

    constructor(){
        super();
        this.name = 'Laboratory';
        this.level = 0;
        this.icon = 'assets/buildings/laboratory.png';
        this.buyingDescription = 'Unlock the researchs and reduce the research time of '+this.researchReductionTime()+2.5+'%.';
        this.mainDescription = 'Unlock the researchs.';
        this.cost = {titanium:{a:250,b:-200},rareEarths:{a:250,b:200},helium:{a:250,b:200},energy:{a:5}};

    }
    public researchReductionTime()
    {
         return this.level*2.5; // return a %
    }


}