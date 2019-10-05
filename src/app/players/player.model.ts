export class Player {
  public id: string;
  public name: string;
  public price: number;
  public imagePath: string;
  public offer: Array<any>;
  public counter: number;
  public offerPrice: number;

  constructor(id: string, name: string, price: number, imagePath: string, offer: Array<any>, counter: number, offerPrice: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imagePath = imagePath;
      this.offer = offer;
      this.counter = counter;
      this.offerPrice = offerPrice;
  }
}
