Color Range
===============
![Screenshot](http://akaidiot.github.com/MooTools-ColorRange/color-range.png)

The ''ColorRange'' class is a simple utility that create a range of colors to be used on elements of your choice. All you need is two colors and a selection of elements to apply the range of colors between the two chosen colors two and you're done. 

How To Use
----------

Default, a newly created ''ColorRange'' object simply defines the range you supplied and nothing else. It can be used to apply the range to an element selection or selector. There are multiply ways to accomplish this; the following examples will all yield the same result: 

    #JS
    // create a color range and use it on the page's menu items 
    var myRange = new ColorRange('#f00', [0, 0, 255]);
    myRange.apply($$('#menu li'));
    
    // apply a color range to the page's menu items 
    $$('#menu li').applyColorRange('#f00', '#00f');
    
    // call a utility function to color the page's menu items 
    Color.applyRange('#f00', '#00f', '#menu li');

All the options of the ''ColorRange'' class are described below. 

## Constructor 

### Syntax: 

    #JS
    var myRange = new ColorRange(from, to);

### Arguments: 

1. from - (*color*) The starting color. This argument can be anything accepted by the constructor of [''Color''](http://mootools.net/docs/more/Utilities/Color "MooTools More/Utilities/Color Docs"). 
2. to - (*color*) The ending color, like the first argument. 

## apply

Applies a color range to a property of all the passed elements. Returns the ''ColorRange'' instance.  

### Syntax:

    #JS
    myRange.apply(elements[, property]);

### Arguments: 

1. elements - (*elements* or *string*) The selection of elements to apply the color range to, either an ''Elements'' object or a selector string. 
2. property - (*string*, optional) The property to apply the colors to, defaults to ''background-color''. 

## Color.range

Utility to create a new color range from the ''Color'' class. 

### Syntax:
    
    #JS
    Color.range(from, to);

### Arguments:

See *Constructor*. 

## Color.applyRange

Utility to apply a color range to a selection of elements. 

### Syntax:

    #JS
    Color.applyRange(from, to, elements[, property]);

### Arguments:

1. from - (*color*) See *Constructor*.
2. to - (*color*) See *Constructor*.
3. elements - (*elements* or *string*) See *apply*. 
4. property - (*string*, optional) See *apply*. 

## Elements.applyColorRange

Utility to apply a color range to an element collection. 

### Syntax:
    
    #JS
    $$('li.someClass').applyColorRange(from, to[, property]);

### Arguments:

1. from - (*color*) See *Constructor*.
2. to - (*color*) See *Constructor*.
3. property - (*string*, optional) See *apply*. 


Changelog
---------

### 0.1

- initial release 
