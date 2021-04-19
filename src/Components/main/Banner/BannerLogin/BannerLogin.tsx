import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerLogin.module.scss";

const BannerLogin = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState<String>();
  const [pw, setPw] = useState<String>();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleLogin();
    }
  };
  const handleLogin = () =>
    axios
      .post("http://localhost:8080/user/signIn", {
        id: id,
        pw: pw,
      })
      .then((Response) => {
        swal.fire({
          icon: "success",
          title: Response.data.message,
        });
        setTimeout(() => {
          setShow(false);
        }, 1000);
        // cookies.set("accessToken", Response.data.accessToken, { expires: 1 });
      })
      .catch((error) => {
        console.log(error);
        swal.fire({
          icon: "warning",
          title: error.response.data.message,
          timer: 1500,
        });
      });
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePw = (e) => {
    setPw(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        로그인
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>도담도담 로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          교내에서 사용하는 도담도담으로 로그인 시 자동으로 로그인됩니다.
          <div className="login-modal">
            <div className="login-modal-area" />
            <div className="login-modal-box">
              <h3 className="login-modal-box-title">로그인</h3>
              <div className="login-modal-box-form">
                <span>아이디</span>
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요."
                  onChange={handleChangeId}
                  onKeyPress={handleKeyPress}
                  autoFocus
                />
              </div>
              <div className="login-modal-box-form">
                <span>비밀번호</span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={handleChangePw}
                  onKeyPress={handleKeyPress} 
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button
            variant="primary"
            onClick={handleLogin}
          >
            로그인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BannerLogin;
