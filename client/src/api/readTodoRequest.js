const API_URL=`http://localhost:8080`
const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMjUzNTkzNX0.wVM1eZzNNFb3NdFJqmXvc0wp3YUcFmmlnVYxEaIJ8oU`
export default () => {
  return fetch(`${API_URL}/todos`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type":'application/json'
    },
    mode:'cors'
  })
    .then(response => response.json())
}