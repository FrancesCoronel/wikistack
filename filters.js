// Setting custom filters on Swig

module.exports = function(swig) {
    var page_link = function(doc) {
        var link_name;
        if (typeof doc.title !== "undefined" && doc.title !== "") {
            link_name = doc.title;
        } else {
            link_name = "Page " + doc.url_name;
        }
        return "<a href='/wiki/" + doc.url_name + "'>" + link_name + "</a>";
    };
    page_link.safe = true;

    swig.setFilter('page_link', page_link);

    // Marked Setup
    var markedFunc = function(body) {
        var marked = require('marked');
        return marked(body);
    };

    markedFunc.safe = true;
    // 'marked' is name of filter
    swig.setFilter('marked', markedFunc);

    var truncate_str = function(str) {
        var maxCharCount = 100;
        var result = str.slice(0, maxCharCount) + "...";
        return result;
    };
    // 'marked' is name of filter
    swig.setFilter('truncate_str', truncate_str);
};

