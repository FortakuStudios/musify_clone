import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Col, Row, Card } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";

const data = [
  {
    picUrl:
      "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    name: "John Smith",
    subHeader: "on Music Theory",
    message: "Great article, thanks",
    hours: "2h",
  },
  {
    picUrl:
      "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "Michael Clarke",
    subHeader: "on Instrument Practice",
    message: "Awesome tips, thanks",
    hours: "3h",
  },
];

function LatestPart() {
  return (
    <Col md={9}>
      <div className="border border-dark rounded-5 p-5">
        <Row className="justify-content-between align-items-center mb-4 ">
          <Col className="text-left ">
            <h5>Latest</h5>
          </Col>
          <Col className="">
            <div className="rounder-pill" style={{ float: "right" }}>
              <DropdownButton
                id="dropdown-basic-button"
                title="Search news"
                variant="light"
              >
                <Dropdown.Item href="#/action-1">
                  Musical journeys
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">AI in music</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Celebrity gossips
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>
        {data.map((item, index) => (
          <div key={index}>
            <Card style={{ width: "100%" }} className="border-0">
              <Card.Body className="m-0 p-0 d-flex justify-content-between">
                <div className="d-flex ">
                  <Card.Img
                    className="me-3"
                    variant="left"
                    src={item.picUrl}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="ml-3">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.subHeader}</Card.Text>
                    <Card.Text>{item.message}</Card.Text>
                    <Row>
                      <Col>
                        <a>
                          <strong>Like</strong>
                        </a>
                      </Col>
                      <Col>
                        <a>
                          <strong>Reply</strong>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="d-flex align-items-top">
                  <p style={{ marginRight: "10px" }}>{item.hours}</p>
                  <GoDotFill style={{ color: "#ff4c46", fontSize: "25px" }} />
                </div>
              </Card.Body>
            </Card>
            <hr />
          </div>
        ))}
      </div>
    </Col>
  );
}

export default LatestPart;
