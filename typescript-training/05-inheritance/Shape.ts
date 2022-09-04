export class Shape {

    constructor(private _x: number, private _y: number) {

    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    // Method is public by default
    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }
}