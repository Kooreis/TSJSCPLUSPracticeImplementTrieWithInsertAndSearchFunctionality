```cpp
#include <iostream>
#include <unordered_map>

using namespace std;

struct TrieNode {
    unordered_map<char, TrieNode*> children;
    bool endOfWord;
};

TrieNode* getNode() {
    TrieNode* node = new TrieNode;
    node->endOfWord = false;
    return node;
}

void insert(TrieNode* root, string word) {
    TrieNode* node = root;
    for (char c : word) {
        if (node->children.find(c) == node->children.end()) {
            node->children[c] = getNode();
        }
        node = node->children[c];
    }
    node->endOfWord = true;
}

bool search(TrieNode* root, string word) {
    TrieNode* node = root;
    for (char c : word) {
        if (node->children.find(c) == node->children.end()) {
            return false;
        }
        node = node->children[c];
    }
    return node->endOfWord;
}

int main() {
    TrieNode* root = getNode();
    insert(root, "hello");
    insert(root, "world");
    cout << (search(root, "hello") ? "Found" : "Not Found") << endl;
    cout << (search(root, "world") ? "Found" : "Not Found") << endl;
    cout << (search(root, "hell") ? "Found" : "Not Found") << endl;
    return 0;
}
```