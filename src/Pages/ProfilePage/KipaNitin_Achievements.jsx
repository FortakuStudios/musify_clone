import { Container, Stack, Card } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaTrophy } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
function Achievements() {
  const cardDetail = [
    {
      Symbol: <AiFillClockCircle />,
      Heading: "Dedicated Learner",
      Value: "2/3",
      sub: "Maintain a 3-day practice streak",
    },
    {
      Symbol: <FaTrophy />,
      Heading: "Point Collector",
      Value: "1200/3000",
      sub: "Earn 1800 more points",
    },
  ];
  return (
    <>
      <h5>Achievements</h5>
      <Container className="mt-2 p-0">
        <Stack direction="vertical" gap={3}>
          {cardDetail.map((val, index) => (
            <Card key={index} className="border-dark rounded-4 ">
              <Card.Body className="p-1">
                <Stack direction="horizontal" gap={3}>
                  <h2 className="bg-secondary rounded-4 px-5 pt-3 pb-4 m-0">
                    {val.Symbol}
                  </h2>
                  <Stack direction="vertical" gap={3}>
                    <Stack
                      direction="horizontal"
                      className="d-flex justify-content-between"
                      gap={3}
                    >
                      <Card.Text className="p-0 m-0">
                        <strong>{val.Heading}</strong>
                      </Card.Text>
                      <Card.Text>
                        <small>{val.Value}</small>
                      </Card.Text>
                    </Stack>
                    <ProgressBar
                      variant="light"
                      now={60}
                      style={{ height: "5px" }}
                    />
                    <p className="p-0 m-0">
                      <small>{val.sub}</small>
                    </p>
                  </Stack>
                </Stack>
              </Card.Body>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default Achievements;
