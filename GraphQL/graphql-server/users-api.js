import { RESTDataSource } from '@apollo/datasource-rest';

export default class UsersAPI extends RESTDataSource {
  baseURL = 'https://jsonplaceholder.typicode.com/';

  async getUser() {
    return this.get(`users`);
  }

  /* Ejemplo si la query fuera a películas
  
  async getMostViewedMovies(limit = '10') {
    const data = await this.get('movies', {
      params: {
        per_page: limit.toString(), // all params entries should be strings,
        order_by: 'most_viewed',
      },
    });
    return data.results;
  } */
}
