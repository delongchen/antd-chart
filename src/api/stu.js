import axiosInstance from "@/utils/request";

const API = {
  StuInfo: '/info'
}

export function getInfo(parameter) {
  return axiosInstance({
    url: API.StuInfo,
    method: 'post',
    data: parameter
  })
}
