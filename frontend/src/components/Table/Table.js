import React, { useState, useEffect } from 'react';
import style from './Table.module.css';

const Table = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "http://localhost:4000/movies"; 

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                setMovies(data.movies); 

            } catch (e) {
                setError(e.message);
                console.error("Erro ao buscar filmes:", e);
            } finally {
                setLoading(false); 
            }
        };

        fetchMovies();
    }, []); 

    if (loading) {
        return <p className={style.loading}>Carregando filmes...</p>;
    }

    if (error) {
        return <p className={style.error}>Erro ao carregar dados: {error}</p>;
    }
    return (
        <div className={style.tableContainer}>
            <h2>Catálogo de Filmes</h2>
            <table className={style.movieTable}>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Ano</th>
                        <th>Gênero</th>
                        <th>Diretor</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie._id}> 
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.director}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;