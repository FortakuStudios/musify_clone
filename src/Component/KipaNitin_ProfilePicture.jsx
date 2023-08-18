import { Button } from "react-bootstrap";
function ProfilePicture(prop) {
  return (
    <Button variant="link" className="p-0 border-0">
      <img
        src={prop.picUrl}
        alt="Profile"
        className="rounded-circle"
        width={prop.size}
        height={prop.size}
        style={{ objectFit: "cover" }}
      />
    </Button>
  );
}

export default ProfilePicture;
