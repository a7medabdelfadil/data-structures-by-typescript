/**
 * Interface defining the basic operations of a generic stack.
 */
interface IStack<T> {
  push(item: T): void; // Add an item to the top of the stack
  pop(): T | undefined; // Remove and return the top item
  peek(): T | undefined; // Return the top item without removing it
  size(): number; // Get the number of items in the stack
  clear(): void; // Remove all items from the stack
  isEmpty(): boolean; // Check if the stack is empty
  isFull(): boolean; // Check if the stack has reached its max size
  maxSize(): number; // Get the maximum allowed size
  getItems(): T[]; // Get a copy of all items in the stack
}

/**
 * Generic Stack implementation with an optional max size limit.
 */
class Stack<T> implements IStack<T> {
  private items: T[] = [];

  constructor(private max_size: number = Infinity) {}

  /**
   * Pushes an item onto the stack.
   * @throws Error if the stack is already full.
   */
  push(item: T): void {
    if (this.isFull()) {
      throw new Error("Cannot push: Stack has reached its maximum size.");
    }
    this.items.push(item);
  }

  /**
   * Removes and returns the top item of the stack.
   * @returns The removed item or undefined if the stack is empty.
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns the top item without removing it.
   */
  peek(): T | undefined {
    return this.items[this.size() - 1];
  }

  /**
   * Returns the number of items in the stack.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Removes all items from the stack.
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Checks whether the stack is empty.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Checks whether the stack has reached its maximum size.
   */
  isFull(): boolean {
    return this.size() === this.max_size;
  }

  /**
   * Returns the maximum size of the stack.
   */
  maxSize(): number {
    return this.max_size;
  }

  /**
   * Returns a shallow copy of the stack's items.
   */
  getItems(): T[] {
    return [...this.items];
  }

  /**
   * Updates the maximum allowed size of the stack.
   * @throws Error if the new size is smaller than the current stack size.
   */
  setMaxSize(size: number): void {
    if (size < this.size()) {
      throw new Error(
        "Cannot set max size: New size is smaller than the current number of items."
      );
    }
    this.max_size = size;
  }
}

// Example usage
const stack = new Stack<string>();
stack.push("Hello");
stack.push("World");
console.log(stack.peek()); // Output: "World"