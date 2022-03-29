import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span> tracking </span> app
          </h1>
          <p>
            I'm baby bicycle rights prism tote bag cliche meditation. Jean shorts snackwave schlitz copper mug church-key fixie prism deep v, edison bulb truffaut coloring book bitters keytar. Seitan air plant biodiesel, cred kogi single-origin coffee ethical fam hexagon.
          </p>
          <button className="btn btn-hero">
            Login/Register
          </button>
        </div>
        <img src={main} className="img main-img" />
      </div>
    </main>
  )
}

export default Landing