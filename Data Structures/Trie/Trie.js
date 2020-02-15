/**
 * A Trie/Prefix Tree is a kind of search tree used to provide quick lookup
 * of words/patterns in a set of words. A basic Trie however has O(n^2) space complexity
 * making it impractical in practice. It however provides O(max(search_string, length of longest word)) 
 * lookup time making it an optimal approach when space is not an issue.
 */

var TrieNode = (function () {

    function TrieNode() {
        this.nodes = {};
        this.isLeaf = false;
    }

    // Inserts a word into the Trie
    TrieNode.prototype.insert = function (word) {
        let curr = this;
        word.split("").forEach(char => {
            if (!(char in curr.nodes)) {
                curr.nodes[char] = new TrieNode();
            }
            curr = curr.nodes[char];
        });
        curr.isLeaf = true;
    };

    // Tries to find word in a Trie
    TrieNode.prototype.find = function (word) {
        var curr = this;
        word.split("").forEach(char => {
            if (char in curr.nodes) {
                curr = curr.nodes[char];
            }
            return false;
        });
        return curr.isLeaf;
    };
    return TrieNode;
}());



//Implementation of BST
var trie = new TrieNode();
trie.insert("HELLO");

