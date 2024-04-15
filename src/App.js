import './styles/App.css';
import SmallCardHolder from './components/SmallCardHolder';
import Container from 'react-bootstrap/Container';
import cardData from './data/cardData';
function App() {

    return (
        <div className="App">
            <Container>
                <SmallCardHolder cardData={cardData} bsLgDivision={4} bsSmDivision={6} />
            </Container>
        </div>
    );
}

export default App;