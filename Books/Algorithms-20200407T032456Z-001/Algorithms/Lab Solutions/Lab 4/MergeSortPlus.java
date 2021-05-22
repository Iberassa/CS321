package sortroutines;


import runtime.*;
import java.util.*;

public class MergeSortPlus extends Sorter {
	private final int INSERTION_SORT_VAL = 20;
	int[] theArray;
	
	
	//public sorter
	public int[] sort(int[] input){
		int n = input.length;
		int[] tempStorage = new int[n];
		theArray = input;
		mergeSort(tempStorage,0,n-1);
		return theArray;
	}
	
	
	/** Merges the ranges [lowerPointer,upperPointer-1] and [upperPointer,upperBound] in place */
	private void merge(int[] tempStorage, int lowerPointer, int upperPointer, int upperBound) {
		int j = 0; //tempStorage index
		int lowerBound = lowerPointer;
		int n = upperBound - lowerBound + 1; //total number of elements to rearrange
		
		//view the range [lowerBound,upperBound] as two arrays
        //[lowerBound, mid], [mid+1,upperBound] to be merged
		int mid = upperPointer -1;  
		
		while(lowerPointer <= mid && upperPointer <= upperBound){
			if(theArray[lowerPointer] < theArray[upperPointer]){
				tempStorage[j++] = theArray[lowerPointer++];
			}
			else {
				tempStorage[j++] = theArray[upperPointer++];
			}
		}
		//left array may still have elements -- insert them into tempStorage
		while(lowerPointer <= mid) {
			tempStorage[j++] = theArray[lowerPointer++];
		}
		//right array may still have elements -- insert these into tempStorage
		while(upperPointer <= upperBound){
			tempStorage[j++] = theArray[upperPointer++];
		}
		//replace the range [lowerBound,upperBound] in theArray with 
		//the range [0,n-1] just created in tempStorage
		for(j=0; j<n; ++j) {
			theArray[lowerBound+j] = tempStorage[j];
		}
		
	}
	
	
	void mergeSort(int[] tempStorage, int lower, int upper) {
		if(lower==upper){
			return;
		}
		if(upper-lower <= this.INSERTION_SORT_VAL){
			insertionSort(lower,upper);
		}
		else {
			int mid = (lower+upper)/2;
			mergeSort(tempStorage,lower,mid);  //sort left half
			mergeSort(tempStorage,mid+1, upper); //sort right half
			merge(tempStorage,lower,mid+1,upper); //merge them
		}
	}
	
	private void insertionSort(int lower, int upper) {
		if(theArray == null || theArray.length <= 1)
			return;
		
		int temp = 0;
		int j = 0;
		for(int i = lower; i <= upper; ++i) {
			temp = theArray[i];
			j=i;
			while(j>lower && temp < theArray[j-1]){
				theArray[j] = theArray[j-1];
				j--;
			}
			theArray[j]=temp;
		}		
	}	
	public static void main(String[] args) {
		int[] arr = {1,5,7,11, 23, 45,23,0, 28, 29, 44};
		MergeSortPlus msp = new MergeSortPlus();
		System.out.println(Arrays.toString(arr));
		msp.sort(arr);
		System.out.println(Arrays.toString(arr));
	}


}

