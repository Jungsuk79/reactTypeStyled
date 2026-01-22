import React ,{useState} from 'react';

export const useAlert = () => {
    const [activeAlert, setActiveAlert] = useState<string | null>(null);
    const openAlert = (id: string) => setActiveAlert(id);
    const closeAlert = () => setActiveAlert(null);

    return { activeAlert, openAlert, closeAlert };
};