import BaseService from './base.service';

export default class NasaService extends BaseService {
  /**
   * Base URL from N.A.S.A.
   */
  baseURL() {
    return 'https://images-api.nasa.gov/';
  }

  /**
   * Search Endpoint
   *
   * @param {String} q
   */
  search(q = '') {
    return this.get('search', { q });
  }
}
