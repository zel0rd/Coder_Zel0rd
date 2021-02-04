package swexpert;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class SW_P1218_괄호짝짓기 {
	public static void main(String[] args) throws FileNotFoundException {

		System.setIn(new FileInputStream("sw_input_P1218.txt"));
		Scanner sc = new Scanner(System.in);
		
		for(int time = 1; time <= 10 ; time++) {
			int length = sc.nextInt();
			sc.nextLine();
			
			String[] stack = new String[length];
			stack = sc.nextLine().split("");
//			print(stack);
			
			String[] temp = new String[length];
			int tempIndex = 0;
			int result = 1;
			for(int i = 0; i < stack.length; i++) {
				if(stack[i].equals("(") || stack[i].equals("[") || stack[i].equals("<") || stack[i].equals("{")) {
					temp[tempIndex] = stack[i];
					tempIndex+=1;
				}
				
				else {
					if(stack[i].equals("}")) {
						if(temp[tempIndex-1].equals("{")) {
							tempIndex -= 1;
						}else {
							result = 0;
							break;
						}
					}					
					if(stack[i].equals(")")) {
						if(temp[tempIndex-1].equals("(")) {
							tempIndex -= 1;
						}else {
							result = 0;
							break;
						}
						
					}					
					if(stack[i].equals("]")) {
						if(temp[tempIndex-1].equals("[")) {
							tempIndex -= 1;
						}else {
							result = 0;
							break;
						}
						
					}					
					if(stack[i].equals(">")) {
						if(temp[tempIndex-1].equals("<")) {
							tempIndex -= 1;
						}else {
							result = 0;
							break;
						}
					}
				}
			}
			System.out.println("#" + time +" " + result);
			
		}
	}
	
	public static void print(String [] stack) {
		for(String value : stack) {
			System.out.print(value);
		}
	}
}
