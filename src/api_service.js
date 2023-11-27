export class API {
  static BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;

  static ROT13API(body) {
    return fetch(`${API.BACKEND_HOST}/rot13`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static caesarAPI(body) {
    return fetch(`${API.BACKEND_HOST}/caesar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static morseCodeAPI(body) {
    return fetch(`${API.BACKEND_HOST}/morsecode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static vignereCipherAPI(body) {
    return fetch(`${API.BACKEND_HOST}/vignere`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static runningKeyCipherAPI(body) {
    return fetch(`${API.BACKEND_HOST}/runningkeycipher`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
