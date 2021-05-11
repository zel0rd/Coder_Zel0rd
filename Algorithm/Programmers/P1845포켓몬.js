// https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
    const getCount = parseInt(nums.length / 2)
    const setNums = new Set(nums);
    return Math.min(getCount, setNums.size)
}