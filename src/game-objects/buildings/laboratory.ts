import Building from './building';


export class Laboratory extends Building {

    constructor(){
        super();
        this.name = 'Laboratory';
        this.level = 0;
        this.icon = 'assets/building/laboratory.png';
       // this.buyingDescription = '...';
        this.mainDescription = 'Unlock the researchs.';
    }


}