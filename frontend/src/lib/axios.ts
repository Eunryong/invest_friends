import axios from "axios";
import { toast } from "sonner"; // 이미 설치된 sonner 사용

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 전역 에러 핸들링
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    // 네트워크 에러
    if (!response) {
      toast.error("네트워크 연결을 확인해주세요.");
      return Promise.reject(error);
    }

    // HTTP 상태 코드별 에러 처리
    switch (response.status) {
      case 400:
        toast.error("잘못된 요청입니다.");
        break;
      case 401:
        toast.error("로그인이 필요합니다.");
        localStorage.removeItem("token");
        window.location.href = "/login";
        break;
      case 403:
        toast.error("접근 권한이 없습니다.");
        break;
      case 404:
        toast.error("요청한 리소스를 찾을 수 없습니다.");
        break;
      case 500:
        toast.error("서버 오류가 발생했습니다.");
        break;
      default:
        toast.error("알 수 없는 오류가 발생했습니다.");
    }

    return Promise.reject(error);
  }
);
