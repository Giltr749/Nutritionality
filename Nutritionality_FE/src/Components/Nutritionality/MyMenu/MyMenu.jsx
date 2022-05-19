import RestaurantResult from '../SearchResults/RestaurantResult/RestaurantResult';
import SymmetricalGrid from '../../General/Grids/SymmetricalGrid/SymmetricalGrid';
import { useInspectedPet } from '../../../Hooks/useInspectedPet';
import { useWindowSize } from '../../../Hooks/useWindowSize';
import '../../../Styles/general.css';
import './MyPets.css';

function MyPets({ pets }) {
    const { updateInspectedPet } = useInspectedPet();
    const [windowHeight, windowWidth] = useWindowSize();

    //Event sent by default by RestaurantResult component:
    const moreDetailsRequestHandler = (event, pet) => {
        updateInspectedPet(pet);
    };

    const getNumOfColumns = () => {
        return windowWidth <= 1000 ? 1 : windowWidth <= 1500 ? 2 : 3;
    };

    return (
        <SymmetricalGrid styles='my-pets-container' numOfColumns={getNumOfColumns()}>
            {pets.map((pet, index) => (
                <div className="pet">
                    {<RestaurantResult
                        key={index}
                        pet={pet}
                        onMoreDetailsRequest={moreDetailsRequestHandler}
                    />}
                </div>
            ))}
        </SymmetricalGrid>
    );
}

export default MyPets;