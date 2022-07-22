import apidata from '../../../components/data';

export default function handler(req, res) {
    const {
        query: { params: [id, item] }
    } = req;

    let exId;
    (apidata.length - 1 < id || id < 0) ? exId = 0 : exId = id;

    const result = { id: exId, item: apidata[exId][item] }
    res.json(result);
}