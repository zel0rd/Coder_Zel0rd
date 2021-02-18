package baekjoon;

import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Scanner;

public class BJ_P16637_괄호추가하기 {
	static int max, temp;
	static ArrayList<Integer> number;
	static ArrayList<String> operator;
	
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("bj_input_p16637.txt"));
		Scanner sc = new Scanner(System.in);
		
		int testCase = 6;
		while(testCase > 0) {
			
//			 초기화
			max = 0;
			number = new ArrayList<Integer>();
			operator = new ArrayList<String>();
			
			sc.nextInt();
			sc.nextLine();
	
			int odd = 0;
			for(String a : sc.nextLine().split("")) {
				if(odd % 2 == 0) {
					number.add(Integer.parseInt(a));
				} else {
					operator.add(a);
				}
				odd += 1;
			}
			dfs(0,number.get(0));
			System.out.println(max);
			testCase--;
		}
		sc.close();
	}
	
	public static void dfs(int now, int sum) {
        if(now>=operator.size()) {
            max = Math.max(max, sum);
            return;
        }
        // 1. 괄호 안치고 진행하기
        int one = cal(now, sum, number.get(now+1));
        dfs(now+1, one);
        
        // 2. 괄호 치고 진행하기
        if(now+1 < operator.size()) { // 인덱스 범위 오류를 제거하기 위해
            int two = cal (now+1, number.get(now+1), number.get(now+2));
            int result = cal (now, sum, two);
            dfs(now+2, result);
        }
   }
    public static int cal(int op_idx,int a, int b) {
    	if(operator.get(op_idx).equals("+")) return a+b;
    	if(operator.get(op_idx).equals("-")) return a-b;
    	if(operator.get(op_idx).equals("*")) return a*b;
        return 1;
    }
}