import Building from './building';


export class Laboratory extends Building {

    constructor(){
        super();
        this.name = 'Laboratory';
        this.level = 0;
        this.icon = 'assets/building/laboratory.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Unlock the researchs.';
        this.cost = {titanium:{a:250,b:-200},rareEarths:{a:250,b:200},helium:{a:250,b:200},energy:{a:5}};

    }


}