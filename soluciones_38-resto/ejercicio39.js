const facebookProfile = {
  name: [],
  friends: 0,
  messages: [],
  postMessage: function (message) {
    this.messages.push(message);
  },
  deleteMessage: function (index) {
    if (index >= 0 && index < this.messages.length) {
      this.messages.splice(index, 1);
    }
  },
  addFriend: function () {
    this.friends++;
  },
  removeFriend: function () {
    if (this.friends > 0) {
      this.friends--;
    }
  },
};

facebookProfile.name = "Carlos";
facebookProfile.addFriend();
facebookProfile.postMessage("¡Hola!, ¿qué pasa pissschaaaa?");
facebookProfile.postMessage("¡Menudo partidazo ayer!");
facebookProfile.postMessage(
  "¡Sí!, el Cádiz apretó fuerte pero no pudo empatar."
);
facebookProfile.postMessage("¡Hala Madrid!");
console.log(facebookProfile);
facebookProfile.removeFriend();
facebookProfile.deleteMessage(0);
console.log(facebookProfile);
