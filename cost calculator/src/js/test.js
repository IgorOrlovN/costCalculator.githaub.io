let arrPrice = [
    [500,1000,2000],
    [500,1000,2000],
    [2000,1000,300],
];

let arrTime = [
    [1,3,5],
    [2,1,3],
    [2,2,1]
];

function calculator()
{
    let viewTime = 0;
    let desTime = 0;
    let adapTime = 0;
    if (prompt="1"){
        view = arrPrice[0][0];
        viewTime = arrTime[0][0];
        des = arrPrice[1][0];
        desTime = arrTime[1][0];
        adap = arrPrice[2][0];
        adapTime = arrTime[2][0];
    }
    else{}
    if (promt="2"){
        view = arrPrice[0][1];
        viewTime = arrTime[0][1];
        des = arrPrice[1][1];
        desTime = arrTime[1][1];
        adap = arrPrice[2][1];
        adapTime = arrTime[2][1];
    }
    else{}
        if (promt="3"){
        view = arrPrice[0][2];
        viewTime = arrTime[0][2];
        des = arrPrice[1][2];
        desTime = arrTime[1][2];
        adap = arrPrice[2][2];
        adapTime = arrTime[2][2];
    }
    else{}
    
    let price = view + des + adap;
    let time = viewTime + desTime + adapTime;
    console.log("Цена: " + price + "Сроки: " + time + " недели")
    
}

let view = prompt("Выберите тип сайта, для этого введите в поле соответствующие число \n 1 - Сайт-визитка \n 2 - Корпортаивный сайт \n 3 - Интернет-магазин");
let des = prompt("Выберите дизайн сайта, для этого введите в поле соответствующие число \n 1 - Рисованный \n 2 - Плоский \n 3 - Материальный");
let adap= prompt("Выберите адаптивность, для этого введите в поле соответствующие число \n 1 - Кроссплатформенный \n 2 - Смартфон \n 3 - Персональный компьютер");

alert(calculator());