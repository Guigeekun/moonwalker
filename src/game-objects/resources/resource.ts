
abstract class Resource {

    protected name: String;
    protected total: number;
    protected max: number;
    protected min: number;
    protected icon: any;


    public getName(): String {
        return this.name;
    }

    public getMax(): number {
        return this.max;
    }

    public getMin(): number {
        return this.min;
    }

    public sub(number: number)
    {
        return this.total - number;
    }

    public add(number: number)
    {
        return this.total + number;
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