import { productosUmbria } from "../tempData/productos";

export function fetchData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productosUmbria)
        }, 2000)
    })
}

export function fetchDataById(id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productosUmbria.find(prod => prod.id === parseInt(id)))
        }, 2000)
        
    })
}