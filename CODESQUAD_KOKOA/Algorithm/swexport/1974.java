package swexpert;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class P1974_스도쿠검증 {
	public static void main(String[] args) throws Exception{
		System.setIn(new FileInputStream("sw_input_p1974.txt"));
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		sc.nextLine();

		int[][] sudocu = new int[9][9];
		
		for(int test = 1; test <= testCase; test++) {
			
			for(int i = 0; i < 9; i++) {
				sudocu[i] = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			}
			
			
			boolean result = rowChecker(sudocu) & colChecker(sudocu) &  squareChecker(sudocu);
			if(result == true) {
				System.out.println("#"+test+" 1");
			}else {
				System.out.println("#"+test+" 0");
			}
//			
		}
	}
	
	public static boolean rowChecker(int [][] sudocu) {
		for (int i = 0; i < sudocu.length; i++) {
			int[] checker = {1,2,3,4,5,6,7,8,9};
			for (int j = 0; j < checker.length; j++) {
				for (int k = 0; k < checker.length; k++) {
					if (checker[k] == sudocu[i][j]) {
						checker[k] = -1;
					}
				}
			}
			
			for (int k = 0; k < checker.length; k++) {
				if (checker[k] != -1) {
					return false;
				}
			}
		}
		return true;
	}
	
	public static boolean colChecker(int [][] sudocu) {
		for (int i = 0; i < sudocu.length; i++) {
			int[] checker = {1,2,3,4,5,6,7,8,9};
			for (int j = 0; j < checker.length; j++) {
				for (int k = 0; k < checker.length; k++) {
					if (checker[k] == sudocu[j][i]) {
						checker[k] = -1;
					}
				}
			}
			
			for (int k = 0; k < checker.length; k++) {
				if (checker[k] != -1) {
					return false;
				}
			}
		}
		return true;
	}
	
	public static boolean squareChecker(int [][] sudocu) {

		int[] deltaX = {0,3,6};
		int[] deltaY = {0,3,6};
		for(int x : deltaX) {
			for(int y: deltaY) { 
				int[] checker = {1,2,3,4,5,6,7,8,9};
				for (int i = 0; i < 3; i++) {
					for (int j = 0; j < 3; j++) {
						
						for (int k = 0; k < checker.length; k++) {
							if (checker[k] == sudocu[i+x][j+y]) {
								checker[k] = -1;
							}
						}
						
					}
				}
				for (int k = 0; k < checker.length; k++) {
					if (checker[k] != -1) {
						return false;
					}
				}
			}
		}
		
		return true;
	}
}
