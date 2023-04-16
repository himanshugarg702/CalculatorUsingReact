const initialState = {
    currentValue: '0',
    previousValue: null,
    operation: null,
  };
  
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INPUT_NUMBER':
        return {
          ...state,
          currentValue:
            state.currentValue === '0' ? String(action.payload) : state.currentValue + action.payload,
        };
      case 'INPUT_DECIMAL':
        return {
          ...state,
          currentValue: state.currentValue.includes('.') ? state.currentValue : state.currentValue + '.',
        };
      case 'CLEAR':
        return {
          ...state,
          currentValue: '0',
          previousValue: null,
          operation: null,
        };
        case 'CROSS':
          const backSpace = state.currentValue.slice(0, -1);
          return {
            ...state,
            currentValue: backSpace,
          };
          case 'PERCENTAGE':
            const percentage = parseFloat(state.currentValue);
            // const currentV = parseFloat(state.currentValue);
            const previousV = state.previousValue
              ? parseFloat(state.previousValue)
              : parseFloat(state.currentValue);
            const result = previousV + (previousV * percentage) / 100;
          
          return {
            ...state,
            currentValue: result.toString(),
            previousValue: null,
            operation: null,
          };
      case 'ADD':
      case 'SUBTRACT':
      case 'MULTIPLY':
      case 'DIVIDE':
        return {
          ...state,
          operation: action.type,
          previousValue: state.currentValue,
          currentValue: '0',
        };
      case 'EQUALS':
        const { currentValue, previousValue, operation } = state;
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);
        const resetState = {
          operation: null,
          previousValue: null,
        };
  
        switch (operation) {
          case 'ADD':
            return {
              ...state,
              ...resetState,
              currentValue: (previous + current).toString(),
            };
          case 'SUBTRACT':
            return {
              ...state,
              ...resetState,
              currentValue: (previous - current).toString(),
            };
          case 'MULTIPLY':
            return {
              ...state,
              ...resetState,
              currentValue: (previous * current).toString(),
            };
          case 'DIVIDE':
            return {
              ...state,
              ...resetState,
              currentValue: (previous / current).toString(),
            };
          default:
            return state;
        }
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  