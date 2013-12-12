$.wfcolor = (function () {
    /// Standard palettes
    var self = {
        red:            '#bb0826',
        yellow:         '#fcc60a',
        gray:           '#8f8f8f',
    };

    self.active = {
        dark: {
            coolgray:   '#44464a',
            ebony:      '#574537',
            green:      '#007337',
            magenta:    '#821861',
            orange:     '#ce4c00',
            plum:       '#4d3b65',
            red:        '#ae1e23',
            teal:       '#00698c'
        },
        light: {
            coolgray:   '#d9d9d6',
        },
        medium: {
            coolgray:   '#bfc0be',
        },
        black:          '#000000',
        ebony:          '#7a6855',
        green:          '#46a033',
        magenta:        '#ae2573',
        orange:         '#ed8800',
        plum:           '#702f8a',
        teal:           '#0095c8',
        warmred:        '#ec1c29'
    };

    self.earth = {
        dark: {
            amber:      '#803b2b',
            aqua:       '#00617f',
            blue:       '#326295',
            brown:      '#734626',
            eggplant:   '#6c2b46',
            purple:      self.active.dark.plum,
            spruce:     '#285c4d',
            warmgray:   '#675b53',
        },
        medium:  {
            warmgray:   '#8c8279',
        },
        amber:          '#a9431e',
        aqua:           '#0085ad',
        blue:           '#5e8ab4',
        brown:          '#b06224',
        eggplant:       '#893b67',
        purple:         '#6f5091',
        spruce:         '#507f70',
    };

    self.neutral = {
        dark: {
            gray:        self.active.dark.coolgray,
        },
        light: {
            gray:       '#e0e3e2',
        },
        air:            '#f2e2bd',
        aquablue:       '#c2deea',
        breeze:         '#dadbbf',
        khaki:          '#bfcec2',
        stone:          '#d7d3c7',
    };

    self.odd = {
        primary:        '#438164',
        secondary:      '#d47a32',
        neutral:        '#a49d98',
    };

    self.old = {
        darkaqua:       '#7c949e',
        ochre:          '#a46127',
        papyrus:        '#ccc8ba',
        pine:           '#438164',
        rosemary:       '#9aa27d',
        spruce:         '#106470',
        taupe20:        '#e1dedd',
        taupe50:        '#a49d98',
    };

    // translate into names
    return self;

}());
