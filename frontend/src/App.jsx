import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Question from "./components/Question";
import Section from "./components/Section";
import Preview from "./components/Preview";

const App = () => {
  return (
    <Router>
      <div className='display-6 text-center my-4 fw-semibold'>Untitled Form</div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Question />} />
        <Route path='question' element={<Question />} />
        <Route path='section' element={<Section />} />
        <Route path='preview' element={<Preview />} />
      </Routes>
    </Router>
  );
};
export default App;
