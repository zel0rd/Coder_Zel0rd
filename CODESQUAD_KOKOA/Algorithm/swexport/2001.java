package swexpert;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.stream.Stream;

public class SW_P2001_파리퇴치 {
	public static void main(String[] args) throws Exception {
		// 수행횟수 입력받기
		System.setIn(new FileInputStream("sw_input_P2001.txt"));
		Scanner sc = new Scanner(System.in);
		int times = sc.nextInt();
		sc.nextLine();
		
		// 수행횟수만큼 반복
		for(int time = 1; time <= times; time++) {
			
			// 맵 크기와 파리채 크기 입력 받기
			int[] inputs = Stream.of(sc.nextLine().split(" "))
					.mapToInt(Integer::parseInt)
					.toArray();
			
			int[][] Map = new int[inputs[0]][inputs[0]];
			for(int i = 0; i < inputs[0]; i++) {
				Map[i] = Stream.of(sc.nextLine().split(" "))
						.mapToInt(Integer::parseInt)
						.toArray();
			}
			
			// 돌면서 최대값 찾기
			int maxValue = 0;
			for(int i = 0; i < inputs[0] - inputs[1] + 1; i++) {
				for (int j = 0; j <inputs[0] - inputs[1] + 1; j++) {
					
					// 도는 중 파리채에 잡히는 값을 업데이트
					int temp = 0;
					for (int k = 0; k < inputs[1]; k++) {
						for (int l = 0; l < inputs[1]; l++) {
							temp += Map[i+k][j+l];
						}
					}
					if (temp > maxValue) {
						maxValue = temp;
					}
				}
			}
			
			System.out.println("#" + time + " " + maxValue);
			
		}
	}
}
