package swexpert;

import java.util.Scanner;

public class P1289 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T;
		T=sc.nextInt();
		sc.nextLine();
		/*
		   여러 개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
		*/

		for(int test_case = 1; test_case <= T; test_case++)
		{
			String[] arrCh = sc.nextLine().split("");
			String init = "0";
			int result = 0;
			for(String ele : arrCh) {
				if(!init.equals(ele)) {
					init = ele;
					result += 1;
				}
			}
			System.out.println("#" + Integer.toString(test_case) + " " + Integer.toString(result));
			
		}
	}
}
