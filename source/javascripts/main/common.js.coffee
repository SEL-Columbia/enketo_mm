###
Copyright 2012 Martijn van de Rijdt

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
###

getGetVariable = (variable) ->
  "use strict"
  query = window.location.search.substring(1)
  vars = query.split("&")
  i = 0

  while i < vars.length
    pair = vars[i].split("=")
    return encodeURI(pair[1])  if pair[0] is variable # URLs are case senstive!.toLowerCase();
    i++
  false

DEFAULT_SETTINGS = {}

$ ->
  "use strict"
  window.gui = new GUI()
  gui.init()
#  console = log: ->  if typeof console is "undefined"
#  console.debug = console.log  if typeof (window.console.debug) is "undefined"
#  if getGetVariable("debug") isnt "true"
#    window.console.log = ->
#
#    window.console.debug = ->

class GUI
  init: ->
    "use strict"
    @nav.setup()
    @pages().init()
    @setEventHandlers()
    @setCustomEventHandlers()  if typeof @setCustomEventHandlers is "function"
    $(".dialog [title]").tooltip()
    $(document).trigger "browsersupport", "fancy-visuals"  if Modernizr.borderradius and Modernizr.boxshadow and Modernizr.csstransitions and Modernizr.opacity
    $("footer").detach().appendTo "#container"

  setup: ->
    "use strict"
    $(window).trigger "resize"

  setConsistentColors: ->
    "use strict"

  setEventHandlers: ->
    "use strict"
    that = this
    $("#feedback-bar-close").button(
      icons:
        primary: "ui-icon-closethick"

      text: false
    ).click (event) ->
      event.preventDefault()
      that.hideFeedback()

    $("#page-close").button(
      icons:
        primary: "ui-icon-closethick"

      text: false
    ).click (event) ->
      event.preventDefault()
      that.pages().close()

    $("#feedback-bar-close, #page-close").removeClass().addClass "custom-button ui-widget-header ui-corner-all"
    $(document).on "click", "a[href^=\"#\"]:not([href=\"#\"]):not(nav ul li a)", (event) ->
      href = $(this).attr("href")
      if href isnt "#"
        event.preventDefault()
        $("nav li a[href=\"" + href + "\"]").click()

    $("nav ul li a[href^=\"#\"]").click (event) ->
      event.preventDefault()
      targetPage = $(this).attr("href").substr(1)
      that.pages().open targetPage
      $(this).closest("li").addClass "nav-state-active"

    $(window).on "onlinestatuschange", (e, online) ->
      that.updateStatus.connection online

    $(document).on "edit", "form.jr", (event, status) ->
      that.updateStatus.edit status

    $(document).on "browsersupport", (e, supported) ->
      that.updateStatus.support supported

    $("#page, #feedback-bar").on "change", ->
      that.display()

    $("header #status-connection").click (event) ->
      that.showFeedback $(this).attr("title")
      event.stopPropagation()

    $(window).resize ->
      $("#container").css "top", $("header").outerHeight()
      $("body:not(.no-scroll) #container").height $(window).height() - $("header").outerHeight() - $("#form-controls.bottom").outerHeight()
      navLeft = $("nav").offset().left
      logoRight = $("#logo").offset().left + $("#logo").outerWidth()
      if navLeft < logoRight
        $("#logo").css "visibility", "hidden"
      else
        $("#logo").css "visibility", "visible"


  nav:
    setup: ->
      "use strict"
      $("article.page").each ->
        display = undefined
        title = ""
        id = undefined
        link = undefined
        id = $(this).attr("id")
        if $(this).attr("data-display")
          display = $(this).attr("data-display")
        else
          display = id
        if $(this).attr("data-title")
          title = $(this).attr("data-title")
        else
          title = id
        if $(this).attr("data-ext-link")
          link = $(this).attr("data-ext-link")
        else
          link = "#" + id
        $("<li class=\"ui-corner-tl ui-corner-tr\"><a href=\"" + link + "\" title=\"" + title + "\" >" + display + "</a></li>").appendTo $("nav ul")


    reset: ->
      "use strict"
      $("nav ul li").removeClass "nav-state-active"

  pages: ->
    "use strict"
    @init = ->
      @$pages = $("<pages></pages>")
      $("article.page").detach().appendTo @$pages

    @get = (name) ->
      $page = @$pages.find("article[id=\"" + name + "\"]")
      $page = (if ($page.length > 0) then $page else $("article[id=\"" + name + "\"]"))
      $page

    @isShowing = (name) ->
      idSelector = (if (typeof name isnt "undefined") then "[id=\"" + name + "\"]" else "")
      $("#page article.page" + idSelector).length > 0

    @open = (pg) ->
      $page = undefined
      return  if @isShowing(pg)
      $page = @get(pg)
      return console.error("page not found")  if $page.length isnt 1
      @close()  if @isShowing()
      $("#page-content").prepend($page.show()).trigger "change"
      $("#overlay").show()
      setTimeout (->
        $page.find(".scroll-list").addScrollBar()
        $("#overlay, header").bind "click.pageEvents", ->
          $("#page-close").trigger "click"

      ), 50
      $(window).bind "resize.pageEvents", ->
        $("#page").trigger "change"


    @close = ->
      $page = undefined
      $page = $("#page .page").detach()
      @$pages.append $page
      $("#page").trigger "change"
      @nav.reset()
      $("#overlay").hide()
      $("#overlay, header").unbind ".pageEvents"
      $(window).unbind ".pageEvents"

    this

  showFeedback: (message, duration) ->
    "use strict"
    $msg = undefined
    that = this
    unless duration
      duration = 10 * 1000
    else
      duration = duration * 1000
    $("#feedback-bar p").eq(1).remove()
    if $("#feedback-bar p").html() isnt message
      $msg = $("<p></p>")
      $msg.text message
      $("#feedback-bar").prepend $msg
    $("#feedback-bar").trigger "change"
    setTimeout (->
      $msg.remove()  if typeof $msg isnt "undefined"
      $("#feedback-bar").trigger "change"
    ), duration

  hideFeedback: ->
    "use strict"
    $("#feedback-bar p").remove()
    $("#feedback-bar").trigger "change"

  alert: (message, heading, icon) ->
    "use strict"
    closeFn = undefined
    $alert = $("#dialog-alert")
    heading = heading or "Alert"
    icon = icon or "ui-icon-alert"
    $alert.find("p .ui-icon:eq(0)").removeClass().addClass "ui-icon " + icon
    closeFn = ->
      $alert.dialog "destroy"
      $alert.find("#dialog-alert-msg").text ""

    $alert.find("#dialog-alert-msg").html(message).capitalizeStart()
    $alert.dialog
      title: heading
      modal: true
      resizable: false
      closeOnEscape: true
      buttons:
        Ok: closeFn

      beforeClose: closeFn
      width: 500


  confirm: (text, choices) ->
    "use strict"
    msg = undefined
    heading = undefined
    errorMsg = undefined
    closeFn = undefined
    dialogName = undefined
    $dialog = undefined
    if typeof text is "string"
      msg = text
    else msg = text.msg  if typeof text.msg is "string"
    msg = (if (typeof msg isnt "undefined") then msg else "Please confirm action")
    heading = (if (typeof text.heading isnt "undefined") then text.heading else "Are you sure?")
    dialogName = (if (typeof text.dialog isnt "undefined") then text.dialog else "confirm")
    choices = (if (typeof choices isnt "undefined") then choices else {})
    choices.posButton = choices.posButton or "Confirm"
    choices.negButton = choices.negButton or "Cancel"
    choices.posAction = choices.posAction or ->
      false

    choices.negAction = choices.negAction or ->
      false

    choices.beforeAction = choices.beforeAction or ->

    closeFn = ->
      $dialog.dialog "destroy"
      $dialog.find(".dialog-msg, .dialog-error").text ""
      console.debug "dialog destroyed"

    $dialog = $("#dialog-" + dialogName)
    $dialog.find(".dialog-msg").html(msg).capitalizeStart()
    $dialog.dialog
      open: choices.beforeAction
      title: heading
      resizable: false
      modal: true
      closeOnEscape: true
      buttons: [
        text: choices.posButton
        click: ->
          choices.posAction.call()
          closeFn.call()  if $dialog.find(".dialog-error").text().length is 0
      ,
        text: choices.negButton
        click: ->
          choices.negAction.call()
          closeFn.call()
      ]
      width: 500
      beforeClose: closeFn


  updateStatus:
    connection: (online) ->
      "use strict"
      console.log "updating online status in menu bar to:"
      console.log online
      if online
        $("header #status-connection").removeClass().addClass("ui-icon ui-icon-signal-diag").attr "title", "It appears there is currently an Internet connection available."
      else
        $("header #status-connection").removeClass().addClass("ui-icon ui-icon-cancel").attr "title", "It appears there is currently no Internet connection"

    edit: (editing) ->
      "use strict"
      if editing
        $("header #status-editing").removeClass().addClass("ui-icon ui-icon-pencil").attr "title", "Form is being edited."
      else
        $("header #status-editing").removeClass().attr "title", ""

    support: (supported) ->
      "use strict"
      $page = gui.pages().get("settings")
      if $page.length > 0
        console.debug "updating browser support for " + supported
        $page.find("#settings-browserSupport-" + supported + " span.ui-icon").addClass "ui-icon-check"

  display: ->
    "use strict"
    feedbackTop = undefined
    pageTop = undefined
    $header = $("header")
    $feedback = $("#feedback-bar")
    $page = $("#page")
    if $feedback.find("p").length > 0
      feedbackTop = $header.outerHeight()
      if @pages().isShowing()
        pageTop = $header.outerHeight() + $feedback.outerHeight()
      else
        pageTop = $header.outerHeight() + $feedback.outerHeight() - $page.outerHeight()
    else
      feedbackTop = $header.outerHeight() - $feedback.outerHeight()
      if @pages().isShowing()
        pageTop = $header.outerHeight()
      else
        pageTop = $header.outerHeight() - $page.outerHeight()
    $feedback.css "top", feedbackTop
    $page.css "top", pageTop

  setSettings: (settings) ->
    "use strict"
    $input = undefined
    that = this
    console.log "gui updateSettings() started"
    $.each settings, (key, value) ->
      $input = (if (value) then that.pages().get("settings").find("input[name=\"" + key + "\"][value=\"" + value + "\"]") else that.pages().get("settings").find("input[name=\"" + key + "\"]"))
      value = (if (value) then true else false)
      $input.attr("checked", value).trigger "change"  if $input.length > 0

window.GUI = GUI

###
Pads a string with prefixed zeros until the requested string length is achieved.
@param  {number} digits [description]
@return {String|string}        [description]
###
String::pad = (digits) ->
  x = this
  x = "0" + x  while x.length < digits
  x


#
# *
# *  Provides a central switch for application reporting
# *
# *  It is e.g. possible to output console.error to the user instead of to the console and use
# *  the url debug GET variable to switch back tot the console.
# *  Or it can be customized to switch e.g. console.log off completelt without having to comment out lines
# *  or it can be used to log to a variable/localStorage/sessionStorage and send a crash report to the server
# *  The possibilies to customize this are endless!
# *
# *  NOTE: NOT TESTED WHEN USING APPLICATION CACHE - THIS PROBABLY MESSES THINGS UP!
# 

###
JQuery Extensions *************
###
(($) ->
  "use strict"
  
  # give a set of elements the same (longest) width
  $.fn.equalWidth = ->
    largestWidth = 0
    @each(->
      largestWidth = $(this).width()  if $(this).width() > largestWidth
    ).each ->
      $(this).width largestWidth


  
  #reverse jQuery collection
  $.fn.reverse = [].reverse
  
  # Alphanumeric plugin for form input elements see http://www.itgroup.com.ph/alphanumeric/
  $.fn.alphanumeric = (p) ->
    p = $.extend(
      ichars: "!@#$%^&*()+=[]\\';,/{}|\":<>?~`.- "
      nchars: ""
      allow: ""
    , p)
    @each ->
      p.nchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  if p.nocaps
      p.nchars += "abcdefghijklmnopqrstuvwxyz"  if p.allcaps
      s = p.allow.split("")
      i = 0

      while i < s.length
        s[i] = "\\" + s[i]  unless p.ichars.indexOf(s[i]) is -1
        i++
      p.allow = s.join("|")
      reg = new RegExp(p.allow, "gi")
      ch = p.ichars + p.nchars
      ch = ch.replace(reg, "")
      $(this).keypress (e) ->
        k = undefined
        unless e.charCode
          k = String.fromCharCode(e.which)
        else
          k = String.fromCharCode(e.charCode)
        e.preventDefault()  unless ch.indexOf(k) is -1
        e.preventDefault()  if e.ctrlKey and k is "v"

      $(this).bind "contextmenu", ->
        false



  $.fn.numeric = (p) ->
    az = "abcdefghijklmnopqrstuvwxyz"
    az += az.toUpperCase()
    p = $.extend(
      nchars: az
    , p)
    @each ->
      $(this).alphanumeric p


  $.fn.alpha = (p) ->
    nm = "1234567890"
    p = $.extend(
      nchars: nm
    , p)
    @each ->
      $(this).alphanumeric p


  
  # plugin to select the first word(s) of a string and capitalize it
  $.fn.capitalizeStart = (numWords) ->
    numWords = 1  unless numWords
    node = @contents().filter(->
      @nodeType is 3
    ).first()
    text = node.text()
    first = text.split(" ", numWords).join(" ")
    return  unless node.length
    node[0].nodeValue = text.slice(first.length)
    node.before "<span class=\"capitalize\">" + first + "</span>"

  
  #function to add a scrollbar to the list of records, if necessary
  $.fn.addScrollBar = ->
    @each ->
      
      #scrollpane parts
      scrollPane = $(this) #('#records-saved-pane'),
      scrollContent = $(this).find("ol") #('#records-saved ol');
      
      #change the main div to overflow-hidden as we can use the slider now
      scrollPane.css "overflow", "hidden"
      
      #compare the height of the scroll content to the scroll pane to see if we need a scrollbar
      difference = scrollContent.height() - scrollPane.height() #eg it's 200px longer
      if difference > 0 #if the scrollbar is needed, set it up...
        proportion = difference / scrollContent.height() #eg 200px/500px
        handleHeight = Math.round((1 - proportion) * scrollPane.height()) #set the proportional height - round it to make sure everything adds up correctly later on
        handleHeight -= handleHeight % 2 #ensure the handle height is exactly divisible by two
        $("#records .column.middle").html "<div id=\"slider-wrap\" class=\"ui-corner-all\"><div id=\"slider-vertical\"></div></div>" #append the necessary divs so they're only there if needed
        $("#slider-wrap").height scrollPane.outerHeight() #set the height of the slider bar to that of the scroll pane
        
        #set up the slider
        $("#slider-vertical").slider
          orientation: "vertical"
          range: "max"
          min: 0
          max: 100
          value: 100
          slide: (event, ui) ->
            topValue = -((100 - ui.value) * difference / 100)
            
            #console.log('new topValue:'+topValue);
            scrollContent.css top: topValue #move the top up (negative value) by the percentage the slider has been moved times the difference in height

        
        # align the slider with the top of the scroll pane
        $("#slider-wrap").css "margin-top", $("#records-saved h3").outerHeight(true)
        
        #set the handle height and bottom margin so the middle of the handle is in line with the slider
        $(".ui-slider-handle").css
          height: handleHeight
          "margin-bottom": -0.5 * handleHeight

        origSliderHeight = $("#slider-vertical").height() #read the original slider height
        sliderHeight = origSliderHeight - handleHeight #the height through which the handle can move needs to be the original height minus the handle height
        sliderMargin = (origSliderHeight - sliderHeight) * 0.5 #so the slider needs to have both top and bottom margins equal to half the difference
        $(".ui-slider").css #set the slider height and margins
          height: sliderHeight
          "margin-top": sliderMargin

        
        #position the slider range div at the top of the slider wrap - this ensures clicks above the area through which the handle moves are OK
        $(".ui-slider-range").css top: -sliderMargin
        
        #add a click function to ensure clicks below the area through which the handle moves are OK
        $("#slider-wrap").click -> #this means the bottom of the slider beyond the slider range is clicked, so move the slider right down
          $("#slider-vertical").slider "value", 0
          scrollContent.css top: -difference

) jQuery