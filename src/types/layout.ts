export interface HeaderProps {
    title?: string;
    showBack?: boolean;
    isSearch?: boolean;
    isCart?: boolean;
    isHome?: boolean;
}

export interface LayoutContextType {
    setHeaderProps: React.Dispatch<React.SetStateAction<HeaderProps | null>>;
}