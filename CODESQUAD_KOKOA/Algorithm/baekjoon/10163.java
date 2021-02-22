package D20210222;

import java.util.Arrays;
import java.util.Scanner;

public class BJ_P10163 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		sc.nextLine();
		int[][] Map = new int[101][101];
		
		for(int test = 1; test <= testCase; test++) {
			int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			int x1 = inputs[0];
			int y1 = inputs[1];
			int x2 = x1 + inputs[2] - 1;
			int y2 = y1 + inputs[3] - 1;
			
			for(int i = x1; i <= x2; i++) {
				for(int j = y1; j<= y2; j++) {
					Map[i][j] = test;
				}
			}	
		}
		
		for(int test = 1; test <= testCase; test++) {
			
			int temp = 0;
			for(int i = 0; i < Map.length;i++) {
				for(int j = 0; j < Map.length;j++) {
					if(Map[i][j] == test) {
						temp += 1;
					}
				}
			}
			System.out.println(temp);
			
		}
	}
}
