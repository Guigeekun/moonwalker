import Resource from './resource';


export class Energy extends Resource {

    constructor(){
        super();
        this.name = 'Energy';
        this.total = 0;
        this.icon = 'assets/gameicon/resource/energy.png';
    }


}