import Header from "./Header";

function Home(props){
    const userData = props.userData;
    return (
        <Header userData = {userData}/>
    );
}

export default Home;