import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>My name is Rhtyhm</p>
       <Call></Call>
       <Call></Call>
      <Call></Call>
      <Call></Call>
      <Call></Call>
      <Product name="Photoshop" price="$99.99"></Product>
      <Product name="Photoshop" price="$99.99"></Product>
      <Product name="Photoshop" price="$99.99"></Product>
      <Product name="Photoshop" price="$99.99"></Product>
      <Product name="Photoshop" price="$99.99"></Product>
      <Product name="Photoshop" price="$99.99"></Product>
      </header>
    </div>
  );
}
function Product(props){
  const style = {
    border:'2px solid gray',
    color:'white',
    backgroundColor:"lightGray",
    padding:'50px',
    marginBottom:'20px',
  }
  return(
    <div style={style}>
      <h2>{props.name}</h2>
      <h1>{props.price}</h1>
      <button style={{padding:'10px' ,backgroundColor:'blue',color:'white',border:'none',fontSize:'19px'}}>Buy now</button>
    </div>
  )
}



function Call(){
  return (
    <div>
        <h1 style={{border: '2px solid white', padding: "15px",borderRadius:'15px'}}>Name : Rhythm</h1>
        <h2 style={{color:"lightBlue"}}>Age : 15</h2>
    </div>
  )
}
export default App;
