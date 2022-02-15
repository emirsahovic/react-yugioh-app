import { createContext, useReducer } from "react";
import yugiohReducer from './YugiohReducer';
import axios from "axios";

export const YugiohContext = createContext();

export const YugiohProvider = ({ children }) => {
    const initialState = {
        cards: [],
        loading: false,
        card: {}
    }

    const [state, dispatch] = useReducer(yugiohReducer, initialState);

    const fetchCards = async () => {
        setLoading();
        const response = await axios("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        const { data } = await response.data;

        dispatch({
            type: 'GET_CARDS',
            payload: data
        })
    }

    const fetchCardByName = async (name) => {
        setLoading();
        const response = await axios(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);
        const { data } = await response.data;
        const [data2] = data;
        console.log(data2);

        dispatch({
            type: 'GET_CARD_BY_NAME',
            payload: data2
        })
    }

    const fetchSpellcaster = async () => {
        setLoading();
        const response = await axios("https://db.ygoprodeck.com/api/v7/cardinfo.php?race=spellcaster");
        const { data } = await response.data;

        dispatch({
            type: 'GET_SPELLCASTER',
            payload: data
        })
    }

    const fetchDragon = async () => {
        setLoading();
        const response = await axios("https://db.ygoprodeck.com/api/v7/cardinfo.php?race=dragon");
        const { data } = await response.data;

        dispatch({
            type: 'GET_DRAGON',
            payload: data
        })
    }

    const fetchZombie = async () => {
        setLoading();
        const response = await axios("https://db.ygoprodeck.com/api/v7/cardinfo.php?race=zombie");
        const { data } = await response.data;

        dispatch({
            type: 'GET_ZOMBIE',
            payload: data
        })
    }

    const fetchMachine = async () => {
        setLoading();
        const response = await axios("https://db.ygoprodeck.com/api/v7/cardinfo.php?race=machine");
        const { data } = await response.data;

        dispatch({
            type: 'GET_MACHINE',
            payload: data
        })
    }

    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    return <YugiohContext.Provider value={{
        cards: state.cards,
        card: state.card,
        loading: state.loading,
        fetchCards,
        fetchCardByName,
        fetchSpellcaster,
        fetchDragon,
        fetchZombie,
        fetchMachine
    }}>
        {children}
    </YugiohContext.Provider>
}
