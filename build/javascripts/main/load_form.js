(function() {

  window.load_form = function(url_root, destination_id) {
    var add_jr_data_str, insert_form_to_dom, instance_url, url;
    url = "" + url_root + "/xslt_form.xml";
    instance_url = "" + url_root + "/instance.xml";
    insert_form_to_dom = function(node, status, r) {
      return document.getElementById(destination_id).innerHTML = r.responseText;
    };
    $.ajax({
      url: url,
      async: false
    }).done(insert_form_to_dom);
    add_jr_data_str = function(node, status, r) {
      return window.jrDataStr = r.responseText;
    };
    return $.ajax({
      url: instance_url,
      async: false
    }).done(add_jr_data_str);
  };

}).call(this);
