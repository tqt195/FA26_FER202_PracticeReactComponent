import logo from './logo.svg';
import './App.css';
import MyProfile, { MySubject } from './BaseComponent/MyProfile';
import BaseUseState from './StateHook/BaseUseState';
import Navigation from './Navigation';
import Pets from './Pets';
import Footer from './Footer';




function App() {

  return (
    
    <>
    <Navigation/>
    <Pets/>
    <Footer/>
    {/* <MyProfile textInfo={"textValue"} avatarInfo={{
      alt: "ava ava",
      src: "https://th.bing.com/th/id/OIP.0xJa5a25OKgjP7H4QqftaAHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    }}/>
    <MySubject/>
    
    <BaseUseState/> */}
    </>
    
  );
}

export default App;
