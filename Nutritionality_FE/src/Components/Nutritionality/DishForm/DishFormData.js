export function getAddDishFormData(newDish) {
    const addDishFormData = new FormData();
    addDishFormData.append("name", newDish.name);
    addDishFormData.append("adoptionStatus", newDish.adoptionStatus);
    addDishFormData.append("animalType", newDish.animalType);
    addDishFormData.append("breed", newDish.breed);
    addDishFormData.append("color", newDish.color);
    addDishFormData.append("height", newDish.height);
    addDishFormData.append("weight", newDish.weight);
    addDishFormData.append("hypoallergenicStatus", newDish.hypoallergenicStatus);
    addDishFormData.append("dietaryRestrictions", newDish.dietaryRestrictions);
    addDishFormData.append("bio", newDish.bio);
    addDishFormData.append("image", newDish.image, newDish.image?.name);

    return addDishFormData;
}

export function getUpdateDishFormData(updatedDish) {
    const updateDishFormData = new FormData();
    updateDishFormData.append("petId", updatedDish.petId);
    updatedDish.userId && updateDishFormData.append("userId", updatedDish.userId);
    updateDishFormData.append("name", updatedDish.name);
    updateDishFormData.append("adoptionStatus", updatedDish.adoptionStatus);
    updateDishFormData.append("animalType", updatedDish.animalType);
    updateDishFormData.append("breed", updatedDish.breed);
    updateDishFormData.append("color", updatedDish.color);
    updateDishFormData.append("height", updatedDish.height);
    updateDishFormData.append("weight", updatedDish.weight);
    updateDishFormData.append("hypoallergenicStatus", updatedDish.hypoallergenicStatus);
    updateDishFormData.append("dietaryRestrictions", updatedDish.dietaryRestrictions);
    updateDishFormData.append("bio", updatedDish.bio);
    updateDishFormData.append("image", updatedDish.image, updatedDish.image?.name);

    return updateDishFormData;
}