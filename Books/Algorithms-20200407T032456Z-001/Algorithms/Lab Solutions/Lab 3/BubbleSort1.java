package sortroutines;


import runtime.Sorter;

/**
 * This version of BubbleSort runs in O(n)
 * for already sorted arrays.
  */
public class BubbleSort1 extends Sorter {
	public int[] sort(int array[]){
		boolean swappedOnPrevRun = true;
		while(swappedOnPrevRun){		
			swappedOnPrevRun = false;			
			for(int i = 0; i < array.length - 1; i++)	{
				if(array[i] > array[i + 1])	{						
					swappedOnPrevRun = true;	
					int temp = array[i];		
					array[i] = array[i + 1];	
					array[i + 1] = temp;		
				}
			}
		}
		return array;
	}
	public static void main(String[] args){
		/*
		int[] test = {21,13,1,-22, 51, 5, 18};
		BubbleSort1 bs = new BubbleSort1();
		
		System.out.println(Arrays.toString(bs.sort(test)));
		*/
		int max = Integer.MAX_VALUE;
		int by = (int)Math.ceil(Math.cbrt(max));
		System.out.println(by);
		
	}

}
