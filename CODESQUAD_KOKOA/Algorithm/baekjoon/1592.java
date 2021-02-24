package baekjoon;

import java.util.Scanner;

public class BJ_P1592_영식이와친구들 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int M = sc.nextInt();
		int L = sc.nextInt();
		int [] Map = new int[N];
		int index = 0;
		int count = 0;
		while(true) {

			Map[index] += 1;
			if(Map[index] >= M) {
				break;
			}
			// 짝수
			if(Map[index] % 2 == 0) {
				if(index - L >= 0) {
					index = index - L;
				}else {
					index = (index - L) + N;
				}
			}
			// 홀수
			else {
				if(index + L < N) {
					index = index + L;
				}else {
					index = (index + L) % N;
				}
			}
			count += 1;
		}
		System.out.println(count);
		sc.close();
	}
}
