
export default abstract class Resource {

    protected name: String;
    protected total: number;
    protected max: number;
    protected min: number;
    protected icon: any;


    public getName(): String {
        return this.name;
    }

    public getIcon(): any {
        return this.icon;
    }

    public getTotal(): number {
        return this.total;
    }

    public getMax(): number {
        return this.max;
    }

    public getMin(): number {
        return this.min;
    }

    public sub(number: number)
    {
        let newTotal = this.total - number;
        this.total = newTotal;
        return this;
    }

    public add(number: number)
    {
        let newTotal = this.total + number;
        this.total = newTotal;
        return this;
    }

    public isMaxed(): boolean
    {
        return (this.total >= this.max);
    }

    public isMined(): boolean
    {
        return (this.total <= this.min);
    }




}