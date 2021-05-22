package lab7.prob1.reverse.word;

import java.util.Stack;

public class ReverseWord {
	
	public static String reverse(String str){
		
		StringBuilder sb = new StringBuilder();
		Stack<Character> stack = new Stack<Character>();
		if (str == null || str.isEmpty())
			return str;
		for (int i = 0; i < str.length(); i ++ ){
			char c = str.charAt(i);
			stack.push(c);
			if (' ' == c || i == str.length()-1) {
				if (i == str.length() -1)
					stack.push(' ');
				while(!stack.isEmpty())
					sb.append(stack.pop());
			}
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		System.out.println(ReverseWord.reverse("we test coders"));
	}
}
