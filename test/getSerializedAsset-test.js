var vows = require('vows'),
    assert = require('assert'),
    AssetGraph = require('../lib/AssetGraph'),
    transforms = require('../lib/transforms');

vows.describe('serialize asset').addBatch({
    'After loading test case with a the same PNG image loaded from disc and http': {
        topic: function () {
            new AssetGraph({root: __dirname + '/getSerializedAsset/'}).transform(
                transforms.loadAssets('purplealpha24bit.png',
                                      'http://gofish.dk/purplealpha24bit.png'),
                this.callback
            );
        },
        'then serializing the PNG loaded from disc': {
            topic: function (assetGraph) {
                assetGraph.getSerializedAsset(assetGraph.findAssets()[0], this.callback);
            },
            'the length should be 8285': function (src) {
                assert.equal(src.length, 8285);
            }
        },
        'then serializing the PNG loaded via http': {
            topic: function (assetGraph) {
                assetGraph.getSerializedAsset(assetGraph.findAssets()[1], this.callback);
            },
            'the length should be 8285': function (src) {
                assert.equal(src.length, 8285);
            }
        }
    }
})['export'](module);
