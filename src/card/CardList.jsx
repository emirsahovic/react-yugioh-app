import { useContext, useEffect } from "react"
import Spinner from "../components/Spinner";
import { YugiohContext } from "../context/YugiohContext"
import CardItem from "./CardItem";

const CardList = () => {
    const { cards, loading, fetchCards } = useContext(YugiohContext);

    useEffect(() => {
        fetchCards();
    }, []);

    if (loading) { return <Spinner /> }
    else {
        return (
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-36 my-10 gap-6">
                {cards.map((card) => (
                    <CardItem key={card.id} card={card} />
                ))}
            </div>
        )
    }
}

export default CardList
