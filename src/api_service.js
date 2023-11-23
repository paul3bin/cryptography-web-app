export class API {
  static HOSTNAME = process.env.HOSTNAME;

  static ROT13API(body) {
    return fetch(`${API.HOSTNAME}/rot13`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static caesarAPI(body) {
    return fetch(`${API.HOSTNAME}/caesar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static morseCodeAPI(body) {
    return fetch(`${API.HOSTNAME}/morsecode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static vignereCipherAPI(body) {
    return fetch(`${API.HOSTNAME}/vignere`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static runningKeyCipherAPI(body) {
    return fetch(`${API.HOSTNAME}/runningkeycipher`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
