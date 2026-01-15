const calAverage = (firstPoint, secondPonit, thirtpoint) =>{
    return (firstPoint+secondPonit+thirtpoint) / 3;
}

const pointDolphins_01 = calAverage(44,23,71);
const pointDolphins_02= calAverage(85,54,41);
const pointKoalas_02 = calAverage(109,95,123);
const pointKoalas_01 = calAverage(65,54,49)
const checkWinner = (pointDolphins, pointKoalas) => {
    if(pointDolphins > pointKoalas && pointDolphins >= 2*pointKoalas){
        return 'Dolphins team win';
    }else if(pointKoalas > pointDolphins && pointKoalas >= 2*pointDolphins){
        return 'Koalas team win, Dolphins team lose';
    }else return `no team win`
}

console.log(`Data 1 : ${checkWinner(pointDolphins_01,pointKoalas_01)} (${pointDolphins_01} vs ${pointKoalas_01})`)
console.log(`Data 2 : ${checkWinner(pointDolphins_02,pointKoalas_02)} (${pointDolphins_01} vs ${pointKoalas_01})`)