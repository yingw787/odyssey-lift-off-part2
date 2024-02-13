import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  // Note: Be sure that your TrackAPI class' baseURL value ends with a /. This
  // will allow our helper class to make requests and append new paths to the
  // baseURL without any errors.
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }
}
