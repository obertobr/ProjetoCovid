import axios from 'axios'

const token = "b8075c2278f4fbd8c647965245d83431fcafc758"

function Api(estado, data = "") {
    var last = "False"
    if (data == "") {
        last = "True"
    }
    axios.get(`https://api.brasil.io/v1/dataset/covid19/caso/data/?state=${estado}&is_last=${last}&place_type=state&date=${data}`, {
        headers: {
            Authorization: 'Token ' + token
        }
    })
        .then(res => {
            return(res.data.results[0]);
            //return("test");
        })
}

export default Api;
