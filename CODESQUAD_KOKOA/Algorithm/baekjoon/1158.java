package baekjoon;

import java.util.Arrays;
import java.util.Scanner;
import java.util.Stack;

public class BJ_P1158_요세푸스 {
	public static void main(String[] args) {
		StringBuilder sb = new StringBuilder();
		Scanner sc = new Scanner(System.in);
		int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
		
		final int counter = inputs[1];
		int[] circle = new int[inputs[0]];
		Stack<Integer> result = new Stack<Integer>();
		
		for(int i = 0; i < inputs[0]; i++) {
			circle[i] = i+1;
		}
		int tempCount = 1;
		while(true) {
			if(allZero(circle)) { break; }
			for(int i = 0; i < circle.length; i++) {
				if( circle[i] != 0 && tempCount != counter) {
					tempCount += 1;
				}else if(circle[i] != 0 && tempCount == counter) {
					result.push(circle[i]);
					tempCount = 1;
					circle[i] = 0;
				}
			}
		}

		System.out.print("<");
		String prefix = "";
		for(int a : result) {
			sb.append(prefix);
			prefix = ", ";
			sb.append(a);
			
		}
		System.out.print(sb);
		System.out.println(">");
		
	}
	public static boolean allZero(int[] circle) {
		boolean zeros = true;
		for(int i = 0; i < circle.length; i++) {
			if(circle[i] != 0) {
				zeros = false;
			}
		}
		return zeros;
	}
}
