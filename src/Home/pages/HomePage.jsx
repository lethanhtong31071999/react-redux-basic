import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../../redux/actions/hobby";
import HobbyList from "../components/HobbyList";

HomePage.propTypes = {};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby["list"]);
  const activeId = useSelector((state) => state.hobby["activeId"]);
  const dispatch = useDispatch();

  function randomNumber() {
    return Number(1000 + Math.trunc(Math.random() * 9000));
  }

  function handleAddHobbyClick() {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    const action = addNewHobby(newHobby);
    dispatch(action);
  }

  function handleOnHobbyClick(activeHobbyId) {
    const action = setActiveHobby(activeHobbyId);
    console.log(activeHobbyId);
    dispatch(action);
  }
  console.log("activeId on Store", activeId);
  return (
    <div className="home-page">
      <h1>REDUX HOOKS -Home Page</h1>
      <button onClick={handleAddHobbyClick}>Randome Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleOnHobbyClick}
      />
    </div>
  );
}

export default HomePage;
