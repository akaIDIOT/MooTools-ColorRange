var ColorRange = new Class({
    
    Extends: Array,

    from: false,
    to:   false,

    initialize: function(from, to, steps) {
        this.from = new Color(from);
        this.to   = new Color(to);

        this.setSteps(steps || 0);
    },

    setSteps: function(steps) {
        this.empty();
        for (var index = 0; index < steps; index++) {
            this.push(this.from.mix(this.to, index / (steps - 1) * 100));
        }

        return this;
    },

    apply: function(elements) {
        if (this.length == elements.length) {
            elements.each(function(element, index) {
                element.setStyle('background-color', this[index]);
            }, this);
            
            return this;
        } else {
            return new ColorRange(this.from, this.to, elements.length).apply(elements);
        }
    }

});

Color.range = function(from, to, steps) {
    return new ColorRange(from, to, steps);
};

Color.applyRange = function(from, to, elements) {
    return new ColorRange(from, to, elements.length).apply(elements);
};

Color.implement({
    range: function(to, steps) {
        return new ColorRange(this, to, steps);
    }
});

Elements.implement({
    applyColorRange: function(from, to) {
        new ColorRange(from, to, this.length).apply(this);
        return this;
    }
});
