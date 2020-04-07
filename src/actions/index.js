// TODO: add and export your own actions

export const fetchCars = (garage) => {
  return fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'FETCH_CARS',
        payload: data
      };
    });
};

export const fetchCar = (id) => {
  return fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'FETCH_CAR',
        payload: data
      };
    });
};

export const deleteCar = (id, callback) => {
  return fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())
    .then(callback);
};


export const createCar = (car, callback) => {
  return fetch(`https://wagon-garage-api.herokuapp.com/charles/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback);
};
