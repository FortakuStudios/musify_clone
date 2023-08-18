import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Button, Stack } from "react-bootstrap";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiMusicNote } from "react-icons/hi";
import ProfilePicture from "./KipaNitin_ProfilePicture";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between p-4 border border-black rounded-1">
      <Form inline className="d-flex align-items-center">
        {" "}
        {/* Added 'd-flex align-items-center' classes */}
        <Form.Control
          type="text"
          placeholder="Search for music notes"
          className="py-2 pe-5 me-5 rounded-5"
          style={{ background: "#f5f5f5" }}
        />
      </Form>
      <Stack direction="horizontal">
        <Button className="px-4 rounded-pill" style={{ color: "white" }}>
          Learn
        </Button>
        <Button className="bg-transparent border-0 p-2">
          <RxMagnifyingGlass />
        </Button>
        <Button className="bg-transparent border-0 p-2">
          <HiMusicNote />
        </Button>
        <Link to={"/"}>
          <ProfilePicture
            picUrl="https://images.unsplash.com/photo-1612624470786-2db358f08992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80"
            size="50px"
          />
        </Link>
      </Stack>
    </Navbar>
  );
}

export default NavBar;
