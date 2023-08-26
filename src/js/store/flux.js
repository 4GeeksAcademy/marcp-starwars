const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favs: [],
            characters: [],
            vehicles: [],
            planets: [],
        },
        actions: {
            addRemoveFav: (newFav) => {
                const { favs } = getStore();
                if (!favs.includes(newFav)) {
                    setStore({ favs: [...favs, newFav] });
                } else {
                    const newList = favs.filter((el) => el !== newFav);
                    setStore({ favs: newList });
                }
            },
            getCharacterData: async () => {
                const resp = await fetch("https://www.swapi.tech/api/people");
                const data = await resp.json();
                setStore({ characters: data.results });
                console.log(data.results);
            },
            getCharacterDetails: async (uid) => {
                const resp = await fetch("https://www.swapi.tech/api/people/" + uid);
                const data = await resp.json();
                setStore({ characterDetails: data.results });
                console.log(data.result);
            },
            getVehiclesData: async () => {
                const resp = await fetch("https://www.swapi.tech/api/starships");
                const data = await resp.json();
                setStore({ vehicles: data.results });
                console.log(data.results);
            },
            getVehicleDetails: async (uid) => {
                const resp = await fetch("https://www.swapi.tech/api/starships/" + uid);
                const data = await resp.json();
                setStore({ vehicleDetails: data });
                console.log(data);
            },
            getPlanetsData: async () => {
                const resp = await fetch("https://www.swapi.tech/api/planets");
                const data = await resp.json();
                setStore({ planets: data.results });
                console.log(data.results);
            },
        },
    };
};

export default getState;