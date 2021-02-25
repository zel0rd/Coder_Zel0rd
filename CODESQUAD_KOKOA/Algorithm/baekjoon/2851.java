package baekjoon;

import java.util.Scanner;

public class BJ_P2851_슈퍼마리오 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int sum = 0;
		for(int i = 0 ; i < 10;i++) {
			int score = sc.nextInt();
			if( Math.abs(100 - sum) >=  Math.abs(100 - sum - score) ) {
				sum += score;
			}else {
				break;
			}
		}
		sc.close();
		System.out.println(sum);
		
	}
}
