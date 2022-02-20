Here is a JavaScript solution for implementing a Trie with insert and search functionality:

```javascript
class TrieNode {
    constructor() {
        this.end = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode();
            }
            node = node.children[word[i]];
        }
        node.end = true;
    }

    search(word) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(!node.children[word[i]]) {
                return false;
            }
            node = node.children[word[i]];
        }
        return node.end;
    }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
trie.insert("app");
console.log(trie.search("app")); // true
```

This code defines a TrieNode class and a Trie class. The TrieNode class represents a node in the Trie, and the Trie class represents the Trie itself. The Trie class has two methods: insert and search. The insert method inserts a word into the Trie, and the search method searches for a word in the Trie.