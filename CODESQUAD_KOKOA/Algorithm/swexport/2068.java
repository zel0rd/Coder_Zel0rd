package swexpert;

import java.util.Arrays;
import java.util.Scanner;

public class P2068 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();
		sc.nextLine();
		
		for(int test_case = 1; test_case <= T; test_case++) {
			int result = 0;
			String[] s_arr = sc.nextLine().split(" ");
			int [] i_arr = Arrays.stream(s_arr).mapToInt(Integer::parseInt).toArray();
			for(int i : i_arr) {
				if(i > result) {
					result = i;
				}
			}
			System.out.println("#" + test_case + " " + result);
		}
	}
}
