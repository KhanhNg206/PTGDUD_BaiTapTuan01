const calAverage = (firstPoint, secondPonit, thirtpoint) =>{
    return (firstPoint+secondPonit+thirtpoint) / 3;
}

const pointDolphins_1 = calAverage(96,108,89);
const pointDolphins_02_03 = calAverage(97,112,101);
const pointKoalas_02 = calAverage(109,95,123);
const pointKoalas_03 = calAverage(109,95,106);
const pointKoalas_01 = calAverage(88,91,110)

const checkWinner = (pointDolphins, pointKoalas) => {
    if(pointDolphins > pointKoalas && pointDolphins >= 100){
        return 'Dolphins team win, Koalas team lose';
    }else if(pointKoalas > pointDolphins && pointKoalas >= 100){
        return 'Koalas team win, Dolphins team lose';
    } else if( pointDolphins == pointKoalas && pointDolphins >= 100){
        return 'Koalas team and Dolphins team win';
    }else return `no team win`
}

console.log(`Data 1 : ${checkWinner(pointDolphins_1,pointKoalas_01)}`)
console.log(`Bonus 1 : ${checkWinner(pointDolphins_02_03,pointKoalas_02)}`)
console.log(`Bonus 2 : ${checkWinner(pointDolphins_02_03,pointKoalas_03)}`)