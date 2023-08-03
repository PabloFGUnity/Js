function message(friend, text) {
  this.friend = friend;
  this.text = text;
}

function facebookprofile(name) {
  this.name = name;

  this.friends = [];

  this.messages = [];

  this.postMessage = function (friend, text) {
    if (this.isFriend(friend)) {
      this.messages.push(new message(friend, text));
    } else {
      throw new Error("No puedes enviar mensajes a alguien que no es tu amigo");
    }
  };

  this.deleteMessageByIndex = function (amigo, index) {};

  this.deleteMessageByName = function (amigo, text) {};

  this.deleteMessagesByFriend = function (friend, old) {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      if (this.messages[i].friend === friend) this.messages.splice(i, 1);
    }
    if (old !== this) {
      friend.deleteMessagesByFriend(this, friend);
    }
  };

  this.addFriend = function (friend) {
    if (!this.isFriend(friend)) {
      this.friends.push(friend);
      friend.addFriend(this);
    }
  };
  this.deleteFriend = function (friend) {
    const index = this.friends.findIndex((item) => item === friend);
    if (index !== -1) {
      this.deleteMessagesByFriend(friend);
      this.friends.splice(index, 1);
      friend.deleteFriend(this);
    }
  };
  this.isFriend = function (friend) {
    return this.friends.findIndex((item) => item === friend) >= 0;
  };
}

const augusto = new facebookprofile("augusto");
const fio = new facebookprofile("fio");
const pablo = new facebookprofile("pablo");
augusto.addFriend(fio);
augusto.postMessage(fio, "Hola");
fio.postMessage(augusto, "Muy bien, gracias");
augusto.postMessage(fio, "Que bueno");
augusto.addFriend(pablo);
augusto.postMessage(pablo, "Hola, caracola!!");
fio.postMessage(augusto, "Si, la verdad que si");
augusto.postMessage(fio, "Bueno, me voy a dormir");
fio.postMessage(augusto, "Buenas noches");
augusto.deleteFriend(fio);
// augusto.deleteMessagesByFriend(fio);
// augusto.deleteFriend(fio);
// augusto.addFriend(fio);
// augusto.postMessage(fio, "hola");
// fio.postMessage(augusto, "hola hola");
// augusto.deleteMessageByIndex(fio, 0);

console.log(augusto);
console.log(fio);
