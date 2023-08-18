import { useState } from "react";
import { Image } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";
import { MdOutlineWindow } from "react-icons/md"; // Using FontAwesome icons
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col } from "react-bootstrap";
import "./Sidebar.css"; // Make sure to have a corresponding CSS file for styling

const menuItems = [
  {
    icon: <MdOutlineWindow className="menu-icon" />,
    text: "Music Overview",
    link: "/news",
  },
  {
    icon: <FaSchool className="menu-icon" />,
    text: "Music Classes",
    link: "/news",
  },
  {
    icon: <BsFillPatchCheckFill className="menu-icon" />,
    text: "Music Grades",
    link: "/news",
  },
  {
    icon: <HiUsers className="menu-icon" />,
    text: "Music Teachers",
    link: "/news",
  },
  {
    icon: <BiSolidCalendarEdit className="menu-icon" />,
    text: "Music Notes",
    link: "/news",
  },
];

const footItems = [
  {
    icon: <AiTwotoneSetting className="menu-icon" />,
    text: "Settings",
    link: "/",
  },
  { icon: <MdLogout className="menu-icon" />, text: "Log out", link: "/" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [profileVisible, setProfileVisible] = useState(true);

  const handleMouseEnter = () => {
    setExpanded(true);
    setProfileVisible(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
    setProfileVisible(false);
  };

  return (
    <div
      className={`sidebar ${expanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`profile-section ps-2 ${profileVisible ? "visible" : ""}`}
      >
        <Row>
          <Col xs={3} className="mt-1">
            <Image
              src="https://images.unsplash.com/photo-1612624470786-2db358f08992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80"
              roundedCircle
              style={{ width: "40px", height: "40px" }}
            />
          </Col>
          <Col xs={9}>
            {expanded && profileVisible && (
              <span className="profile-text mb-0" style={{ fontSize: "15px" }}>
                Learn Music{" "}
              </span>
            )}
            {expanded && profileVisible && (
              <span className="profile-text mt-0" style={{ fontSize: "11px" }}>
                <small>Contact Support </small>
              </span>
            )}
          </Col>
        </Row>
      </div>
      <div className="menu-section">
        <ListGroup variant="flush">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <ListGroup.Item
                className="icon-col text-white "
                style={{ backgroundColor: "#282828", borderColor: "#282828" }}
              >
                {item.icon}
                {expanded && <span className="menu-text">{item.text}</span>}
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </div>
      <div>
        <hr
          style={{
            borderTop: "1px solid white", // This sets the color and style of the HR
            margin: "20px 0",
          }}
        />
        <ListGroup variant="flush">
          {footItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <div>
                <ListGroup.Item
                  className="icon-col text-white"
                  style={{ backgroundColor: "#282828", borderColor: "#282828" }}
                >
                  {item.icon}
                  {expanded && <span className="menu-text">{item.text}</span>}
                </ListGroup.Item>
              </div>
            </Link>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Sidebar;
