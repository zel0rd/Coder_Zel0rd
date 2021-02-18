package baekjoon;

import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

/*
 * 가장 왼쪽부터 카운팅한다고 생각
 * 
 * 8방위 기준으로 오목이 되는 경우는 4가지 모양
 * 4가지 모양의 각 왼쪽 위를 기준으로 생각하면
 * 
 * 1. 대각 오른쪽위
 * 2. 오른쪽
 * 3. 대각 오른쪽아래
 * 4. 아래
 * 
 * 이렇게 네가지 방향을 가지고 탐색
 * 
 */

public class BJ_P2615_오목 {
	
	static int[][] MAP = new int[19][19];
	public static void main(String[] args) throws Exception{
		System.setIn(new FileInputStream("bj_input_p2615.txt"));
		Scanner sc = new Scanner(System.in);
		
		for(int i = 0; i < MAP.length; i++) {
			MAP[i] = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
		}
		
		boolean flag = false;
		for(int i = 0; i < MAP.length; i++) {
			for(int j = 0; j < MAP.length; j++) {
				if( checkMap(MAP[i][j], i, j) ) {
					flag = true;
					System.out.println( MAP[i][j] );
					System.out.println( (i+1) + " " + (j+1) );
				}
			}
		}
		if(!flag) {
			System.out.println("0");
		}
		
		sc.close();
	}
	
	
	static boolean checkMap(int color, int x, int y) {
		// color가 1 또는 2인 경우만 확인
		if(color == 1 || color == 2) {
			// 1번 방향  5개 체크
			if(x - 4 >= 0 && y + 4 < MAP.length) {
				boolean Flag = true;
				for(int i = 0; i < 5; i++) {
					if(MAP[x-i][y+i] != MAP[x][y]) Flag = false;
				}
				
				// 이전 체크
				if( x + 1 < MAP.length && y - 1 >= 0) {
					if( MAP[x+1][y-1] == MAP[x][y] ) Flag = false;
				}
					
				// 이후 체크
				if( x - 5 >= 0 && y + 5 < MAP.length) {
					if( MAP[x-5][y+5] == MAP[x][y] ) Flag = false;
				}
				
				if(Flag) return true;
			}
			
			// 2번 방향  5개 체크
			if(y + 4 < MAP.length) {
				boolean Flag = true;
				for(int i = 0; i < 5; i++) {
					if(MAP[x][y+i] != MAP[x][y]) Flag = false;
				}
				
				// 이전 체크
				if( y - 1 >= 0) {
					if( MAP[x][y-1] == MAP[x][y] ) Flag = false;
				}
					
				// 이후 체크
				if( y + 5  < MAP.length) {
					if( MAP[x][y+5] == MAP[x][y] ) Flag = false;
				}
				
				if(Flag) return true;
				
			}
			
			// 3번 방향  5개 체크
			if(x + 4 < MAP.length && y + 4 < MAP.length) {
				boolean Flag = true;
				for(int i = 0; i < 5; i++) {
					if(MAP[x+i][y+i] != MAP[x][y]) Flag = false;
				}
				// 이전 체크
				if( x - 1 >= 0 && y - 1 >= 0) {
					if( MAP[x-1][y-1] == MAP[x][y] ) Flag = false;
				}
					
				// 이후 체크
				if( x + 5 < MAP.length && y + 5 < MAP.length) {
					if( MAP[x+5][y+5] == MAP[x][y] ) Flag = false;
				}

				if(Flag) return true;
			}
			
			// 4번 방향  5개 체크
			if(x + 4 < MAP.length) {
				boolean Flag = true;
				for(int i = 0; i < 5; i++) {
					if(MAP[x+i][y] != MAP[x][y]) Flag = false;
				}
				// 이전 체크
				if( x - 1 >= 0) {
					if( MAP[x-1][y] == MAP[x][y] ) Flag = false;
				}
					
				// 이후 체크
				if( x + 5 < MAP.length) {
					if( MAP[x+5][y] == MAP[x][y] ) Flag = false;
				}
				
				if(Flag) return true;
				
			}
		}
		return false;
	}
	
}
