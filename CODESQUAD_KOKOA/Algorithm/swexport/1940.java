package day3;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

public class SW_P1940_가랏RC카{
	public static void main(String[] args) throws Exception{
		System.setIn(new FileInputStream("SW_P1940_Input.txt"));
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		sc.nextLine();
		for(int test = 1; test <= testCase; test++) {
			int trials = sc.nextInt();
			sc.nextLine();
			
			int speed = 0;
			int distance = 0;
			for(int trial = 1; trial <= trials; trial++) {
				int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
				
				if(inputs[0] == 0) {
					distance += speed;
				}else if(inputs[0] == 1) {
					speed += inputs[1];
					distance += speed;
				}else if(inputs[0] == 2) {
					if (speed - inputs[1] <= 0) {
						speed = 0;
					} else {
						speed -= inputs[1];
						distance += speed;
					}
				}
			}
			System.out.println("#" + test + " " + distance);
		}
	}
}
