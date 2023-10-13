import {axiosConfig} from '../configuration/AxiosConfig'

    //Obtener todos los generos
    const obtenerDirector = () => {
        return axiosConfig.get('director/?estado=true', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    //crear un genero
    const crearDirector = (data) => {
      return axiosConfig.post('director', data,  {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  //Editar un genero
  const editarDirector = (tipoId, data) => {
    return axiosConfig.put('genero' +tipoId, data,  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

//Borrar generos
const borrarDirector = (directorId, data) => {
  return axiosConfig.delete('director/' +directorId, {},  {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

// obtener genero por id
const obtenerDirectorporID = (tipoId) => {
  return axiosConfig.get('genero/' +tipoId, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}


    export{
        obtenerDirector,
        crearDirector,
        editarDirector,
        obtenerDirectorporID,
        borrarDirector
    }