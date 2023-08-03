import './App.css';
import Subtitle from './components/Subtitle';
import User from './components/User';
import Title from './components/title';
import Perros from './components/Perros';
// import Dog from './components/list/Dog';
// <Dog dog={dog}/>
import Card from './components/card';
import Navbar from './components/Navbar';


const user= {
  name:"Pablo",
  surname:"Fernandez",
  age:20
}

const perro=["Teddy","Wall","Nala"]
// const dog=[
//   {name:"Teddy", age: 5},
//   {name:"Wall", age: 3},
//   {name:"Nala", age: 8},
// ]

const dog={
  image:"https://misanimales.com/wp-content/uploads/2022/01/pitbull-blue-tumbado-470x313.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe",
  title:"Pitbull",
  description:"Perro mu bonito",
  linkTo:"google.es",
  buttonText:"Ir a google"
}

const man={
  image:"https://previews.123rf.com/images/vadimgozhda/vadimgozhda1610/vadimgozhda161000818/64503126-apuesto-maduro-se%C3%B1or-con-barba-en-traje-formal-y-corbata-de-lazo-es-la-celebraci%C3%B3n-de-un-vaso-de.jpg",
  title:"Hombre ",
  description:"Hombre en traje",
  linkTo:"google.es",
  buttonText:"Ver perfil"
}

const link=[
  {
    name:"Youtube",
    link:"https://www.youtube.com/"
  },
  {
    name:"Instagram",
    link:"https://www.instagram.com/"
  },
  {
    name:"Facebook",
    link:"https://www.faecbook.com/"
  },
  {
    name:"Tik Tok",
    link:"https://www.tiktok.com/"
  },
    
  
];


function App() {
  return (
    <>
      <Title title="Mi proyecto"/>
      <Subtitle subtitle="Hola Bienvenidos" />
      <Navbar element={link} end />
      <Navbar element={link}  />
      <User user={user}/>
      <Perros perros={perro}/>
      <div className='d-flex'>
      <Card element={dog}/>
      <Card element={man}/>
      </div>
      {/*Llega la parte azul clarita a la función*/}
    </>
  )
}

export default App
