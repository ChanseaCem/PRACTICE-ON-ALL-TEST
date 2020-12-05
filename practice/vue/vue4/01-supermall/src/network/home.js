import {
  // request,
  request2
} from "@/network/request"

export function getHomelistitems(type,page) {
  return request2({
    "url": "/app/mock/247039/homelistitem",
    "method": "POST",
    "data": {
      "type": type,
      "page": page
    }
  })
}
