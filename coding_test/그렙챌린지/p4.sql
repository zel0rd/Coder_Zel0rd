 -- 코드를 입력하세요

SELECT 
    EMPLOYEE_ID AS EMPLOYEE_ID,
    CASE COUNT(*) 
        WHEN 1 THEN '일반 사원' 
        WHEN 2 THEN '우수 사원'
        WHEN 3 THEN '우수 사원'
        ELSE '최우수 사원' END AS '분류상태' ,
    COUNT(*) AS COUNT
FROM 
    SELLINGS 
GROUP BY 
EMPLOYEE_ID;