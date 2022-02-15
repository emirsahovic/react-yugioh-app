import { useParams } from "react-router-dom"
import { useEffect, useContext } from "react"
import { YugiohContext } from "../context/YugiohContext";
import { GiCardPlay } from 'react-icons/gi';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import { FaLevelUpAlt } from 'react-icons/fa';

const Card = () => {
    const params = useParams();
    const { card, fetchCardByName } = useContext(YugiohContext);

    useEffect(() => {
        fetchCardByName(params.name);
    }, [])

    return (
        <div className="container mx-auto text-white mt-24">
            <div className="grid grid-cols-3 mx-44">
                <img src={card.card_images[0].image_url} className="w-80 h-5/6 hover:scale-105 transition duration-300" alt="Card" />
                <div className="col-span-2">
                    <p className="text-xl text-gray-400">{card.desc}</p>
                    {card.atk ? (
                        <div className="flex items-center mt-8 mb-2">
                            <span className="text-xl mr-1 tracking-wider text-gray-300">ATTACK</span>
                            <GoPlus className="text-3xl mr-3 text-lime-400" />
                            <p className="text-xl font-bold">{card.atk}</p>
                        </div>
                    ) : null}
                    {card.def ? (
                        <div className="flex items-center my-2">
                            <span className="text-xl mr-1 tracking-wider text-gray-300">DEFENSE</span>
                            <HiMinus className="text-3xl mr-3 text-red-400" />
                            <p className="text-xl font-bold">{card.def}</p>
                        </div>
                    ) : null}
                    {card.level ? (
                        <div className="flex items-center my-2">
                            <span className="text-xl mr-1 tracking-wider text-gray-300">LEVEL</span>
                            <FaLevelUpAlt className="text-3xl mr-3 text-blue-400" />
                            <p className="text-xl font-bold">{card.level}</p>
                        </div>
                    ) : null}
                    <div className="flex items-center my-2">
                        <span className="text-xl mr-1 tracking-wider text-gray-300">TYPE</span>
                        <GiCardPlay className="text-3xl mr-3 text-lime-400" />
                        <p className="text-xl italic font-bold">{card.race}</p>
                    </div>
                    {card.attribute ? (
                        <div className="flex items-center my-2">
                            <span className="text-xl mr-1 tracking-wider text-gray-300">ATTRIBUTE</span>
                            <GiCardPlay className="text-3xl mr-3 text-lime-400" />
                            <p className="text-xl italic font-bold">{card.attribute}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Card
