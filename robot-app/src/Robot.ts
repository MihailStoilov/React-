class Robot {
  private _name: string;
  private _type: string;
  private _color: string;
  private _jump: boolean;
  private _blink: boolean;
  private _talk: boolean;

  constructor(
    name: string,
    type: string,
    color: string,
    jump: boolean,
    blink: boolean,
    talk: boolean
  ) {
    this._name = name;
    this._type = type;
    this._color = color;
    this._jump = jump;
    this._blink = blink;
    this._talk = talk;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get color(): string {
    return this._color;
  }

  get jump(): boolean {
    return this._jump;
  }

  get blink(): boolean {
    return this._blink;
  }

  get talk(): boolean {
    return this._talk;
  }
}

export default Robot;
