class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`No ${$root} provided for this listener`);
    }
    this.$root = $root;
  }
}

export default DOMListener;
