package lab2.prob2.merge.sorted.arrays;

import java.util.Arrays;

public class Merge {
	/**
	 * Returns sorted array, obtained by merging two already sorted 
	 * arrays arr1, arr2
	 */
	public static int[] merge(int[] arr1, int[] arr2) {
		int[] arr = new int[arr1.length + arr2.length];
		int i = 0;
		int j = 0;
		int pos = 0;
		while(i < arr1.length && j < arr2.length){
			if(arr1[i] < arr2[j]) {
				arr[pos++] = arr1[i++];				
			} else {
				arr[pos++] = arr2[j++];
			}
		}
		while(i < arr1.length){
			arr[pos++] = arr1[i++];				
			
		}
		while(j < arr2.length){
			arr[pos++] = arr2[j++];
			
		}
		return arr;
	}
	
	public static void main(String[] args) {
		int[] arr1 = {1,4,7,10, 13};
		int[] arr2 = {2,5,8,11, 14};
		System.out.println(Arrays.toString(merge(arr1, arr2)));
	}
}
