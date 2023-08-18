import { Container, Stack, Col } from "react-bootstrap";
import { HiMusicNote } from "react-icons/hi";
function ProfileTop() {
  return (
    <>
      <Col xs={8}>
        <div>
          <h4>John Smith</h4>
          <p>
            <HiMusicNote />
            <small> Learn to play guitar with popular songs</small>
          </p>
        </div>
        <Container className="py-2 px-2 border border-dark rounded-4">
          <Container className="py-2 px-2 border border-dark rounded-4 text-center">
            <Stack direction="horizontal" gap={3}>
              <Stack direction="Vertical">
                <p className="my-0">
                  <small>0</small>
                </p>
                <p className="my-0">
                  <small>My progress</small>
                </p>
              </Stack>

              <Stack
                direction="Vertical"
                className="d-flex justify-content-center"
              >
                <p className="my-0">
                  <small>2</small>
                </p>
                <p className="my-0">
                  <small>Followers</small>
                </p>
              </Stack>

              <Stack
                direction="Vertical"
                className="d-flex justify-content-center"
              >
                <p className="my-0">
                  <small>32</small>
                </p>
                <p className="my-0">
                  <small>Following</small>
                </p>
              </Stack>
            </Stack>
          </Container>
        </Container>
      </Col>
    </>
  );
}

export default ProfileTop;
