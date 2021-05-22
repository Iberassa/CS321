package lab1.prob6.subsetsum;

import java.util.*;

public class SubsetSumBruteForce {
	/**
	 *
	 * @param S - array of positive integers
	 * @param k - nonnegative integer
	 * @return - array T whose sum is k, if found, otherwise null
	 */
	public static Set<Integer> subsetSum(Set<Integer> nums, int k) {
		List<Integer> listOfNums = new ArrayList<Integer>();
		for(Integer i: nums) {
			listOfNums.add(i);
		}
		List<Set<Integer>> subsets = PowerSet.powerSet(listOfNums);
		for(Set<Integer> subset : subsets) {
			if(sum(subset) == k) {
				return subset;
			}
		}
		return null;
	}

	private static int sum(Set<Integer> subset) {
		int sum = 0;
		for(int i : subset)
			sum += i;
		return sum;
	}

	public static void main(String[] args) {
		int[] nums1 = {1, 3, 9, 4, 8, 5} ;
		int k1 = 21;
		int[] nums2 = {1, 3, 9};
		int k2 = 5;
		int[] nums3 = {1, 3, 9, 4, 8, 5} ;
		int k3 = 0;
		System.out.println(subsetSum(asSet(nums1), k1));
		System.out.println(subsetSum(asSet(nums2), k2));
		System.out.println(subsetSum(asSet(nums3), k3));

	}

	private static Set<Integer> asSet(int[] nums) {
		Set<Integer> set = new HashSet<>();
		for(int i:nums)
			set.add(i);
		return set;
	}
}
