function solution(skill, skill_trees) {
    var answer = 0;
    
    const skill_orders = skill_trees.map(function(skill_tree) {
        let temp_arr = ''
        skill_tree.split('').map(function (v) {
            if(skill.includes(v)){
                temp_arr += v
            }
        })
        return temp_arr
    })
    
    skill_orders.filter((x) => {
        if(skill.indexOf(x) === 0){
            answer += 1
        }
    })
    
    return answer;
}