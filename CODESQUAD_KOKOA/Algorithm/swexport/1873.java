import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/*
   사용하는 클래스명이 Solution 이어야 하므로, 가급적 Solution.java 를 사용할 것을 권장합니다.
   이러한 상황에서도 동일하게 java Solution 명령으로 프로그램을 수행해볼 수 있습니다.
 */
class Solution
{
	public static void main(String args[]) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// testCase
		int testCase = Integer.parseInt(br.readLine());
//		System.out.println(testCase);
		
		for(int test = 1; test <= testCase; test++) {
			
			// 맵 사이즈 입력
			String str = br.readLine();
			StringTokenizer st = new StringTokenizer(str);
	
			int rows = Integer.parseInt(st.nextToken());
			int cols = Integer.parseInt(st.nextToken());
//			System.out.println(rows + cols);
			
			// 맵 입력
			String[][] Map = new String[rows][cols];
			for(int row = 0; row < rows; row++) {
				Map[row] = br.readLine().split("");
			}
//			printMap(Map);
	
			// 수행횟수 입력
			int performCount = Integer.parseInt(br.readLine());
			
			// 수행 입력
			String[] performs = new String[performCount];
			performs = br.readLine().split("");
			
			// 수행 입력 확인
//			for(String perform : performs) {
//				System.out.print(perform);
//			}
			for(int i = 0; i < performs.length;i++) {
				perform(Map, performs[i]);
			}
			System.out.print("#"+test+" ");
			printMap(Map);
			
		
		}
	}
    
    public static void printMap(String[][] Map) {
		for (int i = 0; i < Map.length; i++) {
			for (int j = 0; j < Map[0].length; j++) {
				System.out.print(Map[i][j]);
			}
			System.out.println();
		}
	}
	
	public static int[] getPosition(String[][] Map) {
		int[] result = new int[2];
		for (int i = 0; i < Map.length; i++) {
			for (int j = 0; j < Map[0].length; j++) {
				if(Map[i][j].equals("^") | Map[i][j].equals("v") | Map[i][j].equals("<") | Map[i][j].equals(">")){
					result[0] = i;
					result[1] = j;
//					System.out.println(i + " " + j);
				}
			}
		}
		return result;
	}
	
	public static void perform(String[][] Map, String alpha) {
//		System.out.println("EXE");
		int[] Index = getPosition(Map);
		int TankCol = Index[1];
		int TankRow = Index[0];
//		System.out.println(TankRow + " " + TankCol);
		if (alpha.equals("U") && TankRow - 1 >= 0) {
			if (Map[TankRow-1][TankCol].equals(".")) {
				Map[TankRow][TankCol] = ".";
				Map[TankRow-1][TankCol] = "^";
				return;
			}
		}
		if (alpha.equals("D")&& TankRow + 1 < Map.length) {
			if (Map[TankRow+1][TankCol].equals(".")) {
				Map[TankRow][TankCol] = ".";
				Map[TankRow+1][TankCol] = "v";
				return;
			}			
		}
		if (alpha.equals("L") && TankCol - 1 >= 0) {
			if (Map[TankRow][TankCol-1].equals(".")) {
				Map[TankRow][TankCol] = ".";
				Map[TankRow][TankCol-1] = "<";
				return;
			}			
		}
		if (alpha.equals("R")&& TankCol + 1 < Map[0].length) {
			if (Map[TankRow][TankCol+1].equals(".")) {
				Map[TankRow][TankCol] = ".";
				Map[TankRow][TankCol+1] = ">";
				return;
			}			
		}
		if(alpha.equals("U")) {
			Map[TankRow][TankCol] = "^";
			return;
		}
		if(alpha.equals("R")) {
			Map[TankRow][TankCol] = ">";
			return;
		}
		if(alpha.equals("L")) {
			Map[TankRow][TankCol] = "<";
			return;
		}
		if(alpha.equals("D")) {
			Map[TankRow][TankCol] = "v";
			return;
		}
		if (alpha.equals("S")) {
			if(Map[TankRow][TankCol].equals("^")){
				for(int i = TankRow; i >= 0; i--) {
					if(Map[i][TankCol].equals("#")) {
						break;
					}
					else if(Map[i][TankCol].equals("*")) {
						Map[i][TankCol] = ".";
						break;
					}
				}
			}
			if(Map[TankRow][TankCol].equals("v")){
				for(int i = TankRow; i < Map.length; i++) {
					if(Map[i][TankCol].equals("#")) {
						break;
					}
					else if(Map[i][TankCol].equals("*")) {
						Map[i][TankCol] = ".";
						break;
					}
				}
							
						}
			if(Map[TankRow][TankCol].equals("<")){
				for(int i = TankCol; i >= 0; i--) {
					if(Map[TankRow][i].equals("#")) {
						break;
					}
					else if(Map[TankRow][i].equals("*")) {
						Map[TankRow][i] = ".";
						break;
					}
				}
				
			}
			if(Map[TankRow][TankCol].equals(">")){
				for(int i = TankCol; i < Map[0].length; i++) {
					if(Map[TankRow][i].equals("#")) {
						break;
					}
					else if(Map[TankRow][i].equals("*")) {
						Map[TankRow][i] = ".";
						break;
					}
				}
			}
			
		}
		
	}
    
}