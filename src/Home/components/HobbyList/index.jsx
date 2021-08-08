import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array.isRequired,
  onHobbyClick: PropTypes.func,
  activeId: PropTypes.number,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, onHobbyClick, activeId } = props;

  function handleOnClick(e, hobby) {
    console.log(hobby);
    onHobbyClick(hobby.id);
  }

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          onClick={(e) => handleOnClick(e, hobby)}
          key={hobby.id}
          className={hobby.id === activeId ? "active" : null}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
