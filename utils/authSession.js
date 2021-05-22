class Session {
  get() {
    let params = arguments[0];
    return JSON.parse(localStorage.getItem(params)) || {};
  }

  set() {
    let params = arguments[0];
    localStorage.setItem(params.key, JSON.stringify(params.fields));
  }

  push() {
    let params = arguments[0];
    let get = this.get(params.key);
    if (Object.values(get).length > 0) {
      let merge = [...get, ...params.fields];
      this.set({ key: params.key, fields: merge });
      return merge;
    } else {
      this.set(params);
    }
  }

  assin() {
    let params = arguments[0];
    let a = Object.assign(this.get(params.key), { ...params.fields });
    this.set({ key: params.key, fields: { ...a } });
  }

  die(key) {
    localStorage.removeItem(key);
  }
}

class AppComponents {
  Form(dataParam) {
    dataParam.preventDefault();
    let form = document.forms[dataParam.target.name];
    let params = {};
    [...form].map((f) => {
      if (f.name !== "") params[f.name] = f.value;
    });
    return params;
  }
}

const sess = new Session();
const app = new AppComponents();

export default {
  sess,
  app,
};
