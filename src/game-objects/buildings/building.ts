
export default abstract class Building {

    protected name: String;
    protected icon: any;
    protected buyingDescription: String;
    protected mainDescription: String;
    protected level: number;
    protected id: number;

    //
    protected buildingTime: Object;
    protected buildingStarted: Date;

    // Buy
    protected cost: {titanium:{a:number,b:number},rareEarths:{a:number,b:number},helium:{a:number,b:number},energy:{a:number}};

    public getName(): String {
        return this.name;
    }

    public getId(): String {
        return this.name.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

    public getIcon(): string {
        return this.icon;
    }
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
        if (this.getLvl() == 10){
            return false
        }else{
            return true
        }

    }

    public titaniumCost(){
        return this.cost.titanium.a*this.getNextLvl()+this.cost.titanium.b;
    }
    public rareEarthsCost(){
        return this.cost.rareEarths.a*this.getNextLvl()+this.cost.rareEarths.b;
    }
    public heliumCost(){
        return this.cost.helium.a*this.getNextLvl()+this.cost.helium.b;
    }
    public energyCost(){
        return this.cost.energy.a*this.getNextLvl();
    }

}