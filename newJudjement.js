
let points = [60,60,60,60,60,60,60,60,60,59,60,60,60,60,60,60,60,60,60,60,60,60,60];

// 成績判定する関数
function get_achievement(points){

    let sum = 0;
    let number = points.length;
    
    for(let i=0; i<number; i++){
        sum = sum + points[i];
    }

    if(sum >= 100*number*0.8){
        return "A";
    }else if(sum >= 100*number*0.6){
        return "B";
    }else if(sum >= 100*number*0.4){
        return "C";
    }else{
        return "D";
    }
};


// 合否判定する関数
function get_pass_or_failure(points){
    
    let number = points.length;
    let judge = "合格";
    for(let i=0; i<number; i++){
        if (points[i] < 60){
            judge = "不合格";
            break;
        }
    }
    return judge;
};


function judgement(points){
    let achievement = get_achievement(points);
    let pass_or_failure = get_pass_or_failure(points);
    return `あなたの成績は${achievement}です。${pass_or_failure}です!`;
}

console.log(judgement(points));