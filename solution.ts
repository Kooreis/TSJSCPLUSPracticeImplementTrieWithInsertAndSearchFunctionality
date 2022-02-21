class TrieNode {
    children: { [key: string]: TrieNode };
    endOfWord: boolean;

    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}