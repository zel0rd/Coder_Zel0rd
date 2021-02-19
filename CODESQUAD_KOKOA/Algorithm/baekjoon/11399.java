package baekjoon;

import java.util.Arrays;
import java.util.Scanner;

public class OBJ_P11399_ATM {
	
	public static void main(String[] args) throws Exception{
		Scanner sc = new Scanner(System.in);
		sc.nextInt();
		sc.nextLine();
		
		int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
		
		Arrays.sort(inputs);
		int sum = 0;
		int temp = 0;
		for(int i : inputs) {
			temp += i;
			sum = sum + temp;
		}
		System.out.println(sum);
		sc.close();
	}
}

/*
입력 			temp	sum
1			1		1
1 2			3		4
1 2 3		6		10
1 2 3 3 	9		19
1 2 3 3 4 	13		32
*/