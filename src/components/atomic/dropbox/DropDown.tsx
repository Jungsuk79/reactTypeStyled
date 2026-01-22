import React, { useState, useRef, useEffect } from 'react';
import S from './DropDown.style'

interface Option {
    label: string;
    value: string | number;
    id?: string;
}

interface DropdownProps {
    options?: Option[];
    placeholder?: string;
    onSelect?: (item: Option) => void;
    disabled?: boolean;
    positionTop?:boolean;
    width?: number | string;
}

const Dropdown = ({
  options = [],
  placeholder = "선택하세요",
  onSelect,
  disabled=false,
  positionTop = false,
  width = 'auto'
}:DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Option | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 드롭다운 바깥 클릭 시 닫기 기능
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        if (disabled) return;
        setIsOpen(!isOpen);
    }

    const handleItemClick = (item:Option) => {
        if (disabled) return;
        setSelectedItem(item);
        setIsOpen(false);
        onSelect?.(item); // 부모 컴포넌트로 선택된 값 전달
    };

    return (
        <S.DropdownWrap ref={dropdownRef} $width={width}>
            <S.DropdownHeader $disabled={disabled} onClick={toggleDropdown} $isOpen={isOpen}>
                {selectedItem ? selectedItem.label : placeholder}
                <S.ArrowIcon $isOpen={isOpen} $disabled={disabled}>▼</S.ArrowIcon>
            </S.DropdownHeader>

            {!disabled && isOpen && (
                <S.DropdownList $positionTop={positionTop}>
                    {options.map((option) => (
                        <S.DropdownItem
                            key={option.value}
                            onClick={() => handleItemClick(option)}
                        >
                            {option.label}
                        </S.DropdownItem>
                    ))}
                </S.DropdownList>
            )}
        </S.DropdownWrap>
    );
};

export default Dropdown;