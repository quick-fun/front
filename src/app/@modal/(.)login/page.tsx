"use client";

import Modal from "@/app/ui/common/Modal";
import Image from "next/image";

const LoginModal = () => {
  return (
    <Modal style={"h-64"}>
      <div className="mt-6 flex h-full flex-col justify-between">
        <h3>
          카카오톡 회원가입으로
          <br />
          간편하게 투표를 만들어보세요!
        </h3>
        <button onClick={() => console.log("clicked")}>
          <Image
            src="/images/kakao_login_btn.png"
            alt="Kakao login button image"
            width="300"
            height="200"
          />
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
