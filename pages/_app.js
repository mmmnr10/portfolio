import { ProjectProvider } from '../context/ProjectContext'; 
import Navbar from '../components/Navbar'; 
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <ProjectProvider>
      {}
      <Navbar /> {}
      <Component {...pageProps} /> {}
    </ProjectProvider>
  );
}

export default MyApp;