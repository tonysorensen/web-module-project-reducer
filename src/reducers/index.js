import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, ADD_TO_MEMORY, RECALL} from './../actions';

export const initialState = {
    total: 100,
    operation: "+",
    memory: 100
}

const calculateResult = (state, num1, num2, operation) => {
    console.log('all the things',state, num1, num2, operation )
    switch(operation) {
        case("+"):
        console.log("1")
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
            default:
        return state;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
        console.log(action.payload)
            return ({ 
                ...state, 
                total: calculateResult(state, state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY):
        return({
            ...state,
            total: 0
        });

        case(ADD_TO_MEMORY):
        return({...state, memory:state.total});

        case (RECALL):
            return({...state, total: state.memory});
            
        default:
            return state;
    }
}

export default reducer;