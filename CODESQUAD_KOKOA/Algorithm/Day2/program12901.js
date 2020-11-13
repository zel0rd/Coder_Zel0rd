function solution(a, b){
    const dayWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const countMonth = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    
    let countDays = countMonth.filter((v, i) => i < a).reduce((acc, val) => acc + val) + b

    return dayWeek[(countDays + 4) % 7]
}