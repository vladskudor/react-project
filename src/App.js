import './App.css';
import './global-styles.css';
import Mcomponent from './Mcomponent';
import Menu from './Menu';
import background from './background-image.jpg'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Menu />
            </header>
            <main>
                <Mcomponent />
            </main>
            <div style={{
                backgroundColor: '#000',
                backgroundImage: `url(${background})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom'
            }} className='background-block'>
                <img src={background}/>
            </div>
        </div>
    );
}

export default App;
