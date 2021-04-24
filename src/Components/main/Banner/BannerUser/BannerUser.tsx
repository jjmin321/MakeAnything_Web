import react from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import cookies from "js-cookie";
import { IUser } from "../../../../interface/IUser";
import "./BannerUser.module.scss";

interface IBannerUser {
  info: IUser;
}

const BannerUser = ({ info }: IBannerUser) => {
  const handleLogout = () => {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    window.location.reload();
  };

  return (
    <>
      <Dropdown as={ButtonGroup} className="dropdown">
        <Button variant="info">손민</Button>
        <Dropdown.Toggle split variant="success" />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">내 정보</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">로그아웃</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* <DropdownButton
        as={ButtonGroup}
        drop="left"
        variant="info"
        title={info.name}
        className="dropleft"
      >
        <Dropdown.Item href="#/action-1">내 정보</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-2">로그아웃</Dropdown.Item>
      </DropdownButton> */}
    </>
  );
};

export default BannerUser;
