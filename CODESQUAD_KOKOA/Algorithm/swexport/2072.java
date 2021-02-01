package swexpert;

import java.util.Scanner;

public class P2072 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();
		sc.nextLine();
		
		for(int test_case = 1; test_case <= T; test_case++) {
			int result = 0;
			String [] intArr = sc.nextLine().split(" ");
			for(String ele : intArr) {
				if(Integer.parseInt(ele) % 2 == 1) {
					result += Integer.parseInt(ele);
				}
			}
			
			System.out.println("#" + test_case + " " + result);
		}
	}
}
