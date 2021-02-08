package swexpert;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class SW_P9229_한빈이와SPOTMART {
	public static void main(String[] args) throws Exception{
		System.setIn(new FileInputStream("SW_INPUT_P9229.txt"));
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		sc.nextLine();
		
		for(int test = 1; test <= testCase; test++) {
			int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			int[] snacks = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			
			int bestGap = inputs[1];
			for (int i = 0; i < snacks.length; i++) {
				for (int j = 0; j < snacks.length; j++) {
					if(i < j) {
						if(bestGap > inputs[1] - snacks[i] - snacks[j] &&  inputs[1] - snacks[i] - snacks[j] >= 0) {
							bestGap = inputs[1] - snacks[i] - snacks[j];
						}
					}
				}
			}
			int result = 0;
			if(bestGap == inputs[1]) {
				result = -1;
			}else {
				result = inputs[1] - bestGap;
			}
			System.out.println("#" + test +  " " + result);
		}
	}
}
