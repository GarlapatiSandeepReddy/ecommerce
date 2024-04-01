import Header from "./Header";
import { useLocation } from "react-router-dom";

function Home(){
    const location = useLocation();
    const userData = location.state && location.state.userData;
    return (
        <Header userData = {userData}/>
    );
}

export default Home;