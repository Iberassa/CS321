package lab1.prob5.secondsmallest;

public class SecSmallest {

	public static int secondSmallest(int[] arr) {
		if (arr == null || arr.length < 2) {
			throw new IllegalArgumentException("Input array too small");
		}
		int smallest = arr[0];
		int secSmallest = arr[1];
		if(smallest > secSmallest) {
			smallest = arr[1];
			secSmallest = arr[0];
		}
		for(int i=2; i < arr.length; i++){
			if(arr[i] <=smallest){
				secSmallest = smallest;
				smallest = arr[i];
			}
			else if(arr[i] < secSmallest) {
				secSmallest = arr[i];
			}
		}
		return secSmallest;
	}

	public static void main(String[] args) {
		System.out.println(secondSmallest(new int[]{1,4,2,3}));
		System.out.println(secondSmallest(new int[]{3,3,4,7}));
		System.out.println(secondSmallest(new int[]{4,1,2,3}));
		System.out.println(secondSmallest(new int[]{9}));
	}

}
