import * as restaurantService from "../../Services/restaurantService";
import Dashboard from "../../Components/Nutritionality/Dashboard/Dashboard";
import Row from "../../Components/General/Flexboxes/Row/Row";
import { useState, useEffect } from "react";

function DashboardPage() {
    const [dishesData, setDishesData] = useState([]);
    const [hasPetInfoChanged, setHasPetInfoChanged] = useState(false);

    useEffect(() => {
        getUsersAndPetData();
    }, [hasPetInfoChanged]);

    const petInfoChangeHandler = () => {
        setHasPetInfoChanged(!hasPetInfoChanged);
    };

    const getUsersAndPetData = async () => {
        const users = await restaurantService.getDishes();
        setDishesData(users);
    };

    return (
        <Row styles='wide-page'>
            <Dashboard
                users={dishesData}
                onChangePetInfo={petInfoChangeHandler}
            />
        </Row>
    );
}

export default DashboardPage;