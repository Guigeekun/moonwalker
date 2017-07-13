import Resource from './resource';


export class Energy extends Resource {

    constructor(){
        super();
        this.name = 'Energy';
        this.total = 20;
        this.icon = 'assets/gameicon/resource/energy.png';
    }


}