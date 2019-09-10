import {takeLatest, call, all, put} from 'redux-saga/effects';
import axios from 'axios';

const URL = `https://localhost:8080/`

function apiGet(action){
    return axios.get(`${action.url || URL}`)
}

function separateInGroups(images){
    let pattern = [1, 2];
    let imagesQty = images.length;
    let imagesPerGroup = pattern.reduce((acc, cur) => acc + cur);
    let groups = Math.floor(imagesQty / imagesPerGroup);

    let curImg = 0;
    let response = [];

    for(let i = 0; i < groups; i++){
        pattern.map( row => {
            let linha = [];
            for(let j = 0; j < row; j++){
                linha.push(images[curImg++]);
            }
            
            response.push({size: row, linha});
        })
    }

    return response;

}

function* fetchMainData(action){
    try{
        let response = yield call(apiGet, {
                    url: `https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=826541211dde43c0a633a4cca83e01fc`,
        });

        let images = [];
        response.data.articles.map(hit => {
            images.push(hit)
        })

        images = separateInGroups(images);

        
        yield put({type: 'JOBS_FETCH_SUCCESS', payload: {data: images} });
    } catch(err){
        yield put({type: 'JOBS_FETCH_ERROR', payload: { message: err }})
    }
}

function* mySaga(){
    yield all([
        takeLatest('REQUEST_JOBS', fetchMainData),
    ]);
}

export default mySaga;