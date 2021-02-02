package swexpert;

import java.util.Arrays;
import java.util.Scanner;

public class P1208 {

	// 조건
	// 가로는 항상  100
	// 높이는 1이상 ~ 100이하
	// 덤프횟수는  1이상 ~ 1000이하
	
	// 할일
	// 덤프횟수 안에
	// 	최고점 높이 찾기
	// 	최저점 높이 찾기
	// 	최고점에서 최저점으로 옮기기
	// 	최고점 - 최저점 높이 찾기
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		// 테스트 케이스 10회
		for (int testCase = 1; testCase <= 10; testCase++) {
			
			// Dumps를 받아서 해당 횟수만큼 실행
			int Dumps = sc.nextInt();
			sc.nextLine();

			String[] Line = sc.nextLine().split(" ");
			int [] arr = Arrays.stream(Line).mapToInt(Integer::parseInt).toArray();
			
			for(int dump = 1; dump <= Dumps; dump++) {
				if(arr[getHighIndex(arr)] - arr[getLowIndex(arr)] > 1) {
					arr[getHighIndex(arr)] -= 1;
					arr[getLowIndex(arr)] += 1;
				} else {
					break;
				}
				
			}
			System.out.println("#" + testCase + " " + (arr[getHighIndex(arr)] - arr[getLowIndex(arr)]));
		}
		
	}
	
	public static int getHighIndex(int[] arr) {
		int index = 0;
		int maxValue = 0;
		for (int j = 0; j < arr.length; j++) {
			if(arr[j] > maxValue) {
				index = j;
				maxValue = arr[j];
			}
		}
		return index;
	}
	public static int getLowIndex(int[] arr) {
		int index = 0;
		int minValue = 100;
		for (int j = 0; j < arr.length; j++) {
			if(arr[j] < minValue) {
				index = j;
				minValue = arr[j];
			}
		}
		return index;
	}

}
