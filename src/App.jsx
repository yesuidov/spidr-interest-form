import InterestForm from './components/InterestForm'
import cornerImage from './assets/spidr-logo.png';
import './App.css';

function App() {
  return (
    <div className='form-wrapper'>
      <img src={cornerImage} alt="" className="corner-image-outside" />
      <InterestForm />
    </div>
  )
}

export default App
