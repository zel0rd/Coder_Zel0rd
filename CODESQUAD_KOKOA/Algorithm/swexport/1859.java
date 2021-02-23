package swexpert;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class SW_P1859_백만장자프로젝트 {
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("sw_input_p1859.txt"));
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		
		for(int test = 1; test <= testCase; test++) {
			int size = sc.nextInt();
			sc.nextLine();
			
			int[] inputs = new int[size];
			inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			
			long result = 0;
			int max = 0;
			for(int i = size-1; i >= 0; i-- ) {
                if(max > inputs[i] ) {
					result += max - inputs[i];
				}else {
					max = inputs[i];
				}
			}
			System.out.println("#" + test + " " + result);
		}
	}
}
