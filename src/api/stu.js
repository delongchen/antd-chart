import axiosInstance from "@/utils/request";

const API = {
  StuInfo: '/nb.json'
}

export function getInfo() {
  return axiosInstance({
    url: API.StuInfo,
    method: 'get',
    //data: parameter
  })
}
