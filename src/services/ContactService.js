// import axios from 'axios';

// export class ContactService {
//     static serverURL = `http://localhost:9000`;

//     static getAllContacts() {
//         let dataURL = `${this.serverURL}/contacts`;
//         return axios.get(dataURL);
//     }
// };

// const [state, setState] = useState(initialState, {
//     loading: false,
//     contacts: [],
//     errorMessage: ''
// });

// useEffect(effect, async () => {
//     try {
//         setState(value, {...state, loading: true});
//         let response = await ContactService.getAllContacts();
//         setState(value, {
//             ...state,
//             loading: false,
//             contacts: response.data
//         });
//     } catch (error) {
//         setState(value, {
//             ...state, 
//             loading: false,
//             errorMessage: error.message
//         })
//     }
// }, inputs,[]); 

// const {loading, contacts, errorMessage} = state;

{/* <pre>{JSON.stringify(contacts)}</pre> */}