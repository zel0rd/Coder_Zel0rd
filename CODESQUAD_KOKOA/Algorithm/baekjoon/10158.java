package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BJ_P10158_개미3 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] Map = new int[2];
		
		Map[0]= Integer.parseInt(st.nextToken());
		Map[1]= Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine());
		int x = Integer.parseInt(st.nextToken());
		int y = Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine());
		int t = Integer.parseInt(st.nextToken());
		int dx = 1;
		int dy = 1;
		
		int xt = t % ( Map[0] * 2);
		int yt = t % ( Map[1] * 2);
		
		for(int i = 0; i < xt; i++) {
			if( x + dx > Map[0] || x + dx < 0) {
				dx *= -1;
			}
			
			x += dx;
		}
		for(int i = 0; i < yt; i++) {
			if( y + dy > Map[1] || y + dy < 0 ) {
				dy *= -1;
			}
			
			y += dy;
		}
		
		
		System.out.println(x + " " + y);
	}
}
