// Oauth Auth Code

export interface SocialType {
  socialType: "KAKAO";
}

// Oauth Auth Code

export interface AuthCode {
  authCode: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
