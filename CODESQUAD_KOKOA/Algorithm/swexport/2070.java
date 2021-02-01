package swexpert;

import java.util.Arrays;
import java.util.Scanner;

public class P2070 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();
		sc.nextLine();
		
		for(int test_case = 1; test_case <= T; test_case++) {
			String result;
			String[] s_arr = sc.nextLine().split(" ");
			int [] i_arr = Arrays.stream(s_arr).mapToInt(Integer::parseInt).toArray();
			result = (i_arr[0] > i_arr[1]) ? ">" : (i_arr[0] == i_arr[1]) ? "=" : "<";
			System.out.println("#" + test_case + " " + result);
		}
	}
}
