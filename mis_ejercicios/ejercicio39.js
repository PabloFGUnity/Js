/*Crea un objeto llamado **facebookProfile**. El objeto debe tener 3 propiedades:

- Tu nombre (**name**)
- El número de amigos que tienes (**friends**)
- Un array de mensajes que hayas enviado (**messages**)

  El objeto debe tener 4 métodos:

- postMessage(message) - Añade un nuevo mensaje al array de mensajes.
- deleteMessage(index) - Elimina un mensaje del array de mensajes según el índice dado.
- addFriend() - Incrementa en 1 el número de amigos.
- removeFriend() - Decrementa en 1 el número de amigos.*/
function Perfil(name)
{
    this.name = name;
    this.friends = 0;
    this.messages = [];
    this.postMessage = function(message){
        this.messages.push(message)
        console.log(message); 
    };

    this.deleteMessage = function(index){
        if (index > 0 && index < this.messages.length)
        {
            this.messages.splice(index,1);
        }
            else
            {
                throw new Error("índice incorrecto");
            }

    };

    this.addFriend = function()
    {
         this.friends++;
    };

    this.removeFriend = function()
    {
        if (this.friends > 0)
        {
            this.friends--;
        }
            else
            {
                throw new Error("no hay amigos")
            }
    };
    
}

const Pablo = new Perfil("Pablo")

console.log(Pablo);

Pablo.postMessage("Hola ke ase");
Pablo.postMessage("Buenos dias");
Pablo.postMessage("Adios");
console.assert(Pablo.messages.length === 3, "No añade bien los mensajes");

Pablo.addFriend()
Pablo.addFriend()
Pablo.addFriend()
Pablo.removeFriend()
console.log(Pablo);

Pablo.deleteMessage(1)
console.log(Pablo);