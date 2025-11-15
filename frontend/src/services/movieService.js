const API_BASE_URL = 'http://localhost:3000';

export const movieService = {
    async getMovies() {
        try {
            const response = await fetch(`${API_BASE_URL}/movies`);
            if (!response.ok) {
                throw new Error('Erro ao buscar os filmes');
            }
            const data = await response.json();
            return data.movies;
} catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
}
    }
};

export default movieService;