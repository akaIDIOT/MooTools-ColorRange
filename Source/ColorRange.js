var ColorRange = new Class({
    
    Extends: Array,

    from: false,
    to: false,

    initialize: function(from, to, steps) {
        this.from = new Color(from);
        this.to = new Color(to);

        this.setSteps(stepsi || 0);
    },

    setSteps: function(steps) {
        this.empty();
        for (var index = 0; index < steps; index++) {
            this[index] = this.from.mix(this.to, (steps - index) * 100);
        }

        return this;
    },

    apply: function(elements) {
        if (this.length == elements.length) {
            elements.each(function(element, index) {
                element.setStyle('background-color', this[index]);
            });
            return elements;
        } else {
            return new ColorRange(this.from, this.to, elements.length).apply(elements);
        }
    }

}

Color.range = function(from, to, steps) {
    return new ColorRange(from, to, steps);
};

Color.implement({
    range: function(to, steps) {
        return new ColourRange(this, to, steps);
    }
});
