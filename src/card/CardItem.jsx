import { FaMoneyBillAlt } from 'react-icons/fa';

const CardItem = ({ card }) => {
    return (
        <div className="shadow-xl rounded-lg flex flex-col p-6">
            <img src={card.card_images[0].image_url} className="w-64 h-5/6 hover:scale-105 transition duration-300" alt="Card" />
            <h3 className="text-white text-lg text-center font-bold pt-2">{card.type}</h3>
            <h3 className="text-gray-400 text-lg text-center font-bold pt-2">{card.race}</h3>
            <div className='flex items-center justify-center mt-2'>
                <FaMoneyBillAlt className='text-3xl text-lime-400 mr-3' />
                <h3 className="text-gray-400 text-lg text-center font-bold">{card.card_prices[0].cardmarket_price}</h3>
            </div>
        </div>
    )
}

export default CardItem;
