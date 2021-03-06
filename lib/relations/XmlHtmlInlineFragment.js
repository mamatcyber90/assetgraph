const HtmlRelation = require('./HtmlRelation');

class XmlHtmlInlineFragment extends HtmlRelation {
    inline() {
        super.inline();
        this.node.textContent = this.to.text;
        this.from.markDirty();
        return this;
    }

    attach(position, adjacentRelation) {
        this.node = this.from.parseTree.createElement(this.node.nodeName);
        super.attach(position, adjacentRelation);
    }
};

XmlHtmlInlineFragment.prototype.targetType = 'Html';

module.exports = XmlHtmlInlineFragment;
