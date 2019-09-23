const baseUrl = 'http://localhost:3001'
const sushisUrl = baseUrl + '/sushis'

const get = url => fetch(url).then(resp => resp.json())

const getSushis = () => get(sushisUrl)

window.getSushis = getSushis

export default { getSushis }
