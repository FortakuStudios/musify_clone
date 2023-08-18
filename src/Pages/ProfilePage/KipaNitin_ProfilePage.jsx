import { Container, Row, Col } from "react-bootstrap";
import ProfileTop from "./KipaNitin_ProfileTop";
import ProfilePicture from "../../Component/KipaNitin_ProfilePicture";
import Statistics from "./KipaNitin_Statistics";
import Achievements from "./KipaNitin_Achievements";
import RecommendedSongs from "./KipaNitin_RecommendedSongs";
import Friends from "./KipaNitin_Friends";

function ProfilePage() {
  return (
    <Container className="my-5 ps-5 ms-5">
      <Row>
        <Col md={6}>
          {/* Left column containing profile statistics and achievements */}

          <Row className="mb-5">
            <Col>
              <div>
                <ProfilePicture
                  size="160px"
                  picUrl="https://images.unsplash.com/photo-1612624470786-2db358f08992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80"
                />
              </div>
            </Col>

            <ProfileTop />
          </Row>
          <Row className="mb-5">
            <Statistics />
          </Row>
          <Row className="mb-5">
            <Achievements />
          </Row>
        </Col>
        <Col md={6} className="ps-5">
          <RecommendedSongs />
          <Friends />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
