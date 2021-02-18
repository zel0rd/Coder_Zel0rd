package baekjoon;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class BJ_P17070_파이프옮기기1 {
	static int MAPSIZE, result;
	static int[][] MAP;
//	static boolean canMoveX, canMoveY;
	
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("bj_input_p17070.txt"));
		Scanner sc = new Scanner(System.in);
		
		int times = 4;
		while(times > 0) {
			int MAPSIZE = sc.nextInt();
			sc.nextLine();
			
			MAP = new int[MAPSIZE][MAPSIZE];
			
			for (int i = 0; i < MAPSIZE; i++) {
				MAP[i] = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			}
			result = 0;
			movePipe(0,0,1);
			System.out.println(result);
			
			times -= 1;
		}
		
	}
	
	static void movePipe(int state, int x, int y) {

		// 종료
		if( x == MAP.length -1 && y == MAP.length - 1) {
			result += 1;
		}

		boolean canMoveX = (x + 1 < MAP.length) && (MAP[x+1][y] == 0) ? true : false;
		boolean canMoveY = (y + 1 < MAP.length) && (MAP[x][y+1] == 0) ? true : false;

		// 가로 : 0, 세로 : 1, 대각 : 2
		// 가로 이동
		if(canMoveY && state != 1) {
			movePipe(0, x, y+1);
		}
		// 세로 이동
		if(canMoveX && state != 0) {
			movePipe(1, x+1, y);
		}
		// 대각 이동
		if(canMoveX && canMoveY && MAP[x+1][y+1] == 0) {
			movePipe(2, x+1, y+1);
		}
	}
}
