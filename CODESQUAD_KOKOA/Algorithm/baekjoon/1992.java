

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class BJ_P1992_쿼드트리 {
	
	static int N, M;
	static int[][] Map;
	public static void main(String[] args) throws Exception{
		System.setIn(new FileInputStream("input_bj_p1992.txt"));
		Scanner sc = new Scanner(System.in);
		
		N = sc.nextInt();
		Map = new int[N][N];
		
		sc.nextLine();
		for(int i = 0; i < N; i++) {
			Map[i] = Arrays.stream(sc.nextLine().split("")).mapToInt(Integer::parseInt).toArray();
		}
		
//		printMap(Map);
		
		pipe(0,0,N);
		sc.close();
		
	}
	public static void printMap(int[][] Map) {
		for(int[] row : Map) {
			for(int val : row) {
				System.out.print(val + " ");
			}
			System.out.println();
		}
	}
	public static boolean compress(int x, int y, int N) {
		int std = Map[x][y];
		for(int i = x; i < x + N; i++) {
			for(int j = y; j < y + N; j++) {
				if(std != Map[i][j]) {
					return false;
				}
			}
		}
		M = std;
		return true;
	}
	public static void pipe(int x, int y, int N) {
		if(compress(x,y,N)) {
			System.out.print(M);
		}else {
			System.out.print("(");
			int s = N / 2;
			for(int i = 0; i < 2; i++) {
				for(int j = 0; j < 2; j++) {
					pipe(x + s * i, y + s * j , s);
				}
			}
			System.out.print(")");
		}
	}
}
