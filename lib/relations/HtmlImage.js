const HtmlRelation = require('./HtmlRelation');

class HtmlImage extends HtmlRelation {
    get href() {
        return this.node.getAttribute('src');
    }

    set href(href) {
        this.node.setAttribute('src', href);
    }

    attach(position, adjacentRelation) {
        this.node = this.from.parseTree.createElement('img');
        return super.attach(position, adjacentRelation);
    }
};

HtmlImage.prototype.targetType = 'Image';

module.exports = HtmlImage;
