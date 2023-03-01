export class ReligionModel {
  public static instances: Array<ReligionModel>;
  public id: number;
  public name: string;
  private constructor() {}

  public static create(props: { id: number; name: string }): ReligionModel {
    const model = new ReligionModel();
    model.id = props.id;
    model.name = props.name;
    return model;
  }

  public static createList(): Array<ReligionModel> {
    if (this.instances) return this.instances;
    const religions = [
      'app.form.options.religion.islam',
      'app.form.options.religion.christianity',
      'app.form.options.religion.catholic',
      'app.form.options.religion.hinduism',
      'app.form.options.religion.buddhism',
      'app.form.options.religion.others',
    ];
    this.instances = religions.map((religion, index) =>
      this.create({ id: index + 1, name: religion })
    );
    return this.instances;
  }
}
