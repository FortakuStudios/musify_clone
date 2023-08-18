import { Container } from "react-bootstrap";
import NavBar from "../../Component/KipaNitin_NavBar";
import NewsLatest from "./KipaNitin_NewsLatest";
function NewsPage() {
  return (
    <>
      <Container className="ps-5 ms-5 pe-1 me-1">
        <NavBar />
        <div className="my-4">
          <h1>News</h1>
        </div>
        <NewsLatest />
      </Container>
    </>
  );
}

export default NewsPage;
