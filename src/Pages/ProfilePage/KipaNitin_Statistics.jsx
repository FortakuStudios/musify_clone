import { Container, Stack, Card } from "react-bootstrap";
import { FaTrophy } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
function Statistics() {
  const cardDetail = [
    { Symbol: <TiTick />, Heading: "Completed lessons", Value: "3" },
    { Symbol: <AiFillClockCircle />, Heading: "Practice hours", Value: "56" },
    { Symbol: <FaTrophy />, Heading: "Skills mastered", Value: "7" },
  ];
  return (
    <>
      <h5>Statistics</h5>
      <Container className="text-center mt-2">
        <Stack direction="horizontal" gap={3}>
          {cardDetail.map((val, index) => (
            <Card
              key={index}
              style={{ width: "18rem" }}
              className="border-dark rounded-4"
            >
              <Card.Body className=" p-2">
                <h2 className="bg-secondary rounded-4 py-2">{val.Symbol}</h2>
                <Card.Text className="m-0 p-0 ">
                  <small>
                    <strong>{val.Heading}</strong>
                  </small>
                </Card.Text>
                <Card.Text>{val.Value}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default Statistics;
