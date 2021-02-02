import java.util.Scanner;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Arrays;

class Solution
{
	public static void main(String args[]) throws Exception{
		Scanner sc = new Scanner(System.in);
        
		for(int tc = 1; tc <= 10 ; tc++) {
			
			// 입력받기
			sc.nextInt();
			sc.nextLine();
			
			int[][] intArr = new int[100][100];
			for(int size = 0; size <= 99; size++) {
				String[] strArr = sc.nextLine().split(" ");
				intArr[size] = Arrays.stream(strArr).mapToInt(Integer::parseInt).toArray();
			}
			
			// 출력해보기
//			printMap(intArr);
			
			// 시작지점 찾기
			int StartPoint = 0;
			for(int size = 0; size <= 99; size++) {
				if(intArr[99][size] == 2) {
					StartPoint = size;
					intArr[99][StartPoint] = 3;
				}
			}
			
			// 계속 올라가기
			for(int size = 98; size >= 0; size--) {

				if((StartPoint+1) < 100) {
//					System.out.println(StartPoint+ " : " + intArr[size][StartPoint - 1] + " : " + intArr[size][StartPoint + 1]);
					if(intArr[size][StartPoint+1] == 1) {
						while(intArr[size][StartPoint+1] == 1) {
							StartPoint += 1;
							intArr[size][StartPoint] = 3;
							if(StartPoint == 99) break;
						}
					}
				}

				if((StartPoint-1) >= 0) {
					if(intArr[size][StartPoint-1] == 1) {
						while(intArr[size][StartPoint-1] == 1) {
							StartPoint -= 1;
							intArr[size][StartPoint] = 3;
							if(StartPoint == 0) break;
						}
					}
				}

			}
//			printMap(intArr);
			System.out.println("#" + tc + " " + StartPoint);
		}
		
	}
	public static void printMap(int[][] intArr) {
		for(int i = 0; i <= 99; i++) {
			for(int j = 0; j <= 99; j++) {
				System.out.print(intArr[i][j]);
			}
			System.out.println();
		}
	}
}