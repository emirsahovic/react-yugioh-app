const yugiohReducer = (state, action) => {
    switch (action.type) {
        case 'GET_CARDS':
        case 'GET_SPELLCASTER':
        case 'GET_DRAGON':
        case 'GET_ZOMBIE':
        case 'GET_MACHINE':
            return {
                ...state,
                cards: action.payload,
                loading: false
            }
        case 'GET_CARD_BY_NAME':
            return {
                ...state,
                card: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default yugiohReducer;
