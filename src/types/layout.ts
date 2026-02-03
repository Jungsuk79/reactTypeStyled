export interface HeaderProps {
    title?: string;
    showBack: boolean;
}

export interface LayoutContextType {
    setHeaderProps: React.Dispatch<React.SetStateAction<HeaderProps | null>>;
}