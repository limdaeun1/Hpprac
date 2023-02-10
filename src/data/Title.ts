export interface Title {
    title: string;
}

export interface TitleData {
    [key: string]: Title;
}

export const TitleDummy: TitleData = {
    en: {
        title: 'WSA Co., Ltd.'
    },
    kr: {
        title: '우성오토콘(주)'
    }
}