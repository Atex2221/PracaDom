import { useState } from 'react';
import Ogloszenie from  "./components/Ogloszenie";
import './App.css';




const ogloszenia = [
  {id: 1, nazwa: "laptop Dell", cena:3500, dostepny: true, kategoria: "komputer", opis: "Komputer idealny do biura"},
  {id: 2, nazwa: "Mysz bezprzewodowa", cena:150, dostepny: true, kategoria: "akcesoria", opis:"Tania i praktyczna mysz bezprzewodowa"},
  {id: 3, nazwa: "Monitor 27' cali", cena:1500, dostepny: true, kategoria: "monitory",opis:"Monitor idealny do pracy dla każdego"},
  {id: 4, nazwa: "podkladka pod mysz", cena:35, dostepny: false, kategoria: "akcesoria", opis:"Tania, ale cięzko się bez niej obejść"},
  {id:5,nazwa:"Słuchawki bezprzewodowe douszne",cena:300,dostepny:true,kategoria:"akcesoria",opis:"Dobre, wytrzymałe i idealne do słuchania muzyki"},
  {id:6,nazwa:"Słuchawki przewodowe nauszne",cena:100,dostepny:false,kategoria:"akcesoria",opis:"Idealne na początek przygody z słuchawkami"},
  {id:7,nazwa:"ładowarka typu usb C",cena:120,dostepny:true,kategoria:"ładowarki",opis:"Najlepsza na rynku ładowarka, idealna do twojego telefonu z wejściem C"},
  {id:8,nazwa:"ładowarka typu usb b",cena:30,dostepny:false,kategoria:"ładowarki",opis:"ładowarka do starszych telefonów z wejściem b"},
];


function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <h1>Portal ogloszeniowy</h1>
    <p>kupuj i sprzedawaj </p>
    <p>Liczba ogłoszeń:{ogloszenia.length}</p>
    <div className="lista-ogloszen">
      {ogloszenia.map((ogloszenie)=>(
        <Ogloszenie key={ogloszenie.id} ogloszenie={ogloszenie}/>
      ))}
    </div>
   </main>
  );
}

export default App
