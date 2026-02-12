export interface HeaderProps {
    title?: string;
    showBack?: boolean;
    isSearch?: boolean;
    isCart?: boolean;
    isHome?: boolean;
    className?: string;
    isMain?: boolean;
}

export interface LayoutContextType {
    setHeaderProps: React.Dispatch<React.SetStateAction<HeaderProps | null>>;
    setFooterVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}