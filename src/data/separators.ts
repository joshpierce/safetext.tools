type ISeparator = {
    id: string;
    name: string;
    data?: string | RegExp;
    stringData?: string;
};

const separators: ISeparator[] = [
    {
        id: 'comma',
        name: 'Comma',
        data: ',',
    },
    {
        id: 'newLine',
        name: 'New Line',
        data: /\n/g,
        stringData: '\r\n',
    },
    {
        id: 'blankLine',
        name: 'Blank Line',
        data: /\r?\n/,
        stringData: '\r\n\r\n',
    },
    {
        id: 'space',
        name: 'Space',
        data: ' ',
    },
    {
        id: 'tab',
        name: 'Tab',
        data: '\t',
    },
    {
        id: 'other',
        name: 'Other',
    },
];

export { type ISeparator, separators };
