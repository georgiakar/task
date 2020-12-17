import { serverApi } from "./axiosHelpers";
import { ebiEndpoint } from "./endpoints";

export const getTermsByPageSize = (page, size) => serverApi(ebiEndpoint, "GET", "/ontologies/efo/terms", { params: { page: page, size: size } });