package swexpert;

import java.util.Scanner;

public class P2071 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();
		sc.nextLine();
		
		for(int test_case = 1; test_case <= T; test_case++) {
			double sum = 0;
			String [] intArr = sc.nextLine().split(" ");
			for(String ele : intArr) {
				sum += Integer.parseInt(ele);
			}
			
			double ave = sum / intArr.length;
			
			System.out.println("#" + test_case + " " + Math.round(ave));
		}
	}
}
