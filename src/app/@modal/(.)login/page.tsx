"use client";

import Modal from "@/app/ui/common/Modal";
import Image from "next/image";

const LoginModal = () => {
  const fetchLogin = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/login/auth?socialType=KAKAO`,
      {
        method: "POST",
      },
    );
    const parsedData = await data.json();
    console.log(parsedData);
  };

  return (
    <Modal>
      <div className="mt-6 flex h-full flex-col justify-between">
        <h3>
          카카오톡 회원가입으로
          <br />
          간편하게 투표를 만들어보세요!
        </h3>
        <button onClick={fetchLogin}>
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
