import { Container, Row } from "react-bootstrap";
import LatestPart from "./KipaNitin_LatestPart";
import FilterPart from "./KipaNitin_FilterPart";

function NewsLatest() {
  return (
    <Container>
      <Row>
        <LatestPart />
        <FilterPart />
      </Row>
    </Container>
  );
}

export default NewsLatest;
