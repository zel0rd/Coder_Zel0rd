package baekjoon;

import java.util.Scanner;

public class BJ_P2941_크로아티아알파벳 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String [] input = sc.nextLine().split("");
		
		int count = 0;
		for(int i = 0; i < input.length; i++) {
			if(i + 1 < input.length) {
				if(input[i].equals("c")) {
					if(input[i+1].equals("=")) {
						i+=1;
					} else if(input[i+1].equals("-")) {
						i+=1;
					}
				}
				else if(input[i].equals("d")) {
					if(input[i+1].equals("-")) {
						i+=1;
					}else if(i+2 < input.length && input[i+1].equals("z") && input[i+2].equals("=")  ) {
						i+=2;
					}
				}
				else if(input[i].equals("l")) {
					if(input[i+1].equals("j")) {
						i+=1;
					}
				}
				else if(input[i].equals("n")) {
					if(input[i+1].equals("j")) {
						i+=1;
					}
				}
				else if(input[i].equals("s")) {
					if(input[i+1].equals("=")) {
						i+=1;
					}
				}
				else if(input[i].equals("z")) {
					if(input[i+1].equals("=")) {
						i+=1;
					}
				}
			}
			count += 1;
			sc.close();

		}
		System.out.println(count);
	}
}
