import axios from "axios";

class ProductService {
  serverUrl = "http://fsdi.azurewebsites.net/api";

  //logic to retrieve data from backend
  async getProducts() {
    // ajax GET request to get data. "Await" has to be inside Asynchronus function 'async'
    const resp = await axios.get(this.serverUrl + "/products");
    console.log(resp);
    return resp.data;
  }
}

export default ProductService;
