import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Books from "./components/Books.jsx";

function App() {
  const [books, setBooks] = useState([
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      },
      {
          name: 'ким чен пын',
          description: 'description',
          img: 'src/assets/book.jpg',
      }
  ])

  return (
    <>
        <div className="container">
            <Header/>
            <Books books={books}/>
            <Footer/>
        </div>
    </>
  )
}

export default App
