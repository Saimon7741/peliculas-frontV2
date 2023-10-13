import React from 'react';
import { useEffect, useState } from 'react';
import { crearDirector, obtenerDirector, borrarDirector } from '../../services/DirectorService';
import Title from '../ui/Title';
import Modal from './Modal';

export default function Director() {
  const [directores, setDirectores] = useState([]);
  const [director, setDirector] = useState({
    nombres: '',
    estado: '',
  });

  useEffect(() => {
    listarDirectores();
  }, []);

  const listarDirectores = async () => {
    try {
      const { data } = await obtenerDirector();
      setDirectores(data);
    } catch (e) {
      console.log(e);
    }
  }

  const guardar = async () => {
    try {
      const response = await crearDirector(director);
      console.log(response);
      clearForm();
      listarDirectores();
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    console.log(e.target);
    setDirector({
      ...director,
      [e.target.name]: e.target.value,
    });
  }

  const clearForm = () => {
    setDirector({
      nombres: '',
      estado: '',
    });
  }

  const borrarDirectorPorId = async (e) => {
    try {
      const response = await borrarDirector(e);
      setDirectores(response);
      listarDirectores();
    } catch (e) {
      console.log(e);
    }
  }

  const borrarPorId = (directorId) => {
    borrarDirectorPorId(directorId);
  }

  return (
    <>
      <Title title={'Directores'} />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Director</th>
              <th scope="col">Estado</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(directores) && directores.length > 0 ? (
              directores.map((director, index) => (
                <tr key={director._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{director.nombres}</td>
                  <td>{director.estado ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      id={director._id}
                      onClick={() => borrarPorId(director._id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <p>Cargando tabla.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Nuevo director
        </button>
        <Modal director={director} change={handleChange} guardar={guardar} clearForm={clearForm} />
      </div>
    </>
  );
}

