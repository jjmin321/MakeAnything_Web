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
      <Dropdown as={ButtonGroup}>
        <Button variant="info">{info.name}</Button>
        <Dropdown.Toggle split variant="success" />
        <Dropdown.Menu className="dropdown-menu.show">
          <Dropdown.Item href="#/action-1">내 정보</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default BannerUser;
