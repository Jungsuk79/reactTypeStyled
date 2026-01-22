// src/types/guide.ts (공통 타입 정의)
export interface ColorItem {
    title: string;
    name: string;
    color: string;
    rgbColor: string;
    type?: 'brand' | 'sub' | 'gray';
}

export interface FontStyleItem {
    text: string;
    title: string;
    fontWeight: string;
}

export interface FontSizeWeightItem {
    title: string;
    size: string;
    fontWeight: string;
    weightTxt:string;
}