package sortroutines;

import java.util.Arrays;

import runtime.Sorter;

public class BSTSort extends Sorter {
	public int[] sort(int[] array){
		if(array==null || array.length < 2) return array;
		//clear
		root = null;
		for(int i = 0; i < array.length; ++i) {
			insert(array[i]);
		}
		//initialize nextSlot
		nextSlot = 0;
		sortedArray = new int[array.length];
		readIntoArray(root);
		return sortedArray;
		
		
	}
	private int nextSlot;
	private int[] sortedArray;
	private void readIntoArray(Node t) {
		if(t != null) {
			readIntoArray(t.left);
			sortedArray[nextSlot++]=t.element.intValue();
			readIntoArray(t.right);
		}
		
	
	}
	/** The tree root. */
	private Node root;

	//start with an empty tree
	public BSTSort() {
		root = null;
	}

	/**
	 * Prints the values in the nodes of the tree in sorted order.
	 */
	public void printTree() {
		if (root == null)
			System.out.println("Empty tree");
		else
			printTree(root);
	}

	private void printTree(Node t) {
		if (t != null) {
			printTree(t.left);
			System.out.println(t.element);
			printTree(t.right);
		}
	}
	
	public boolean find(Integer x) {
		if(x==null) return false;
		return find(x,root);
	}
	private boolean find(Integer x, Node n){
		if(n == null) return false;
		if(n != null && n.element.equals(x)) return true;
		return (x.compareTo(n.element) < 0) ?
				find(x,n.left) :
				find(x,n.right);
		//return find(x,n.left) || find(x,n.right);
	}

	public void insert(Integer x) {
		if (root == null) {
			root = new Node(x, null, null);
		}
		else {
			Node n = root;
			boolean inserted = false;
			while(!inserted){
				if(x.compareTo(n.element)<0) {
					//space found on the left
					if(n.left == null){
						n.left = new Node(x,null,null);
						inserted = true;
					}
					else {
						n = n.left;
					}
				}
				
				else if(x.compareTo(n.element)>0){ 
					//space found on the right					
					if(n.right==null){
						n.right = new Node(x,null,null);
						inserted = true;
					}
					else {
						n = n.right;
					}
				}
				
				else { /*// in this case, x.compareTo(n.element) == 0 -- we have
					// a duplicate
			throw new RuntimeException("The element " + x
					+ " is already in the tree; "
					+ "duplicates are not allowed");*/
					inserted = true;
				}

				
			}

		}
	}
	public static void main(String[] args){
		BSTSort bst = new BSTSort();
		int[] input = {3,1, 2, -2, 8, -6};
		int[] output = bst.sort(input);
		System.out.println(Arrays.toString(output));
		
		/*
		for(int i = 15; i >= 0; --i){
			bst.insert(new Integer(2*i));
			bst.insert(new Integer(2*i - 5));
		}
		bst.printTree();
		System.out.println("Is 24 in the tree? "+bst.find(new Integer(24)));
		System.out.println("Is 27 in the tree? "+bst.find(new Integer(27)));
		*/
		
	}

	private class Node {

		// Constructors
		Node(Integer theElement) {
			this(theElement, null, null);
		}

		Node(Integer element, Node left, Node right) {
			this.element = element;
			this.left = left;
			this.right = right;
		}
		private Integer element; // The data in the node
		private Node left; // Left child
		private Node right; // Right child
	}

}
