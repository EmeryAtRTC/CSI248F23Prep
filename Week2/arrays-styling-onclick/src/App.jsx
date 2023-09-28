import UserCard from "./Components/UserCard";
import StyleInComponent from "./Components/StyleInComponent";
import StyleWithProps from "./Components/StyleWithProps";
//bring in the css
import "./App.css";
function App() {
  //make a function to handle the click
  const alertHandler = (e) => {
    //e is the event object
    console.log(e.target);
    e.target.style.backgroundColor = "red";
    alert("testing");
  };
  return (
    <>
      <h2>App</h2>
      <UserCard
        userName={"test user"}
        phoneNumber={"123-456-7890"}
        email={"none@none.com"}
        address={"123 anywhere lane"}
      />
      <StyleInComponent
        userName={"test user"}
        phoneNumber={"123-456-7890"}
        email={"none@none.com"}
        address={"123 anywhere lane"}
      />
      <StyleWithProps
        userName={"test user"}
        phoneNumber={"123-456-7890"}
        email={"none@none.com"}
        address={"123 anywhere lane"}
        backgroundColor={"darkBlue"}
        color={"white"}
      />
      {/* lets talk about events */}
      {/* what did i do wrong here? */}
      {/* In this example we are actually CALLING alert() */}
      {/* That is not what we want to do */}
      {/* We want to provide a function to be called later */}
      {/* <button onClick={alert("testing")}>Click Me</button> */}
      {/* This is the correct way to do it */}
      <button onClick={alertHandler}>Click Me</button>
    </>
  );
}

export default App;
