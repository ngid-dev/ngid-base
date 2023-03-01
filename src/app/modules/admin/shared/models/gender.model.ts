export class GenderModel {
  public static instances: Array<GenderModel>;
  public id: number;
  public name: string;
  private constructor() {}

  public static create(props: { id: number; name: string }): GenderModel {
    const model = new GenderModel();
    model.id = props.id;
    model.name = props.name;
    return model;
  }

  public static createList(): Array<GenderModel> {
    if (this.instances) return this.instances;
    const genders = ['Laki-laki', 'Perempuan'];
    this.instances = genders.map((gender, index) =>
      this.create({ id: index + 1, name: gender })
    );
    return this.instances;
  }
}
