import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerLogin.module.scss"

const BannerLogin = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
                  autoFocus
                />
              </div>
              <div className="login-modal-box-form">
                <span>비밀번호</span>
                <input type="password" placeholder="비밀번호를 입력해주세요." />
              </div>
              <button className="login-modal-box-submit">로그인</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleClose}>
            로그인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BannerLogin;
