
abstract class Building {

    protected name: String;
    protected icon: any;
    protected buyingDescription: String;
    protected mainDescription: String;
    protected level: number;

    //
    protected buildingTime: Object;
    protected buildingStarted: Date;

    // Buy
    protected cost: {titanium:{a:number,b:number},rareEarths:{a:number,b:number},helium:{a:number,b:number},energy:{a:number}};

 public getLvl(): number {
        return this.level;
    }
 public getNextLvl(): number {
        return this.level+1;
    }
public getCost(): Object{
        return this.cost;
}
public canBeBuilt(): boolean{
    if (this.getLvl = 10){
        return false
    }else{
        return true
    }

}
}