package D20210222;

import java.util.Scanner;

public class BJ_P13300 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		int VALIDCOUNT = sc.nextInt();
		int[] boy = new int[7];
		int[] girl = new int[7];
		
		for(int test = 1; test <= testCase; test++) {
			int sex = sc.nextInt();
			int G = sc.nextInt();
			if(sex == 0) {
				girl[G] += 1;
			}
			if(sex == 1) {
				boy[G] += 1;
			}
		}
		
		int result = 0;
		for(int i = 1; i < boy.length;i++ ) {
			result += boy[i] / VALIDCOUNT;
			if(boy[i] % VALIDCOUNT != 0) {
				result += 1;
			}
		}
		for(int i = 1; i < girl.length;i++ ) {

			result += girl[i] / VALIDCOUNT;
			if(girl[i] % VALIDCOUNT != 0) {
				result += 1;
			}
		}
		sc.close();
		System.out.println(result);
	}
}
