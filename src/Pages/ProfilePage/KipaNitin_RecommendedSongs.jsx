import { Button, Card, ListGroup, Stack } from "react-bootstrap";
import ProfilePicture from "../../Component/KipaNitin_ProfilePicture";
import { AiFillPlusCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
function RecommendedSongs() {
  const recomData = [
    {
      picUrl:
        "https://images.unsplash.com/photo-1473707669572-40d832255b5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      name: "Emily Davis",
    },
    {
      picUrl:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "David Wilson",
    },
  ];
  return (
    <div className="mb-5">
      <h5>Recommended Songs</h5>
      <Card className="p-3 mt-4 border border-dark rounded-4 ">
        <ListGroup variant="flush">
          {recomData.map((recom, index) => (
            <ListGroup.Item
              key={index}
              className=" border-bottom border-dark rounded-0 "
            >
              <Stack direction="horizontal" gap={3}>
                <ProfilePicture size="40px" picUrl={recom.picUrl} />
                <div>
                  <p>{recom.name}</p>
                </div>

                <Button className="bg-transparent border-0 p-2 ms-auto">
                  <AiFillPlusCircle className="text-primary" />
                </Button>
                <Button className="bg-transparent border-0">
                  <RxCross2 />
                </Button>
              </Stack>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button
          className="col-2 rounded-pill my-2  "
          style={{ color: "white" }}
        >
          View All
        </Button>
      </Card>
    </div>
  );
}

export default RecommendedSongs;
