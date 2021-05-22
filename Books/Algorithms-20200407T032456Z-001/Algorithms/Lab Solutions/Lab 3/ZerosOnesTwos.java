package lab3.prob2.zeros.ones.twos;

public class ZerosOnesTwos {

	private  int[] finalSortedArray;
	public  int[] sort(int[] arr){
		if (arr == null || arr.length == 0)
			return null;
		finalSortedArray = new int[arr.length];
		int zeros = 0, ones = 0, twos = 0, temp = 0;
		for (int i = 0 ; i < arr.length; i ++){
			temp = arr[i];
			if (temp == 0)
				zeros++;
			else if (temp == 1)
				ones ++;
			else
				twos ++;
		}
		printToArray(0, zeros, finalSortedArray, 0);
		printToArray(1, ones, finalSortedArray, zeros);
		printToArray(2, twos, finalSortedArray, zeros+ones);
		return finalSortedArray;
	}
	
	private  void printToArray(int number, int count, int[] arr, int startIndex){
		for (int i = 0; i < count; i++){
			arr[startIndex++] = number;
		}
	}
	public static void main(String[] args) {
		
		ZerosOnesTwos test = new ZerosOnesTwos();
		int[] arr={0,0,1,2,2,2,1,0};
		int[]  finalSortedArray = test.sort(arr);
		for(int i =0; i< finalSortedArray.length; i++)
			System.out.print(finalSortedArray[i] + " ");
		
	}
}
