# Question: How would you implement a Trie (prefix tree) with insert and search functionality? JavaScript Summary

The JavaScript code provided implements a Trie (prefix tree) data structure with insert and search functionality. The TrieNode class is used to create nodes for the Trie, each node having a 'children' object to store its child nodes and an 'end' property to indicate if it's the end of a word. The Trie class, on the other hand, is used to create the Trie itself, with a root node initialized at the start. The 'insert' method of the Trie class is used to add words to the Trie. It iterates over each character of the word, checks if it exists as a child node, and if not, creates a new TrieNode for it. The 'search' method is used to find words in the Trie. It also iterates over each character of the word, but if it doesn't find a character as a child node, it returns false, indicating the word is not in the Trie. If it successfully iterates over all characters, it returns the 'end' property of the last node, which will be true if the word exists in the Trie and false if only a prefix of the word exists.

---

# TypeScript Differences

The TypeScript version of the solution is very similar to the JavaScript version, but with the addition of TypeScript's static typing. This means that the TypeScript version provides type safety, which can help prevent certain types of bugs and improve the development experience with features like autocompletion and compile-time error checking.

Here are the differences:

1. In the TypeScript version, the `TrieNode` class has properties `children` and `endOfWord` with explicit types. `children` is an object with string keys and `TrieNode` values, and `endOfWord` is a boolean. In the JavaScript version, these properties are also present but their types are not explicitly declared.

2. The `Trie` class in the TypeScript version also has an explicitly typed `root` property of type `TrieNode`.

3. The `insert` and `search` methods in the TypeScript version have explicitly typed parameters and return types. `insert` takes a string and returns void, and `search` takes a string and returns a boolean. In the JavaScript version, these methods do not have explicitly declared parameter or return types.

4. The TypeScript version uses the `const` keyword to declare the `currentChar` variable in the `insert` and `search` methods, ensuring that it cannot be reassigned within its scope. The JavaScript version does not use `const`.

Overall, the TypeScript version provides the same functionality as the JavaScript version, but with the added benefits of static typing.

---

# C++ Differences

The C++ version of the problem solution is quite similar to the JavaScript version. Both versions define a TrieNode structure/class and use a map/dictionary to store the children of each node. The TrieNode in both versions also has a boolean flag to indicate whether it is the end of a word.

However, there are some differences due to the language features and syntax:

1. In C++, the TrieNode is a struct and the children are stored in an unordered_map, while in JavaScript, the TrieNode is a class and the children are stored in a plain object.

2. In C++, a helper function `getNode()` is used to create a new TrieNode and initialize its `endOfWord` to false. In JavaScript, this is done in the constructor of the TrieNode class.

3. The `insert` and `search` functions in C++ are standalone functions that take the root of the Trie as a parameter. In JavaScript, these are methods of the Trie class and use `this.root` to access the root of the Trie.

4. In C++, the `insert` and `search` functions use a range-based for loop to iterate over the characters of the word. In JavaScript, a standard for loop is used with an index to access the characters.

5. In C++, the `insert` and `search` functions use the `find` method of the unordered_map to check if a child node exists. In JavaScript, the existence of a child node is checked directly with the `if (!node.children[word[i]])` condition.

6. In C++, memory for new TrieNodes is allocated with `new` and must be manually deleted to avoid memory leaks. In JavaScript, memory management is automatic.

7. The C++ version includes a `main` function to test the Trie implementation, while the JavaScript version does not. The C++ version uses `cout` for output, while the JavaScript version uses `console.log`.

---
