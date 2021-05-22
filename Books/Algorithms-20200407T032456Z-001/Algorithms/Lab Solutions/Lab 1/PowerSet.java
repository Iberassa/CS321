package lab1.prob6.subsetsum;
import java.util.*;


public class PowerSet {

	public static <T> List<Set<T>> powerSet(List<T> X) {
		List<Set<T>> P = new ArrayList<Set<T>>();
		Set<T> S = new HashSet<T>();
		P.add(S);
		if(X.isEmpty()) {
			return P;
		}
		else {
			while(!X.isEmpty()) {
				T f = X.remove(0);
				int size = P.size();
				for(int i = 0; i < size; i++) {
					S = new HashSet<T>();
					S.add(f);
					S.addAll(P.get(i));
					P.add(S);
				}
			}
		}
		return P;
	}

	public static void main(String[] args) {
		List<Integer> list = new ArrayList<Integer>();
		list.add(4);
		list.add(5);
		list.add(6);
		System.out.println(powerSet(list));
	}
}
