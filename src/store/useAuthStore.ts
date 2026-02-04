import { create } from 'zustand';

interface AuthState {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    // 초기값: 로컬스토리지에 토큰이 있으면 true, 없으면 false
    isLoggedIn: !!localStorage.getItem('token'),
    // isLoggedIn : true,

    login: (token) => {
        localStorage.setItem('token', token);
        set({ isLoggedIn: true });
    },

    logout: () => {
        localStorage.removeItem('token');
        set({ isLoggedIn: false });
    },
}));