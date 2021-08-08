function addNewHobby(hobby) {
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
}

function setActiveHobby(hobby) {
  return {
    type: "SET_ACTIVE_HOBBY",
    payload: hobby,
  };
}

export { addNewHobby, setActiveHobby };
