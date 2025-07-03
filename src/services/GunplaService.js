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

//Fetch from API localhost:8080//api/gunpla/list
const jsonList = () => {
    return fetch('http://localhost:8080/api/gunpla/list')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

    
export const list = () => {
    return initList; 
}

export const mockEntry = () => {
    return entry;
} 

export const fetchedList = () => {
    return jsonList();
}