import p from "axios";
export function fetchBannerBoxData() {
  const apiURL = "http://127.0.0.1:18000/v1/search-data/data";
  return p.get(apiURL, { timeout: 10000 });
}
