var tape = require("tape"),
    keyMirror = require("../src/index");


tape("should, if array should return object where values are keys and values, if object should mirror keys", function(assert) {

    assert.deepEqual(keyMirror(["KEY", "VALUE"]), {
        KEY: "KEY",
        VALUE: "VALUE"
    });

    assert.deepEqual(keyMirror({
        KEY: null,
        VALUE: null
    }), {
        KEY: "KEY",
        VALUE: "VALUE"
    });
});
