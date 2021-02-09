
import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class BJ_P2563_색종이 {
	public static void main(String[] args) throws Exception{
		System.setIn(new FileInputStream("bj_input_p2563.txt"));
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		sc.nextLine();
		
		int[][] map = new int[100][100];
		
		for(int test=1; test <= testCase; test++) {
			int[] inputs  = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			
			for(int i = inputs[0]-1; i < inputs[0]+9 ; i++) {
				for(int j = inputs[1]-1; j < inputs[1]+9 ; j++) {
					map[i][j] = 1;
				}
			}
		}
		int result = 0;
		for(int i = 0; i < 100; i++) {
			for(int j = 0; j < 100; j++) {
				result += map[i][j];
			}
		}
		System.out.println(result);
	}
}
