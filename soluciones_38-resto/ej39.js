function facebookprofile(name) {
  this.name = name;
  this.friends = 0;
  this.messages = [];
  this.postMessage = function (message) {
    this.messages.push(message);
    console.log(message);
  };
  this.deleteMessage = function (index) {
    if (index >= 0 && index < this.messages.length) {
      this.messages.splice(index, 1);
    } else {
      throw new Error("index incorrecto");
    }
  };
  this.addFriends = function () {
    this.friends++;
  };
  this.removeFriends = function () {
    if (this.friends > 0) {
      this.friends--;
    } else {
      throw new Error("no tienes. Animo");
    }
  };
}
const augusto = new facebookprofile("augusto");
console.log(augusto);
augusto.postMessage("hola");
augusto.postMessage("hola2");
augusto.postMessage("hola8");
console.assert(augusto.messages.length === 3, "No añade bien los mensajes");
augusto.deleteMessage(1);
console.log(augusto.messages);
console.assert(augusto.messages.length === 2, "No añade bien los mensajes");
