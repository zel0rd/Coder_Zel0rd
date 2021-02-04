

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class SW_P5432_쇠막대기자르기 {
	public static void main(String[] args) throws FileNotFoundException {

		System.setIn(new FileInputStream("sw_input_p5432.txt"));
		Scanner sc = new Scanner(System.in);
		
		int TestCase = sc.nextInt();
		sc.nextLine();
		
		for(int test = 1; test <= TestCase; test++) {
			int result = 0;
			int stackIndex = 0;
			String[] line = sc.nextLine().split("");
			String[] stack = new String[line.length];
			
			for(int i = 0; i < line.length; i++) {
				if( line[i].equals("(") && line[i+1].equals(")") ) {
					result += stackIndex;
					i += 1;
				}else if( line[i].equals("(")) {
					stack[stackIndex] = "(";
					stackIndex += 1;
				}else if( line[i].equals(")")) {
					stack[stackIndex-1] = null;
					stackIndex -= 1;
					result += 1;
				}
			}
			result += stackIndex;
			System.out.println("#" + test + " " + result);
		}
	}
}
