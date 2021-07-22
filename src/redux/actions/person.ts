import { ADD_PERSON } from 'src/redux';

export const createAddPersonAction = personObj => ({type: ADD_PERSON, data: personObj});