import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /**  Get a list of all companies including search filters. */

  static async getAllCompanies(searchFilters = {}) {
    let res = await this.request('companies', searchFilters)
    return res.companies
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // obviously, you'll add a lot here ...

  /** Get a list of all jobs including search filters. */

  static async getAllJobs(searchFilters = {}) {
    let res = await this.request('jobs', searchFilters)
    return res.jobs
  }

  /** get details on a job by id */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`)
    return res.job
  }

  /** register a new user and recive token */

  static async register(userInfo) {
    let res = await this.request('auth/register', userInfo, "post")
    this.token = res.token
    return this.token
  }

  /** validates user login and recieves token */

  static async login(userInfo) {
    let res = await this.request('auth/token', userInfo, "post")
    this.token = res.token
    return this.token
  }

  static async getUser(username, localStorageToken){
    if(!this.token){
      this.token = localStorageToken
    }
    let res = await this.request(`users/${username}`)
    return res.user
  }

  static async updateUser(username, updatedUserInfo){
    let res = await this.request(`users/${username}`, updatedUserInfo, "patch")
    return res.user

  }

  static async applyToJob(username, id, data = {}){
    let res = await this.request(`users/${username}/jobs/${id}`, data, "post")
    return res.applied
  }
}

// for now, put token ("testuser" / "password" on class)
/* JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRlbW8gVXNlciIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njg5NzcwMDN9.hyzAYw6-DcQk6zDqZ-hABWCf0LdsH0y-tIdwlrpoTtQ" */

export default JoblyApi




