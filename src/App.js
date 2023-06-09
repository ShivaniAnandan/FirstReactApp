import './App.css';
import "./Styles.css"
import Header from './Components/Header';
import About from './Components/About';
import Section from './Components/Section';
import Footer from './Components/Footer';

let section_data = [
  {title: "Skills", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto ipsam voluptate soluta sunt suscipit officiis illo at autem sint eos vero provident impedit sequi, deserunt beatae, a eaque dicta ut? Quae sed totam, accusamus facere nemo exercitationem placeat facilis nesciunt ullam animi ipsa quos itaque, perspiciatis quo id quibusdam incidunt debitis qui error tempora soluta alias eius aliquid? Deserunt saepe sequi quos necessitatibus id expedita provident itaque dolore velit pariatur! Minima, ratione. Quisquam, voluptatum."},

  {
      title: "Experience",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto ipsam voluptate soluta sunt suscipit officiis illo at autem sint eos vero provident impedit sequi, deserunt beatae, a eaque dicta ut? Quae sed totam, accusamus facere nemo exercitationem placeat facilis nesciunt ullam animi ipsa quos itaque, perspiciatis quo id quibusdam incidunt debitis qui error tempora soluta alias eius aliquid? Deserunt saepe sequi quos necessitatibus id expedita provident itaque dolore velit pariatur! Minima, ratione. Quisquam, voluptatum."
  },

  {
      title: "Education",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto ipsam voluptate soluta sunt suscipit officiis illo at autem sint eos vero provident impedit sequi, deserunt beatae, a eaque dicta ut? Quae sed totam, accusamus facere nemo exercitationem placeat facilis nesciunt ullam animi ipsa quos itaque, perspiciatis quo id quibusdam incidunt debitis qui error tempora soluta alias eius aliquid? Deserunt saepe sequi quos necessitatibus id expedita provident itaque dolore velit pariatur! Minima, ratione. Quisquam, voluptatum."
  }
]

function App() {
  return (
    <div>
      <Header/>
      <About />
      {
        section_data.map((value,index) => (
          <Section
            title={value.title}
            description={value.description} 
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
