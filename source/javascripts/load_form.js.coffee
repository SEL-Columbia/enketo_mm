window.load_form = (url_root, destination_id)->
  url = "#{url_root}/xslt_form.xml"
  instance_url = "#{url_root}/instance.xml"
  insert_form_to_dom = (node, status, r)->
    document.getElementById(destination_id).innerHTML = r.responseText
  $.ajax({url:url, async:false}).done(insert_form_to_dom)

  add_jr_data_str = (node, status, r)->
    window.jrDataStr = r.responseText
  $.ajax({url:instance_url, async:false}).done(add_jr_data_str)
