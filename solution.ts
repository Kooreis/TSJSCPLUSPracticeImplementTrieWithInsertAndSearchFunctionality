Here is a TypeScript solution for implementing a Trie with insert and search functionality:

```typescript
class TrieNode {
    children: { [key: string]: TrieNode };
    endOfWord: boolean;

    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const currentChar = word[i];
            if (node.children[currentChar] === undefined) {
                node.children[currentChar] = new TrieNode();
            }
            node = node.children[currentChar];
        }
        node.endOfWord = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const currentChar = word[i];
            if (node.children[currentChar] === undefined) {
                return false;
            }
            node = node.children[currentChar];
        }
        return node.endOfWord;
    }
}

// Testing the Trie implementation
let trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); // true
console.log(trie.search("hell")); // false
console.log(trie.search("helloo")); // false
console.log(trie.search("helllo")); // false
```

This code defines a `TrieNode` class and a `Trie` class. The `TrieNode` class represents a node in the Trie, and the `Trie` class represents the Trie itself. The `Trie` class has `insert` and `search` methods for inserting a word into the Trie and searching for a word in the Trie, respectively.