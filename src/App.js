
import './App.css';
import First from './components/First';
import Second from './components/Second'
import Card from './components/Card';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Display from './components/Display';
import Increament from './components/Increament';
import Sixth from './components/Sixth';
import Time from './components/Time';
import Eight from './components/Eight';
import Nineth from './components/Nineth';
import Tenth from './components/Tenth';
import Box from './components/Box';
import Product from './components/Product';
// import Assignment from './components/Assignment';
import Eleventh from './components/Eleventh';
import Twelvth from './components/Twelvth';
import Thirteen from './components/Thirteen';


function App() {
  return (
    <div className="App">
      <h1>heloo world</h1>
      <Display></Display>
      <First></First>
      <Second></Second>
      <Card></Card>
      <Third 
      name= 'Olarewaju Damilare'
      title= 'Frontend Developer'
      bio= ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus beatae, expedita a praesentium repudiandae magni commodi iste nisi harum nemo asperiores ipsam! Deleniti fuga, nobis ex facere maxime nemo quis dicta accusantium sed adipisci possimus illo nam, sit rerum.'
      desc= ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus beatae, expedita a praesentium repudiandae magni commodi iste nisi harum nemo asperiores ipsam! Deleniti fuga, nobis ex facere maxime nemo quis dicta accusantium sed adipisci possimus illo nam, sit rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus beatae, expedita a praesentium repudiandae magni commodi iste nisi harum nemo asperiores ipsam! Deleniti fuga, nobis ex facere maxime nemo quis dicta accusantium sed adipisci possimus illo nam, sit rerum.'
      
      ></Third>

      <Third
      name= 'Olusegun Sunady'
      title= 'Fullstack Developer'
      bio= ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus beatae, expedita a praesentium repudiandae magni commodi iste nisi harum nemo asperiores ipsam! Deleniti fuga, nobis ex facere maxime nemo quis dicta accusantium sed adipisci possimus illo nam, sit rerum.'
      desc= ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus beatae, expedita a praesentium repudiandae magni commodi iste nisi harum nemo asperiores ipsam! Deleniti fuga, nobis ex facere maxime nemo quis dicta accusantium sed adipisci possimus illo nam, sit rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus beatae, expedita a praesentium repudiandae magni commodi iste nisi harum nemo asperiores ipsam! Deleniti fuga, nobis ex facere maxime nemo quis dicta accusantium sed adipisci possimus illo nam, sit rerum.'
      ></Third>
      <Fourth />
      <Fifth></Fifth>
      <Increament></Increament>
      <Sixth></Sixth>
      <Time></Time>
      <Eight></Eight>
      <Nineth></Nineth>
      <Tenth></Tenth>
      <Box></Box>
      <Product></Product>
      {/* <Assignment></Assignment> */}
      <Eleventh></Eleventh>
      <Twelvth></Twelvth>
      <Thirteen></Thirteen>

    </div>
  );
}

export default App;
