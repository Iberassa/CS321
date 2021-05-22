package lab3.prob4.zeroes.and.ones;

import java.util.Arrays;

public class ZeroesAndOnes {

	//A is sorted array of 0s and 1s
	public static int[] findNum0s1s(int[] A) {
		int[] retval = new int[2];
		if(A.length == 0) {
			retval[0] = 0;
			retval[1] = 0;
			return retval;
		}
		else if(A[0] == 1) { //must be all 1s since sorted
			retval[0] = 0;
			retval[1] = A.length;
			return retval;
		}
		else if(A[A.length-1] == 0) { //must all be 0s
			retval[1] = 0;
			retval[0] = A.length;
			return retval;
		}
		return recurse(A, 0, A.length-1);
	}
	private static int[] recurse(int[] A,int lower, int upper) {
		
		int[] retval = new int[2];
		int mid = (upper + lower)/2;
		if(A[mid] == 0 && A[mid+1] == 1) {
				retval[0] = mid +1;
				retval[1] = A.length - (mid+1);
				return retval;
		}
		if(A[mid] == 0 && A[mid+1] == 0) {
			return recurse(A, mid+1, upper);                                
		}
		if (A[mid] == 1) {
			return recurse(A, lower, mid -1);                                
		}
		return null;
	}
	
	public static void main(String[] args) {
		int[] test1 = {0,0,0,1,1,1,1,1};
		System.out.println(Arrays.toString(findNum0s1s(test1)));
	}

}
