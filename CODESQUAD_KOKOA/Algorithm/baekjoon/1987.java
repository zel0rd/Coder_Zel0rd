

import java.io.FileInputStream;
import java.util.Scanner;

public class BJ_P1987_알파벳 {
	
	static int ans = 0;
	static int row, col;
	static boolean[] visit = new boolean[26];
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};
	static String[][] MAP;
	
	public static void main(String[] args) throws Exception {
		
		System.setIn(new FileInputStream("bj_input_p1987.txt"));
		Scanner sc = new Scanner(System.in);
		
		row = sc.nextInt();
		col = sc.nextInt();
		sc.nextLine();
		
		MAP = new String[row][col];
		for(int i = 0; i < row; i++) {
			MAP[i] = sc.nextLine().split("");
		}
		
		dfs(0, 0, 0);
		System.out.println(ans);
	}
	
	public static void dfs(int x, int y, int count) {
		if( visit[ (MAP[x][y].charAt(0) - 65) ]) {
			ans = Math.max(ans, count);
			return;
		}else {
			visit[ (MAP[x][y].charAt(0) - 65) ] = true;
			
			for (int i = 0; i < 4; i++) {
				int cx = x + dx[i];
				int cy = y + dy[i];
				if (cx >= 0 && cy >= 0 && cx < row && cy < col) {
					dfs(cx, cy, count + 1);
				}

			}
			visit[ (MAP[x][y].charAt(0) - 65) ] = false;
		}
	}

}
