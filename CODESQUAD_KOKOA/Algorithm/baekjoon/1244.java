package baekjoon;

import java.util.Arrays;
import java.util.Scanner;

public class P1244 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int Length = sc.nextInt();
		sc.nextLine();
		
		String[] strSwitch = sc.nextLine().split(" ");
		int[] intSwitch = Arrays.stream(strSwitch).mapToInt(Integer::parseInt).toArray();
		
		
		int T = sc.nextInt();
		sc.nextLine();
		
		for(int test_case = 1; test_case <= T; test_case++) {
			String[] strTrial = sc.nextLine().split(" ");
			int[] intTrial = Arrays.stream(strTrial).mapToInt(Integer::parseInt).toArray();

			// 1 남학생일때
			if(intTrial[0] == 1) {
				int getNumber = intTrial[1];
				for(int i = getNumber-1; i < Length; i += getNumber) {
					intSwitch[i] = intSwitch[i] == 0 ? 1 : 0;
				}
				
			}
			
			// 2 여학생일때
			if(intTrial[0] == 2) {
				int GetNumber = intTrial[1];
				intSwitch[GetNumber-1] = intSwitch[GetNumber-1] == 0 ? 1 : 0;
				for(int i = 1; i<Length/2; i++) {
					if(GetNumber - 1 - i >= 0 && GetNumber - 1 + i < Length) {
						if( intSwitch[GetNumber -1 - i] == intSwitch[GetNumber -1 + i] ) { 
							intSwitch[GetNumber -1 - i] = intSwitch[GetNumber -1 - i] == 0 ? 1 : 0;
							intSwitch[GetNumber -1 + i] = intSwitch[GetNumber -1 + i] == 0 ? 1 : 0;
						} else {
							break;
						}
					}
				}
			}
		}
		for (int j = 1; j < Length+1; j++) {
			System.out.print(intSwitch[j-1] + " ");
			if (j % 20 == 0)
				System.out.println();
		}
	}
}
