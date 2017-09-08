/**
 * A Trie datastructure that uses a simple javascript object for its underlying storage.
 * It doesn't generate the input tree for you, you MUST generate it yourself.
 * This trie is designed for Saka Key's needs and ISN'T general purpose.
 * An example input tree is:
 * {
 *   "c": {
 *     "a": {
 *       "t": "Tom",
 *       "r": "Tarzan"
 *     }
 *   },
 *   "d": {
 *     "o": {
 *       "g": () => console.log("My dog's name is Harris")
 *     }
 *   }
 * }
 */

export default class Trie {

  /**
   * Creates a trie
   * @param {Object} root - A simple javascript object representing a trie
   */
  init = (root) => {
    this.root = root;
    this.curNode = root;
  }

  /** Sets the root to current node to the root node */
  reset = () => {
    this.curNode = this.root;
  }

  /**
   * Advances the command trie based on the command key event.
   * Based on the next node that input results in, returns:
   * 1. undefined, if no valid node
   * 2. null, if intermediate node
   * 3. command, if leaf node
   */
  advance = (input) => {
    // TODO: Update to use longest viable prefix by trying
    // longest prefix until a valid path is found
    const next = this.curNode[input];
    if (next === undefined) {
      return undefined;
    }
    // Case 1. An intermediate node
    if (typeof next === 'object') {
      this.curNode = next;
      return null;
    // Case 2. A trie leaf corresponding to the command reached
    } else {
      this.curNode = this.root;
      return next;
    }
  }
}
