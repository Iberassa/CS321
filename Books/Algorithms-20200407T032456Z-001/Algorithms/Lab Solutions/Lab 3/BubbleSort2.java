package sortroutines;

import java.util.Arrays;

import runtime.Sorter;


/**
 * This version of BubbleSort runs in O(n)
 * for already sorted array and improves the
 * speed of inner loop by gradually decreasing
 * upper bound 
  */
public class BubbleSort2 extends Sorter {
	public int[] sort(int array[]){
		boolean swappedOnPrevRun = true;
		int len = array.length;
		int j = 1;
		while(swappedOnPrevRun){		
			swappedOnPrevRun = false;			
			for(int i = 0; i < len-j; i++)	{
				if(array[i] > array[i + 1])	{						
					swappedOnPrevRun = true;	
					int temp = array[i];		
					array[i] = array[i + 1];	
					array[i + 1] = temp;		
				}
			}
			j++;
		}
		return array;
	}
	public static void main(String[] args){
		int[] test = {21,13,1,-22, 51, 5, 18};
		BubbleSort2 bs = new BubbleSort2();
		
		System.out.println(Arrays.toString(bs.sort(test)));
		
	}

}
