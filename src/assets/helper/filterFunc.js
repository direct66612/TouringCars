export const filterCampers = (campers, filter) => {
  return campers.filter((camper) => {
    if (
      filter.location &&
      !camper.location.toLowerCase().includes(filter.location.toLowerCase())
    ) {
      return false;
    }

    const checkBox = filter.checkBox;
    if (checkBox) {
      if (
        checkBox.ac &&
        (!camper.details || camper.details.airConditioner < 1)
      ) {
        return false;
      }
      if (checkBox.automatic && camper.transmission !== "automatic") {
        return false;
      }
      if (checkBox.kitchen && (!camper.details || camper.details.kitchen < 1)) {
        return false;
      }
      if (checkBox.tv && (!camper.details || camper.details.TV < 1)) {
        return false;
      }
      if (
        checkBox.bathroom &&
        (!camper.details || camper.details.bathroom < 1)
      ) {
        return false;
      }
    }

    const radio = filter.radio;
    if (radio && camper.form !== radio) {
      return false;
    }

    return true;
  });
};
