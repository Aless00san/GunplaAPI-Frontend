const initList = [
    {
        id: 1,
        name: 'M1 Astray',
        grade: 'HG',
        serie: 'Seed'
    },
    {
        id: 2,
        name: 'Astray Red Frame',
        grade: 'HG',
        serie: 'Seed Astray'
    }
];

const entry = {
    id: 0,
    name: '',
    grade: '',
    serie: ''
}
    
export const list = () => {
    return initList; 
}

export const mockEntry = () => {
    return entry;
}