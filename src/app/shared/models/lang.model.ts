export class LangModel {
  public static instances: Array<LangModel>;
  public name: string;
  public code: string;
  private constructor() {}

  public static create(props: { name: string; code: string }): LangModel {
    const model = new LangModel();
    model.name = props.name;
    model.code = props.code;
    return model;
  }

  public static createList(): Array<LangModel> {
    if (this.instances) return this.instances;
    const langs = ['Id', 'En'];
    this.instances = langs.map((lang) =>
      this.create({ name: lang, code: lang.toLowerCase() })
    );
    return this.instances;
  }
}
