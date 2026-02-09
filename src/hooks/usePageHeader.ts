import {useEffect} from "react";
import { useOutletContext } from 'react-router-dom';
import {HeaderProps, LayoutContextType} from "../types/layout";

export const usePageHeader = (props:HeaderProps) => {
    const {setHeaderProps} = useOutletContext<LayoutContextType>();
    useEffect(() => {
        setHeaderProps(props);

        return () => setHeaderProps(null);

    },[setHeaderProps])
}
