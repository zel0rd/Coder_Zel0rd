import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

//[1,2,3,4,5,6,7,8,9]
//1 -> 2?
//2 -> 3?
//3 -> 4?
//[O,X,X,O,O,O,X,X,O]
//[1,0,0,3,2,1,0,0,1]

public class SW_P1861_정사각형방 {
	
	public static void main(String[] args) throws Exception{
		Scanner sc = new Scanner(System.in);
		int testCase = sc.nextInt();
//		sc.nextLine();
		
		for(int test=1; test<=testCase; test++) {
			int mapSize = sc.nextInt();
			sc.nextLine();
			
			int[][] map = new int[mapSize][mapSize];
			int[] result = new int[mapSize*mapSize];
			
			for(int i = 0 ; i < mapSize; i++) {
				map[i] = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			}
//			print(map);
//			System.out.println(Arrays.toString(result));
			// 사방탐색
			for (int i = 0; i < map.length; i++) {
				for (int j = 0; j < map.length; j++) {
					getSide(i,j,map,result);
				}
			}
			getResult(result, test);
		
			
			
		}
		
	}
	
	// 상하좌우
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};
	static void getSide(int i, int j, int[][] map, int[] result) {
//		System.out.println("i : " + i + "j" + j);
		for(int dIdx = 0; dIdx < 4; dIdx++) {
			int nx = i + dx[dIdx];
			int ny = j + dy[dIdx];
//			System.out.println(nx + " : "+ ny);
			if( nx < 0 || nx >= map.length || ny < 0 || ny >= map.length ) continue;
//			System.out.println(nx + " : "+ ny);
			if( map[i][j]+1 == map[nx][ny] ) {
//				System.out.println(map[i][j]);
				result[map[i][j]] = 1;
			}				
		}		
	}
	static void getResult(int [] result, int test) {
		int[] newResult = new int[result.length];
		
		for(int i = 0; i < result.length; i++) {
			int temp = i;
			int tempValue = 1;
			if(result[i] == 0) { continue; }
			while(temp <= result.length) {
				if(temp == result.length) {
					newResult[i] = tempValue;
					break;					
				}
				if(result[temp] == 1) {
					tempValue += 1;
					temp += 1;
				} else {
					newResult[i] = tempValue;
					break;
				}
			}
		}
//		System.out.println(Arrays.toString(newResult));
		
		int maxValue = 0;
		int maxIndex = 0;
		for(int i =0; i < newResult.length; i++) {
			if(newResult[i] > maxValue) {
				maxValue = newResult[i];
				maxIndex = i;
			}
		}
		
		System.out.println("#" + test + " " +maxIndex + " " + maxValue);
	}
	
	static void print(int[][] map) {
		for (int i = 0; i < map.length; i++) {
			for (int j = 0; j < map.length; j++) {
				System.out.print(map[i][j]);
			}
			System.out.println();
		}
	}
}
