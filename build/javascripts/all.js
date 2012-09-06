(function() {

  if (!(window.console && console.log)) {
    (function() {
      var console, length, methods, noop, _results;
      noop = function() {};
      methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
      length = methods.length;
      console = window.console = {};
      _results = [];
      while (length--) {
        _results.push(console[methods[length]] = noop);
      }
      return _results;
    })();
  }

  window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments_);
    if (this.console) {
      return console.log(Array.prototype.slice.call(arguments_));
    }
  };

}).call(this);
/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true*//*global Modernizr, console:true*/
// CHANGE: it would be better to remove references to store and form in common.js
//
// Copyright 2012 Martijn van de Rijdt
/************ Global variables ***************/


var /**@type {GUI}*/ gui;

//form = null,
var DEFAULT_SETTINGS = {};
//var	_$pages; //getPage, addScrollBar, display, buttonArray, setSettings;
	//resetForm, setSettings, loadForm, deleteForm, saveForm,
// !Document.ready()
/************ Document Ready ****************/
$(document).ready(function(){
	"use strict";
	gui = new GUI();
	gui.init();
	// avoid windows console errors
	if (typeof console == "undefined") {console = {log: function(){}};}
	if (typeof (window.console.debug) == "undefined") {console.debug = console.log;}

	if (getGetVariable('debug') !== 'true'){
		window.console.log = function(){};
		window.console.debug = function(){};
	}
});

// !Global Functions
/************ Global Functions ***************/



/* !GUI Class */
//The GUI object deals with the main GUI elements (but not the survey form elements)
/**
 *
 * @constructor
 *
 * Function (Class): GUI
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
function GUI(){
	"use strict";
	//var fbBar, //true if feedbackBar is shown
	//	page, //true if page is shown
	//	feedbackTimeout,
		//headerEl, feedbackEl, pageEl, confirmEl, alertEl, $form,
		//browserSupport = {'offline-launch':false, 'local-storage':false, 'fancy-visuals':false},
		//updateEditStatus,
		//_this=this;
		//$form = $('form.jr:eq(0)');
}

GUI.prototype.init = function(){
	"use strict";
	// setting up UI elements
	
	
	
	this.nav.setup();
	//setTabs();
	// setting consistent theme colors using a JQuery UI theme
	//this.setConsistentColors();
	this.pages().init();
	
	// setup eventHandlers
	this.setEventHandlers();
	// setup additional 'custom' eventHandlers declared other js file
	if (typeof this.setCustomEventHandlers === 'function'){
		this.setCustomEventHandlers();
	}
	
	// the settings are retrieved from storage and applied before the pages are removed from the DOM
	
			//tooltips on all elements with a title
	//$('[title]').tooltip();
	//$("[title]").tipTip();
	//$("[title]").tipsy({gravity: $.fn.tipsy.autoNS});
	$('.dialog [title]').tooltip();
	//transform comboboxes
	//$('#forms-saved-names').combobox();
	/*$('#forms-saved ol').selectable({
		stop: function() {
			var recordName;
			alert ($( ".ui-selected").text());
			$('ui-selected').removeClass('ui-selected');
			$(this).selectable('destroy');

		}
	});*/

	// checking for support for specific fancy css3 visual stuff
	if (Modernizr.borderradius && Modernizr.boxshadow && Modernizr.csstransitions && Modernizr.opacity){
		$(document).trigger('browsersupport', 'fancy-visuals');
	}

	$('footer').detach().appendTo('#container');
	//this.nav.reset();
};

GUI.prototype.setup = function(){
	"use strict";
	// final setup of GUI object
		//setSettings();
		// set height of scrollable container by calling resize event
		$(window).trigger('resize');
};


	
//	this.setBrowserSupport = function(propObj){
//		for (var propName in propObj){
//			browserSupport[propName] = propObj[propName];
//			//console.log('just set browser support property: '+propName+' to:'+propObj[propName]); // DEBUG
//		}
//	};
	
	
	// setting consistent theme colors, the purpose of using this function (instead of css stylesheet adjustments)
	// is to be able to easily switch to another jQuery UI theme
GUI.prototype.setConsistentColors = function(){
	"use strict";
	//$('body').removeClass('ui-widget-content'); //???????


	//var bodyBackgroundColor, pageBackgroundColor, headerHighlightColor, headerBorderColor, headerBackgroundColor, headerNavTextColor, //mainContentBackground,
//		buttonBackgroundColorDefault,buttonBackgroundColorHover, buttonBackgroundColorActive;
//	//colors used for different states in nav menu (see setEventHandlers())
//	headerHighlightColor = /** @type {string} */ $('#feedback-bar').css('background-color');
//	headerBorderColor =  /** @type {string} */ $('header').css('border-top-color');
//	headerBackgroundColor =  /** @type {string} */ $('header').css('background-color');
//	//mainContentBackground = $('body').addClass('ui-widget-content').css('background');
	

//	$('nav').addClass('ui-state-default'); //trick
//	headerNavTextColor =  /** @type {string} */ $('nav').css('color');
//	buttonBackgroundColorDefault =  /** @type {string} */ $('nav').css('background-color');
//	$('nav').addClass('ui-state-hover');
//	buttonBackgroundColorHover =  /** @type {string} */ $('nav').css('background-color');
//	$('nav').addClass('ui-state-active');
//	buttonBackgroundColorActive =  /** @type {string} */ $('nav').css('background-color');
//	$('nav').removeClass();
			
	//$('#logo').css('color', headerHighlightColor);

	//$('#page, #form-controls').css('background-image','none'); //CHANGE: DO THIS IN CSS STYLESHEET INSTEAD

	//$('#page, #component').css('color', headerHighlightColor);
	//$('#survey-info').css('color',headerBorderColor);

	//bodyBackgroundColor = /** @type {string} */ $('body').addClass('ui-widget-shadow').css('background-color');
	//$('body').css('background-color', bodyBackgroundColor).removeClass('ui-widget-shadow');
	//$('body').addClass('ui-widget-shadow') //trick
	//	.css('background-color', $('body').css('background-color'))
	//	.removeClass('ui-widget-shadow');
	//$('.question').css('border-color', $('body').css('background-color'));
	//pageBackgroundColor = /** @type {string} */ $('#page-content').addClass('ui-widget-overlay').css('background-color');
	//$('#page-content, #overlay').css('background-color', pageBackgroundColor).removeClass('ui-widget-overlay');
	//$('#page-content, #overlay').addClass('ui-widget-overlay') // trick
	//	.css('background-color', $('#page-content').css('background-color'))
	//	.removeClass('ui-widget-overlay');

	//all links in articles .page
	//$('.page a, .page a:link, .page a:visited').css('color', buttonBackgroundColorDefault)
//		.hover(function(){
//			$(this).css('color', buttonBackgroundColorHover);
//		}, function(){
//			$(this).css('color', buttonBackgroundColorDefault);
//		})
//		.mousedown(function(){
//			$(this).css('color', buttonBackgroundColorActive);
//		})
//		.mouseup(function(){
//			$(this).css('color', buttonBackgroundColorDefault);
//		});

	//form background on page with tabs
	//$('.tabs-nohdr .ui-tabs-panel').css('background-color', '#FEEEBD');

	//$('#export-excel').button({'icons': {'primary':"ui-icon-suitcase"}});

	//set navigation menu colors;
	
};
	
GUI.prototype.setEventHandlers = function(){
	"use strict";
	var that=this;
	
	// close 'buttons' on page and feedback bar
	$('#feedback-bar-close').button({'icons':{'primary': "ui-icon-closethick"}, 'text': false})
		.click(function(event){
			event.preventDefault();
			that.hideFeedback();
		});
	$('#page-close').button({'icons':{'primary': "ui-icon-closethick"}, 'text': false})
		.click(function(event){
			event.preventDefault();
			that.pages().close();
		});
	// override style of some buttons and give them a 'custom-button class'
	$('#feedback-bar-close, #page-close').removeClass().addClass('custom-button ui-widget-header ui-corner-all');
	
	// capture all internal links to navigation menu items (except the links in the navigation menu itself)
	$(document).on('click', 'a[href^="#"]:not([href="#"]):not(nav ul li a)', function(event){
		var href = $(this).attr('href');
		//console.log('captured click to nav page, href='+href);
		//if href is not just an empty anchor it is an internal link and will trigger a navigation menu click
		if (href !== '#'){
			event.preventDefault();
			$('nav li a[href="'+href+'"]').click();
		}
	});
	
	//particularly relevant in launch component where popstate is triggered when # is added to url
//	$(document).on('click', $('a[href="#"]'), function(event){
//		event.preventDefault();
//	});

	// event handlers for navigation menu
	$('nav ul li a[href^="#"]')
		.click(function(event){
			event.preventDefault();
			var targetPage = $(this).attr('href').substr(1);
			that.pages().open(targetPage);
			$(this).closest('li').addClass('nav-state-active');//.css('border-color', headerBorderColor);
			//$(this).css('color', headerHighlightColor);
		});
		//.hover(function(){
//;			$(this).closest('li').addClass('nav-state-hover');
//;			//$(this).css('color', buttonBackgroundColorHover);
//;			//$('nav ul li:not(.active)').css('border-color', headerBackgroundColor);
//;			//$(this).closest('li:not(.active)').css('border-color', headerHighlightColor)
//;				//.find('a').css('color', buttonBackgroundColorHover);
//;		}, function(){
//;			$(this).closest('li').removeClass('nav-state-hover');
//;			//$('nav ul li:not(.active)').css('border-color', headerBackgroundColor)
//;			//	.find('a').css('color', buttonBackgroundColorDefault);
//		});
	
	// handlers for status icons in header
	$(window).on('onlinestatuschange', function(e,online){
		that.updateStatus.connection(online);
		});

	$(document).on('edit', 'form.jr', function(event, status){
		//console.log('gui updating edit status icon');
		that.updateStatus.edit(status);
	});

	$(document).on('browsersupport', function(e, supported){
		that.updateStatus.support(supported);
	});

	$('#page, #feedback-bar').on('change', function(){
		that.display();
	});
			
	// more info on connection status after clicking icon
	$('header #status-connection')
		.click(function(event){
			that.showFeedback($(this).attr('title'));
			event.stopPropagation(); //prevent closing of simultaneously shown page when clicking icon
			//event.cancelBubble(); //IE
		});
		
	$(window).resize(function(){ //move this when feedback bar is shown?
		
		//console.log('resize event called, window width is '+$(window).width()); //DEBUG
		
		$('#container').css('top', $('header').outerHeight());
		
		// resizing scrollable container\
		$('body:not(.no-scroll) #container')
			.height($(window).height()-$('header').outerHeight()-$('#form-controls.bottom').outerHeight());
		
		// replacing form controls in mobile setting // REPLACE: SHOULD MOVE WITH CSS
		//$('body.no-scroll #form-controls')
		//	.css('height',$('#form-controls').height()).css('top', $('header').outerHeight()+$('#container').outerHeight());
		
		// hide logo if the navigation menu starts overlapping
		var navLeft = $('nav').offset().left;
		var logoRight = $('#logo').offset().left+$('#logo').outerWidth();
		//console.log('nav left:'+navLeft+' logo right:'+logoRight); // DEBUG
		if (navLeft < logoRight){
			$('#logo').css('visibility', 'hidden');
		}
		else {
			$('#logo').css('visibility', 'visible');
		}
					
	});
};
	
GUI.prototype.nav = {
	setup : function(){
		"use strict";
		$('article.page').each(function(){
			var display, title='', id, link;
			id=$(this).attr('id');
			if ($(this).attr('data-display')){
				display = $(this).attr('data-display');
			}
			else display = id;
			if ($(this).attr('data-title')){
				title = $(this).attr('data-title');
			}
			else title = id;
			if ($(this).attr('data-ext-link')){
				link = $(this).attr('data-ext-link');
			}
			else link = '#'+id;
			$('<li class="ui-corner-tl ui-corner-tr"><a href="'+link+'" title="'+title+'" >'+display+'</a></li>')
				.appendTo($('nav ul'));
		
		});
	},
	reset : function(){
		"use strict";
		$('nav ul li').removeClass('nav-state-active');//.css('border-color', headerBackgroundColor);
		//$('nav ul li a').css('color', buttonBackgroundColorDefault);
	}
};
	
	//function setTabs(){
	//	$('.main article').each(function(){
	//		var display, title='', id, link;
	//		id=$(this).attr('id');
	//		if ($(this).attr('data-display')){
	//			display = $(this).attr('data-display');
	//		}
	//		else display = id;
	//		if ($(this).attr('data-title')){
	//			title = $(this).attr('data-title');
	//		}
	//		else title = id;
	//		if ($(this).attr('data-ext-link')){
	//			link = $(this).attr('data-ext-link');
	//		}
	//		else link = '#'+id;
	//		$('<a href="'+link+'" title="'+title+'" >'+display+'</a>')
	//			.appendTo($('#tabs'));
	//	});
	//}
	//

GUI.prototype.pages = function(){
	"use strict";

	this.init = function(){

		//this.showing = false;
		this.$pages = $('<pages></pages>');// placeholder 'parent' element for the articles (pages)
		// detaching pages from DOM and storing them in the pages variable
		$('article.page').detach().appendTo(this.$pages);//.css('display','block');
	};

	this.get = function(name){

		var $page = this.$pages.find('article[id="'+name+'"]');//.clone(true);
		//switch(name){
		//	case 'records':
			//_this.updateRecordList(page); // ?? Why does call with this.up.. not work?
		//		break;
		//	case 'settings':
		//}
		$page = ($page.length > 0) ? $page : $('article[id="'+name+'"]');
		
		return $page ;
		//}
	};
		
	this.isShowing = function(name){
		//no name means any page
		var idSelector = (typeof name !== 'undefined') ? '[id="'+name+'"]' : '';
		return ( $('#page article.page'+idSelector).length > 0 );
	};
		
	this.open = function(pg){
		var $page;
		if (this.isShowing(pg)){
			return;
		}

		$page = this.get(pg);//outsidePage;
		//console.debug('opening page '+pg);
		
		if ($page.length !== 1){
			return console.error('page not found');
		}

		if(this.isShowing()){
			this.close();
		}
			
		$('#page-content').prepend($page.show()).trigger('change');
		$('#overlay').show();

		//for some reason, the scrollbar needs to be added after a short delay (default duration of show() maybe)
		//similarly adding the event handler needs to be done a delay otherwise it picks up an even(?) instantly
		//addScrollBar should be called each time page loads because record list will change
		setTimeout(function(){
			$page.find('.scroll-list').addScrollBar();
			$('#overlay, header').bind('click.pageEvents', function(){
				//triggers a click of the page close button
				$('#page-close').trigger('click');
			});
		}, 50);
		
		// if the page is visible as well as the feedbackbar the display() method should be called if the window is resized
		$(window).bind('resize.pageEvents', function(){
			$('#page').trigger('change');
		});
	};
		
	this.close = function(){
		var $page;
		//console.log('closePage() triggered');
		$page = $('#page .page').detach();
		this.$pages.append($page);
		$('#page').trigger('change');
		this.nav.reset();
		$('#overlay').hide();
		$('#overlay, header').unbind('.pageEvents');
		$(window).unbind('.pageEvents');
	};

	return this;
};


/**
 * @param {string=} message
 * @param {number=} duration
 */
GUI.prototype.showFeedback = function(message, duration){
	"use strict"; // duration in seconds
	var $msg,
		that = this;
	
	if (!duration){
		duration =  10 * 1000;// 10 seconds
	}
	else {
		duration = duration*1000; // convert to milliseconds
	}
	
	// max 2 messages displayed
	$('#feedback-bar p').eq(1).remove();
	
	// if an already shown message isn't exactly the same
	if($('#feedback-bar p').html() !== message){//} || feedbackEl.find('p').length === 0){
		$msg = $('<p></p>');
		$msg.text(message); // encodes special characters
		$('#feedback-bar').prepend($msg);
	}
	$('#feedback-bar').trigger('change');

	// automatically remove feedback after a period
	setTimeout(function(){
		if(typeof $msg !== 'undefined'){
			$msg.remove(); //find('#feedback-bar-message').empty();
		}
		$('#feedback-bar').trigger('change');
	}, duration);
};
	
GUI.prototype.hideFeedback = function(){
	"use strict";
	$('#feedback-bar p').remove();
	$('#feedback-bar').trigger('change'); //find('#feedback-bar-message').empty();
};

/**
 * @param {string} message
 * @param {string=} heading
 * @param {string=} icon css class of icon
 */
GUI.prototype.alert = function(message, heading, icon){
	"use strict";
	var closeFn,
		$alert = $('#dialog-alert');

	heading = heading || 'Alert';
	icon = icon || 'ui-icon-alert';

	$alert.find('p .ui-icon:eq(0)').removeClass().addClass('ui-icon '+icon);
	//to call when dialog closes
	closeFn = function(){
		$alert.dialog('destroy');
		$alert.find('#dialog-alert-msg').text('');
		//console.log('alert dialog destroyed');
	};

	//write content into alert dialog
	$alert.find('#dialog-alert-msg').html(message).capitalizeStart();

	$alert.dialog({
		'title': heading,
		'modal': true,
		'resizable': false,
		'closeOnEscape': true,
		'buttons': {
			"Ok": closeFn
		},
		'beforeClose': closeFn,
		'width': 500
	});
};
	
	/**
	 * Function: confirm
	 *
	 * description
	 *
	 *   @param {?(Object.<string, (string|boolean)>|string)=} text - In its simplest form this is just a string but it can
	 *                                                         also an object with parameters msg, heading and errorMsg.
	 *   @param {Object=} choices - [type/description]
	 */
GUI.prototype.confirm = function(text, choices){
	"use strict";
	var msg, heading, errorMsg, closeFn, dialogName, $dialog;
	
	if (typeof text === 'string'){
		msg = text;
	}
	else if (typeof text.msg === 'string'){
		msg = text.msg;
	}
	
	msg = (typeof msg !== 'undefined') ? msg : 'Please confirm action';
	heading = (typeof text.heading !== 'undefined') ? text.heading : 'Are you sure?';
	//errorMsg = (typeof text.errorMsg !== 'undefined') ? text.errorMsg : '';
	dialogName = (typeof text.dialog !== 'undefined') ? text.dialog : 'confirm';
	choices = (typeof choices !== 'undefined') ? choices : {};
	choices.posButton = choices.posButton || 'Confirm';
	choices.negButton = choices.negButton || 'Cancel';
	choices.posAction = choices.posAction || function(){return false;};
	choices.negAction = choices.negAction || function(){return false;};
	choices.beforeAction = choices.beforeAction || function(){};

	closeFn = function(){
		$dialog.dialog('destroy');
		$dialog.find('.dialog-msg, .dialog-error').text('');
		console.debug('dialog destroyed');
		//choices.afterAction.call();
	};

	$dialog = $('#dialog-'+dialogName);
	
	//write content into confirmation dialog
	$dialog.find('.dialog-msg').html(msg).capitalizeStart();
	//$dialog.find('.dialog-error').text(errorMsg).capitalizeStart();

	//instantiate dialog
	$dialog.dialog({
		'open': choices.beforeAction,
		'title': heading,
		'resizable': false,
		'modal': true,
		'closeOnEscape': true,
		'buttons': [
			{
				text: choices.posButton,
				click: function(){
					choices.posAction.call();
					//console.log('error text: '+$dialog.find('.dialog-error').text());
					if ($dialog.find('.dialog-error').text().length === 0){
						closeFn.call();
					}
				}
			},
			{
				text: choices.negButton,
				click: function(){
					choices.negAction.call();
					closeFn.call();
				}
			}
		],
		'width': 500,
		'beforeClose': closeFn
	});

};
	
GUI.prototype.updateStatus = {
	connection : function(online) {
		"use strict";
		console.log('updating online status in menu bar to:');
		console.log(online);
		if (online) {
			$('header #status-connection').removeClass().addClass('ui-icon ui-icon-signal-diag')
				.attr('title', 'It appears there is currently an Internet connection available.');
		}
		else {
			$('header #status-connection').removeClass().addClass('ui-icon ui-icon-cancel')
				.attr('title', 'It appears there is currently no Internet connection');
		}
	},
	edit : function(editing){
		"use strict";
		if (editing) {
			$('header #status-editing').removeClass().addClass('ui-icon ui-icon-pencil')
				.attr('title', 'Form is being edited.');
		}
		else {
			$('header #status-editing').removeClass().attr('title', '');
		}
	},
	support : function(supported){
		"use strict";
		//console.debug('"this" in updateStatus.supported:');
		//console.debug(this);
		//BAD BAD BAD to refer to gui here!!
		var $page = gui.pages().get('settings');// : $('#settings');
		if ($page.length > 0){
			console.debug('updating browser support for '+supported);
			$page.find('#settings-browserSupport-'+supported+' span.ui-icon').addClass('ui-icon-check');
		}
	}
};


//function to operate the sliders that reveal the feedback bar and page by changing their css 'top' property
GUI.prototype.display = function(){
	"use strict";
	////console.log('display() called');
	var feedbackTop, pageTop,
		$header = $('header'),
		$feedback = $('#feedback-bar'),
		$page = $('#page');
	//the below can probably be simplified, is the this.page().isVisible check necessary at all?
	if ($feedback.find('p').length > 0){
		feedbackTop = $header.outerHeight(); // shows feedback-bar
		if (this.pages().isShowing()){
			pageTop = $header.outerHeight() + $feedback.outerHeight(); // shows page
		}
		else{
			pageTop = $header.outerHeight() + $feedback.outerHeight() - $page.outerHeight(); // hides page
		}
	}
	else{
		feedbackTop = $header.outerHeight() - $feedback.outerHeight();
		if (this.pages().isShowing()){
			pageTop = $header.outerHeight(); // shows page
		}
		else{
			pageTop = $header.outerHeight() - $page.outerHeight();
		}
	}
	////console.log ('top feedback: '+feedbackTop); //DEBUG
	////console.log ('top page: '+pageTop); //DEBUG
	$feedback.css('top', feedbackTop);
	$page.css('top', pageTop);
};

/**
 * [updateSettings description] Updates the settings in the GUI and triggers change events (used when app launches) that are handled in customEventHandlers.
 * It is generic and could be used for any kind of radio or checkbox settings.
 *
 * @param  {Object.<string, (boolean|string)>} settings [description]
 *
 */
GUI.prototype.setSettings = function(settings){
	"use strict";
	var $input,
		that = this;
	console.log('gui updateSettings() started'); //DEBUG
	
	$.each(settings, function(key, value){ //iterate through each item in object
		//console.log('key:'+key+' value:'+value);// DEBUG
		$input = (value) ? that.pages().get('settings').find('input[name="'+key+'"][value="'+value+'"]') :
			that.pages().get('settings').find('input[name="'+key+'"]');

		value = (value) ? true : false;
		if ($input.length > 0){
			//could change this to only trigger change event if value is changed but not so important
			$input.attr('checked', value).trigger('change');
		}
	});
};

function getGetVariable(variable) {
	"use strict";
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return encodeURI(pair[1]);// URLs are case senstive!.toLowerCase();
		}
	}
	return false;
}




/**
 * Pads a string with prefixed zeros until the requested string length is achieved.
 * @param  {number} digits [description]
 * @return {String|string}        [description]
 */
String.prototype.pad = function(digits){
		var x = this;
		while (x.length < digits){
			x = '0'+x;
		}
		return x;
};
/*
 *
 *  Provides a central switch for application reporting
 *
 *  It is e.g. possible to output console.error to the user instead of to the console and use
 *  the url debug GET variable to switch back tot the console.
 *  Or it can be customized to switch e.g. console.log off completelt without having to comment out lines
 *  or it can be used to log to a variable/localStorage/sessionStorage and send a crash report to the server
 *  The possibilies to customize this are endless!
 *
 *  NOTE: NOT TESTED WHEN USING APPLICATION CACHE - THIS PROBABLY MESSES THINGS UP!
 */
 
/**
 * @constructor
 *
 * Function (Class): Report
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
//function Report(){
//	"use strict";
//	var output;
//	var debug = getGetVariable('debug') || false;//

//	// avoid windows console errors
//	if (typeof(window.console) == "undefined") {console = {log: function(){}};}
//	if (typeof(console.debug) == "undefined") {console.debug = console.log;}
//
//	console.log('Report object initialized with debug = '+debug);
//
//	this.error = function(message){
//		output('error', message);
//	};
//
//	this.log = function(message){
//		output('log', message);
//	};
//
//	this.debug = function(message){
//		output('debug', message);
//	};
//
//	output = function(type, message){
//		// if in debug mode or if gui isn't available: just output to console
//		if (typeof gui == 'undefined' || (typeof debug !== 'undefined' && debug == 'true') ){
//			console[type](message);
//		}
//		// if gui is available and type = error
//		else if (type === 'error'){
//			console[type](message);
//			//gui.alert('You discovered a bug in the application or an error in the form! (see javascript console) Please report this to rapaide@aidwebsolutions.com.');
//		}
//		// if gui is available
//		else {
//			//nada
//		}
//	};
//}

/************ JQuery Extensions **************/

	
(function($){
	"use strict";
	// give a set of elements the same (longest) width
	$.fn.equalWidth = function(){
		var largestWidth = 0;
		return this.each(function(){
			if ($(this).width() > largestWidth) {
				largestWidth = $(this).width();
			}
		}).each(function(){
			$(this).width(largestWidth);
		});
	};
	
	//reverse jQuery collection
	$.fn.reverse = [].reverse;
	
	// Alphanumeric plugin for form input elements see http://www.itgroup.com.ph/alphanumeric/
	$.fn.alphanumeric = function(p) {

		p = $.extend({
			ichars: "!@#$%^&*()+=[]\\\';,/{}|\":<>?~`.- ",
			nchars: "",
			allow: ""
		}, p);

		return this.each
			(
				function()
				{

					if (p.nocaps) p.nchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
					if (p.allcaps) p.nchars += "abcdefghijklmnopqrstuvwxyz";
					
					var s = p.allow.split('');
					for (var i=0;i<s.length;i++) if (p.ichars.indexOf(s[i]) != -1) s[i] = "\\" + s[i];
					p.allow = s.join('|');
					
					var reg = new RegExp(p.allow,'gi');
					var ch = p.ichars + p.nchars;
					ch = ch.replace(reg,'');

					$(this).keypress
						(
							function (e)
								{
									var k;
									if (!e.charCode) k = String.fromCharCode(e.which);
										else k = String.fromCharCode(e.charCode);
										
									if (ch.indexOf(k) != -1) e.preventDefault();
									if (e.ctrlKey&&k=='v') e.preventDefault();
									
								}
								
						);
						
					$(this).bind('contextmenu',function () {return false;});
									
				}
			);

	};

	$.fn.numeric = function(p) {
	
		var az = "abcdefghijklmnopqrstuvwxyz";
		az += az.toUpperCase();

		p = $.extend({
			nchars: az
		}, p);

		return this.each (function()
			{
				$(this).alphanumeric(p);
			}
		);
			
	};
	
	$.fn.alpha = function(p) {

		var nm = "1234567890";

		p = $.extend({
			nchars: nm
		}, p);

		return this.each (function()
			{
				$(this).alphanumeric(p);
			}
		);
			
	};

	// plugin to select the first word(s) of a string and capitalize it
	$.fn.capitalizeStart = function (numWords) {
		if(!numWords){
			numWords = 1;
		}
		var node = this.contents().filter(function () {
			return this.nodeType == 3;
			}).first(),
			text = node.text(),
			first = text.split(" ", numWords).join(" ");

		if (!node.length)
			return;
	
		node[0].nodeValue = text.slice(first.length);
		node.before('<span class="capitalize">' + first + '</span>');
	};


	//function to add a scrollbar to the list of records, if necessary
	$.fn.addScrollBar = function(){
		return this.each(function(){
			//scrollpane parts
			var scrollPane = $(this), //('#records-saved-pane'),
				scrollContent = $(this).find('ol');//('#records-saved ol');

			//change the main div to overflow-hidden as we can use the slider now
			scrollPane.css('overflow','hidden');
			
			//compare the height of the scroll content to the scroll pane to see if we need a scrollbar
			var difference = scrollContent.height()-scrollPane.height();//eg it's 200px longer
			
			if(difference>0){//if the scrollbar is needed, set it up...
				var proportion = difference / scrollContent.height();//eg 200px/500px
				var handleHeight = Math.round((1-proportion)*scrollPane.height());//set the proportional height - round it to make sure everything adds up correctly later on
				handleHeight -= handleHeight%2; //ensure the handle height is exactly divisible by two
				
				$('#records .column.middle').html('<div id="slider-wrap" class="ui-corner-all"><div id="slider-vertical"></div></div>');//append the necessary divs so they're only there if needed
				$("#slider-wrap").height(scrollPane.outerHeight());//set the height of the slider bar to that of the scroll pane
				
				//set up the slider
				$('#slider-vertical').slider({
					orientation: 'vertical',
					range: 'max',
					min: 0,
					max: 100,
					value: 100,
					slide: function(event, ui) {
						var topValue = -((100-ui.value)*difference/100);
						//console.log('new topValue:'+topValue);
						scrollContent.css({top:topValue});//move the top up (negative value) by the percentage the slider has been moved times the difference in height
					}
				});

				// align the slider with the top of the scroll pane
				$('#slider-wrap').css('margin-top', $('#records-saved h3').outerHeight(true));
				//set the handle height and bottom margin so the middle of the handle is in line with the slider
				$(".ui-slider-handle").css({height:handleHeight,'margin-bottom':-0.5*handleHeight});

				var origSliderHeight = $("#slider-vertical").height();//read the original slider height
				var sliderHeight = origSliderHeight - handleHeight ;//the height through which the handle can move needs to be the original height minus the handle height
				var sliderMargin =  (origSliderHeight - sliderHeight)*0.5;//so the slider needs to have both top and bottom margins equal to half the difference
				$(".ui-slider").css({height:sliderHeight,'margin-top':sliderMargin});//set the slider height and margins
				
				//position the slider range div at the top of the slider wrap - this ensures clicks above the area through which the handle moves are OK
				$(".ui-slider-range").css({top:-sliderMargin});
				
				//add a click function to ensure clicks below the area through which the handle moves are OK
				$("#slider-wrap").click(function(){//this means the bottom of the slider beyond the slider range is clicked, so move the slider right down
					$("#slider-vertical").slider("value", 0);
					scrollContent.css({top:-difference});
				});
				
				//additional code for mousewheel
				//$(".scrol-list, #slider-wrap").mousewheel(function(event, delta){
				//	var speed = 5;
				//	var sliderVal = $("#slider-vertical").slider("value");//read current value of the slider
				//
				//	sliderVal += (delta*speed);//increment the current value
				//	$("#slider-vertical").slider("value", sliderVal);//and set the new value of the slider
				//
				//	var topValue = -((100-sliderVal)*difference/100);//calculate the content top from the slider position
				//
				//	if (topValue>0) topValue = 0;//stop the content scrolling down too much
				//	if (Math.abs(topValue)>difference) topValue = (-1)*difference;//stop the content scrolling up too much
				//
				//	scrollContent.css({top:topValue});//move the content to the new position
				//	event.preventDefault();//stop any default behaviour
				//});
			}
		});
	};

})(jQuery);

/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true sub:true*//*global gui, store, Form, DEFAULT_SETTINGS, Modernizr*/

/* !Storage Class */
/**
 *
 *
 * Function (Class): Storage
 *
 * description
 *
 * Returns:
 *
 *   return description
 *
 * @constructor
 */

function StorageLocal(){
	"use strict";
	var RESERVED_KEYS = ['__settings', 'null','__history', 'Firebug', 'undefined', '__bookmark', '__counter'];

	var localStorage = window.localStorage;
	// Could be replaced by Modernizr function if Modernizr remains used in final version
	this.isSupported = function() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	};
	
	//used for testing
	this.getForbiddenKeys = function(){
		return RESERVED_KEYS;
	};
		
	// saves a data object in JSON format (string)
	// ADD CONSIDER separating this function for surveyData and other record types as there seems very little that is shared between record types
	/**
	 * [setRecord description]
	 * @param {string} newKey    [description]
	 * @param {Object.<(string|number), (string|boolean|number)>} record     [description]
	 * @param {boolean=} del [description] used to change name of existing record and delete old record
	 * @param {boolean=} overwrite [description] overwrite is only used when there is *another* record with the same new name (not when simply updating current form)
	 * @param {?string=} oldKey    [description]
	 * @return {string}
	 */
	this.setRecord = function(newKey, record, del, overwrite, oldKey) {
		console.debug('setRecord received record with final: '+record['ready']);
		//console.debug(record);
		//var record = rec;
		if (!newKey || newKey.length < 1){
			console.error('no key provided for record');
			return 'require';
		}
		newKey = newKey.trim();
		oldKey = (typeof oldKey === 'string') ? oldKey.trim() : null;
		overwrite = (typeof overwrite !== 'undefined' && overwrite === true) ? true : false;
		
		// ADD: CATCH ERROR WHEN LOCALSTORAGE SPACE IS FULL
		
		//using the knowledge that only survey data is provided as a "data" property (and is  a string)
		if (typeof record['data'] === 'string' && isReservedKey(newKey)){
			return 'forbidden';
		}
		// if the record has an existing key, but was not loaded from the store with this key, do not overwrite
		if (typeof record['data'] === 'string' && oldKey !== newKey && isExistingKey(newKey) && overwrite !== true) {
			
			//if (oldKey !== newKey && overwrite === false) {
			return 'existing';
			//}
		}
		try {
			//add timestamp to survey data
			if (typeof record['data'] === 'string'){
				record['lastSaved'] = (new Date()).getTime();
				//if (newKey == this.getCounterValue() ){
				localStorage.setItem('__counter', JSON.stringify({'counter': this.getCounterValue()}));
				//}
			}
			//record['ready'] = (Boolean(record['ready']) === true) ? true : false;
			//console.log('lastSaved: '+data['lastSaved']);
			localStorage.setItem(newKey, JSON.stringify(record)); //{
				//"data": record['data'], "ready": record['ready'], "lastSaved":record['lastSaved']
			//}));
			
			console.debug('saved: '+newKey+', old key was: '+oldKey);
			//if the record was loaded from the store (oldKey != null) and the key's value was changed during editing
			//delete the old record if del=true
			if (oldKey !== null && oldKey!=='' && oldKey !== newKey){
				if(del){
					console.log('going to remove old record with key:' + oldKey);
					this.removeRecord(oldKey);
				}
			}
			return 'success';
		}
		catch(e){
			console.log('error in store.setRecord:'+e.message);
			return 'error';
		}
	};
	
	
	/**
	 * Returns a form data record as an object. This is the only function that obtains records from the local storage.
	 * @param  {string} key [description]
	 * @return {*}     [description]
	 */
	this.getRecord = function(key){
		var record;
		try{
			//console.debug('record: '+localStorage.getItem(key));
			record = JSON.parse(localStorage.getItem(key));
			//console.debug('record after parse:');
			//console.debug(record);
			//console.log('found data:'+JSON.stringify(data)); //DEBUG
			return record;//{key: key, data: record['data'], ready: record['ready'], lastSaved: record['lastSaved']};// returns null if item cannot be found
		}
		catch(e){
			console.error('error with loading data from store: '+e.message);
			return null;
		}
	};

	// removes a record
	this.removeRecord = function(key){
		try{
			localStorage.removeItem(key);
			//console.log('removed record with key:'+key) // DEBUG
			return true;
		}
		catch(e){
			console.log('error with removing data from store: '+e.message);
			return false;
		}
	};

//	this.setRecordStatus = function (key, status){
//		var record = this.getRecord(key);
//		record.ready = status;
//		this.setRecord(key, record, false, true, key);
//	};
	
	/**
	 * returns an ordered array of objects with form keys and final variables {{"key": "name1", "final": true},{"key": "name2", etc.
	 * @return { Array.<Object.<string, (boolean|string)>>} [description]
	 */
	this.getFormList = function(){
		var i, ready, record,
			formList=[],
			records = this.getSurveyRecords(false);
		//console.log('data received:'+JSON.stringify(data)); // DEBUG
		for (i=0 ; i<records.length ; i++){
			record = records[i];
			//record['ready'] = (record['ready']=== 'true' || record['ready'] === true) ? true : false;
			formList.push({key: record['key'], 'ready': record['ready'], 'lastSaved': record['lastSaved']});
		}
		console.debug('formList returning '+formList.length+' items'); //DEBUG
		//order formList by lastSaved timestamp
		formList.sort(function(a,b){
			return b['lastSaved']-a['lastSaved'];
		});
		console.debug('formlist: '+JSON.stringify(formList));
		return formList;//returns empty object if no form data in storage or error was thrown
	};
	
	/**
	 * retrieves all survey data
	 * @param  {boolean=} finalOnly   [description]
	 * @param  {?string=} excludeName [description]
	 * @return {Array.<Object.<(string|number), (string|boolean)>>}             [description]
	 */
	this.getSurveyRecords = function(finalOnly, excludeName){
		var i, key,
			records = [],
			record  = {};
		finalOnly = finalOnly || false;
		excludeName = excludeName || null;
		//try{
			//console.log(localStorage.length+' records found'); // DEBUG
			for (i=0; i<localStorage.length; i++) {
				key = localStorage.key(i);
				//console.debug('found record with with key:'+key);
				record = this.getRecord(key);//localStorage.getItem(key);
				// get record - all non-reserved keys contain survey data
				if (!isReservedKey(key)){
					//console.debug('record with key: '+key+' is survey data');
					try{
						//record = JSON.parse(record);
						//console.debug('record:');
						//console.debug(record);
						/* although the key is also available as one of the record properties
							this should not be relied upon and the actual storage key should be used */
						record.key = key;
						//record['ready'] = record['ready'];
						//record['lastSaved'] = record['lastSaved'];
						//if (record.recordType === recordType){
						console.debug('this record is surveyData: '+record.key); // DEBUG
						console.debug('excludename: '+excludeName);
						console.debug('record.ready: '+record['ready']+' type:'+typeof record['ready']);
						//=== true comparison breaks in Google Closure compiler. Should probably be called with --output_wrapper to prevent this (but not possible in ANT?)
						//alternatively, the complete code could perhaps be wrapped in an anonymous function (except declaration of globals?)
						if (key !== excludeName && (!finalOnly || record['ready'] === 'true' || record['ready'] === true )){//} && (record.key !== form.getKey()) ){
							records.push(record);
						}
					}
					catch(e){
						console.log('record found that was probably not in the correct JSON format'+
							' (e.g. Firebug settings or corrupt record) (error: '+e.message+'), record was ignored');
					}
				}
			}
		//}
		//catch(e){
		//	console.log('error with retrieving all survey data data from storage');
		//	data = [];
		//}
		//console.debug('getSurveyRecords() returns: '+JSON.stringify(records)); // DEBUG
		return records;
	};

	/**
	 * [getSurveyDataArr description]
	 * @param  {boolean=} finalOnly   [description]
	 * @param  {?string=} excludeName [description]
	 * @return {Array.<Object.<string, string>>}             [description]
	 */
	this.getSurveyDataArr = function(finalOnly, excludeName){
		var i, records,
			dataArr = [];
		finalOnly = finalOnly || true;
		records = this.getSurveyRecords(finalOnly, excludeName);
		//console.debug('getSurveyDataArr will build array from these records: '+JSON.stringify(records));
		for (i=0 ; i<records.length ; i++){
			dataArr.push({name: records[i].key, data: records[i]['data']});//[records[i].key, records[i].data]
		}
		//console.debug('returning data array: '+JSON.stringify(dataArr));
		return dataArr;
	};

	/**
	 * [getSurveyDataXMLStr description]
	 * @param  {boolean=} finalOnly [description]
	 * @return {?string}           [description]
	 */
	this.getSurveyDataXMLStr = function(finalOnly){
		var i,
			dataObjArr = this.getSurveyDataArr(finalOnly),
			dataOnlyArr =[];
		for (i=0 ; i<dataObjArr.length ; i++){
			dataOnlyArr.push(dataObjArr[i].data);
		}
		return (dataOnlyArr.length>0) ? '<exported>'+dataOnlyArr.join('')+'</exported>' : null;
	};
	
	
	// MOVE TO STORE?
	//function to get settings from the store - all settings or one particular setting
	//this.getSettings = function(name){
//		var settings={};
//		var settingsRec = this.getRecord('settings');
//		//console.log('settings record:'+settingsRec);
//		if (settingsRec){
//			settings = settingsRec;
//		}
//		else {
//			settings = DEFAULT_SETTINGS;
//		}
//		if (name){
//			settings = settings[name]; // still to be tested
//		}
//		// console.log('returning settings: '+settings); //DEBUG
//		return settings;
//	};

	// private function to check if key is forbidden
	function isReservedKey(k) {
		var i;
		for (i=0 ; i<RESERVED_KEYS.length ; i++){
			if (k === RESERVED_KEYS[i]){
				return true;
			}
		}
		return false;
	}

	// private function to check if the key exists
	function isExistingKey(k) {
		if (localStorage.getItem(k)){
			//console.log('existing key');// DEBUG
			return true;
		}
		//console.log('not existing key');// DEBUG
		return false;
	}
	
	this.getCounterValue = function(){
		var record = this.getRecord('__counter'),
			number = (record && typeof record['counter'] !== 'undefined' && isNumber(record['counter'])) ? Number(record['counter']) : 0,
			numberStr = (number+1).toString().pad(4);
		//this.setRecord('__counter', numberStr);
		return numberStr;
	};

}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Settings class depends on Store Class
 *
 * @constructor
 */
function Settings(){
	"use strict";
}

Settings.prototype.init = function(){
	"use strict";
	var i, value, name,
		settings = this.get(),
		that = this;
	
	//set settings (loose coupling with GUI)
	$(document).trigger('setsettings', settings);
	//perform actions based on settings at launch
	//for (var prop in settings){
		
	//}
};

//communicates with local storage
/**
 * [get description]
 * @return {Object.<string, (boolean|string)>}         [description]
 */
Settings.prototype.get = function(){
	"use strict";
	return store.getRecord('__settings') || DEFAULT_SETTINGS;
};

/**
 * [getOne description]
 * @param  {string} setting [description]
 * @return {?(string|boolean)}         [description]
 */
Settings.prototype.getOne = function(setting){
	var settings = store.getRecord('__settings') || DEFAULT_SETTINGS;
	return (typeof setting !== 'undefined' && typeof settings[setting] !== 'undefined') ? settings[setting] : null;
};

/**
 * Communicates with local storage and perform action linked with setting. Called by eventhandler in GUI.
 *
 * @param {string} setting [description]
 * @param {string|boolean} value   [description]
 */
Settings.prototype.set = function(setting, value){
	"use strict";
	var result,
		settings = this.get();
	console.debug('going to store setting: '+setting+' with value:'+value);
	settings[setting] = value;
	result = store.setRecord('__settings', settings);
	//perform action linked to setting
	if (typeof this[setting] !== 'undefined'){
		this[setting](value);
	}
	return (result === 'success' ) ? true : console.error('error storing settings');
};
/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true, trailing:false*//*global XPathJS, XMLSerializer:true, Modernizr*/

/**
 * Class: Form
 *
 * This class provides the JavaRosa form functionality by manipulating the survey form DOM object and
 * continuously updating the data XML Document. All methods are placed inside the constructor (so privileged 
 * or private) because only one instance will be created at a time.
 *
 * Parameters:
 *
 *   $form  - The form as JQuery object
 *   dataStr - <instance> as XML string
 *
 * Returns:
 *
 *   -
 *
 * Closure tags:
 *
 * @constructor
 */

function Form (formSelector, dataStr){
	"use strict";
	var data, form, $form, $formClone;
 
	//*** FOR DEBUGGING and TESTING, OTHERWISE DISABLE***
	this.ex = function(expr, type, selector, index){return data.evaluate(expr, type, selector, index);};
	this.sfv = function(){return form.setAllVals();};
	this.getDataO = function(){return data.get();};
	this.data = function(dataStr){return new DataXML(dataStr);};
	//this.data = function(){return data;};
	this.form = function(selector){return new FormHTML(selector);};
	this.getDataXML = function(){return data.getXML();};
	this.validateAll = function(){return form.validateAll();};
	//***************************************


/**
 * Function: init
 *
 * Initializes the Form instance (XML data and HTML form).
 * 
 *
 *
 *
 */
	this.init = function() {
		//dataStr = dataStr.replace(/xmlns\=\"[a-zA-Z0-9\:\/\.]*\"/,'');
		
		//if (typeof console== 'undefined'){
	///		report &= window.console;
	//	}
		//cloning children to keep any event handlers on 'form.jr' intact upon resetting
		$formClone = $(formSelector).clone().appendTo('<original></original>');

		data = new DataXML(dataStr);
		data.init();
		//console.debug('form data obj initialized');	
		form = new FormHTML(formSelector);
		form.init();
		//console.debug('form html obj initialized');
		
		//to update data tab launch, trigger a dataupdate (required after )
		//$form.trigger('dataupdate');

		return;
	};

	/**
     * @param {boolean=} incTempl
     * @param {boolean=} incNs
     */
	this.getDataStr = function(incTempl, incNs){
		return data.getStr(incTempl, incNs);
	};
	/**
     *
     */
	this.getRecordName = function(){
		return form.recordName.get();
	};
	/**
     * @param {string} name
     */
	this.setRecordName = function(name){
		return form.recordName.set(name);
	};
	this.getRecordStatus = function(){
		return form.recordStatus.get();
	};
	/**
     * @param {(boolean|string)=} markedFinal
     */
	this.setRecordStatus = function(markedFinal){
		return form.recordStatus.set(markedFinal);
	};
	/**
	 * @param { boolean } status [description]
	 */
	 this.setEditStatus = function(status){
		return form.editStatus.set(status);
	 };
	 this.getEditStatus = function(){
		return form.editStatus.get();
	 };

	//restores form instance to pre-initialized state
	this.reset = function(){
		//form language selector was moved outside of <form> so has to be separately removed
		$('#form-languages').remove();
		$form.replaceWith($formClone);
	 };

	 /**
	 * Validates the whole form and returns true or false
	 * @return {boolean} 
	 */ 
	this.validateForm = function(){
		return form.validateAll();
	};
	/**
	 * Returns wether form has validated as true or false. Needs to be called AFTER calling validate()!
	 * @return {!boolean} 
	 */ 
	this.isValid = function(){
		return form.isValid();
	};

	//odd function to modify date strings (et. al.?) just before they are submitted or exported
	this.prepareForSubmission = function(dataStr){
		var name, value,
			formData = new DataXML(dataStr); //$($.parseXML(dataStr));
		//console.debug(formData.);
		$form.find('[data-type-xml="date"], [data-type-xml="dateTime"]').each(function(){
			name = $(this).attr('name');
			//console.debug('found date element with name: '+name);
			formData.node(name).get().each(function(){
				console.debug('found date DATA node with name: '+name);
				value = $(this).text().trim();
				if (value.length > 0){
					console.debug('converting date string: '+value);
					value = new Date(value).toJrString();
					console.debug('jrDateString: '+value);
					//bypassing validation & conversion of Nodeset sub-class
					$(this).text(value);
				}
			});
		});

		$form.find('[type="time"]').each(function(){

		});
		return formData.getStr(true, true);
	};
/**
 * Function: DataXML
 *
 * description
 *
 * Parameters:
 *
 *   dataStr - [type/description]
 *
 * Returns:
 *
 *   return description
 * 
 *   @constructor
 */
	function DataXML(dataStr) {
	
		var $data, 
			that=this;
		//console.debug('dataStr:'+dataStr); 
		//seems wrong but using regular expression on string avoids persistant xmlns behaviour
		dataStr = dataStr.replace(/<[\/]?instance(>|\s+[^>]*>)/gi, '');
		////console.debug(dataStr);
		//TEMPORARY DUE TO FIREFOX ISSUE, REMOVE ALL NAMESPACES FROM STRING, BETTER TO LEARN HOW TO DEAL WITH DEFAULT NAMESPACES
		//dataStr = dataStr.replace(/xmlns\=\"[a-zA-Z0-9\:\/\.]*\"/,'');

		this.xml = $.parseXML(dataStr);
		//$instance = $(xml);
		//cleanDataStr = (new window.XMLSerializer()).serializeToString($instance.find('instance>*')[0]);
		//xml = $.parseXML(cleanDataStr);
		$data = $(this.xml);

		//this.xml = xml;
		this.$ = $data;

		//replace browser-built-in-XPath Engine
		XPathJS.bindDomLevel3XPath(); // move to Data if evalXpression moves to Data


		/**
		 * Function: node
		 * 
		 * description
		 * 
		 * Parameters:
		 * 
		 *   @param {(string|null)=} selector - [type/description]
		 *   @param {(string|number|null)=} index    - [type/description]
		 *   @param {(Object|null)=} filter   - [type/description]
		 *   @param filter.onlyTemplate
		 *   @param filter.noTemplate
		 *   @param filter.onlyLeaf
		 *   @param filter.noEmpty
		 *   @returns {Nodeset}
		 */
		this.node = function(selector, index, filter){
			return new Nodeset(selector, index, filter);
		};
		
		
		/**
		 * Function: Nodeset
		 *
		 * description
		 *
		 * Parameters:
		 *
		 *   @param {(string|null)=} selector - [type/description]
		 *   @param {(string|number|null)=} index    - [type/description]
		 *   @param {(Object|null)=} filter   - [type/description]
		 *   @param filter.onlyTemplate
		 *   @param filter.noTemplate
		 *   @param filter.onlyLeaf
		 *   @param filter.noEmpty
		 *   @constructor
		 */
		function Nodeset(selector, index, filter){
			
			this.selector = (typeof selector !== 'undefined' && selector) ? selector : '*'; 
					//this.selector = selector.replace(/^\/{1}/, "instance/"); 
			
				//this.selector = '*:not(instance)';
			//}	
			filter = (typeof filter !== 'undefined' && filter !== null) ? filter : {};
			this.filter = filter;
			this.filter.noTemplate = (typeof filter.noTemplate !== 'undefined') ? filter.noTemplate : true;
			this.filter.onlyLeaf = (typeof filter.onlyLeaf !== 'undefined') ? filter.onlyLeaf : false;
			this.filter.onlyTemplate = (typeof filter.onlyTemplate !== 'undefined') ? filter.onlyTemplate : false;
			this.filter.noEmpty = (typeof filter.noEmpty !== 'undefined') ? filter.noEmpty : false;
			this.index = index;
			//this.xmlDataType = xmlDataType;
			////console.debug('nodeset instance created with xmlDataType: '+this.xmlDataType);

			//return this; //necessary?
		}

		/**
		 * Function: get
		 * 
		 * Privileged method to find data nodes filtered by a jQuery or XPath selector and additional filter properties
		 * Without parameters it returns a collection of all data nodes excluding template nodes and their children. Therefore, most
		 * queries will not require filter properties. This function handles all (?) data queries in the application.
		 * 
		 * Parameters:
		 * 
		 *   selector - [Optional] String containing a JQuery selector or an XPath
		 *   filter - [Optional] Object (filter) with the following optional boolean properties: "noTemplate"(default: false), "onlyTemplate", "noEmpty", "onlyEmpty".
		 *   
		 * Notes: 
		 *    
		 *   onlyTemplate = true - will negate any value for "noTemplate"
		 *   noEmpty = true - returns only leaf nodes and therefore makes the "onlyLeaf" property obsolete
		 *   noTemplate = false - returns all data nodes if no other properties or the selector are set.
		 *   
		 * Returns:
		 * 
		 *   Data nodes that match the selector and filter.
		 *   
		 * See Also:
		 * 
		 *   <xfind>
		 */
		Nodeset.prototype.get = function(){
			var p, $nodes, val;
			
			// filter property error check
			//for (p in this.filter){
				//if (this.filter.hasOwnProperty(p)){
					//if ($.inArray(p, ['onlyTemplate','noTemplate', 'noEmpty', 'onlyLeaf']) == -1){
						//console.error('node.get() received invalid filter property: '+p);
					//}
				//}
			//}
			////console.debug('node.get() looking for node: '+this.selector);
			// noTemplate is ignored if onlyTemplate === true
			if (this.filter.onlyTemplate === true){
				$nodes = $data.xfind(this.selector).filter('[template]');
			}
			// default
			else if (this.filter.noTemplate === true){	
				$nodes = $data.xfind(this.selector).not('[template], [template] *');
			}
			else{
				$nodes = $data.xfind(this.selector);
			}
			//noEmpty automatically excludes non-leaf nodes
			if (this.filter.noEmpty === true){
				$nodes = $nodes.filter(function(){
					val = $(this).text();
					//$this = $(this);
					////console.log ('children: '+$(this).children().length);
					////console.log ('text length: '+($.trim($this.text()).length));
					return $(this).children().length === 0 && val.trim().length > 0;//$.trim($this.text()).length > 0;
				});
			}
			//this may still contain empty leaf nodes
			else if (this.filter.onlyLeaf === true){
				$nodes = $nodes.filter(function(){
					return $(this).children().length === 0;
				});
			}
			$nodes = (typeof this.index !== 'undefined' && this.index !== null) ? $nodes.eq(this.index) : $nodes;
			////console.debug('node.get() returns');//console.debug($nodes);
			return $nodes;
		};


		/**
		 * Function: setVal
		 * 
		 * Sets data node values.
		 * 
		 * Parameters:
		 * 
		 *   selector - String of JQuery or XPath selector for a data node
		 *   value - String/Number/Boolean of the new value of this node
		 *   index - The 0-based index of this node amongs its peers with the same selector
		 *   
		 * Returns:
		 * 
		 *   -
		 */
		Nodeset.prototype.setVal = function(newVal, expr, xmlDataType){
			var target, curVal, success;
			//index = (typeof index !== 'undefined') ? index : -1;
			curVal = this.getVal().join(' ');
			//console.log('setting value of data node: '+this.selector+' with index: '+this.index);
			
			if (typeof newVal !== 'undefined'){
				newVal = ($.isArray(newVal)) ? newVal.join(' ') : newVal;
				//this would perhaps be better: (but selected('a b') actually would not work (and does now))
				//if($.isArray(value)){
				//	$.each(value, function(i, val){value[i] = encodeURI(val);});
				//	value = value.join(' ');
				//}
			}
			else newVal = '';
			newVal = this.convert(newVal, xmlDataType);
			//value = data.type(value, type);
			//console.debug('value(s) to set: '+newVal);
			//console.debug('existing value(s): '+curVal);

			target = this.get();//.eq(index);

			if ( target.length === 1 && newVal.toString().trim() !== curVal.toString().trim() ){ //|| (target.length > 1 && typeof this.index == 'undefined') ){
				//if (this.validate(value) === true){
				//first change the value so that it can be evaluated in XPath (validated)
				

				target.text(newVal);
				//	return true;
				//}
				//return false;
				//then return validation result
				success = this.validate(expr, xmlDataType);
				$form.trigger('dataupdate', target.prop('nodeName'));
				return success;
			}
			if (target.length > 1){
			//	//console.debug('number of nodes with that name: '+target.length);
			//	target.eq(this.index).text(value);
				console.error('nodeset.setVal expected nodeset with one node, but received multiple');
				return null;
			}
			if (target.length === 0 ){
				console.error('Data node: '+this.selector+' with null-based index: '+this.index+' not found!');
				return null;
			}
			//always validate if the new value is not empty, even if value didn't change (see validateAll() function)
			//return (newVal.length > 0 && validateAll) ? this.validate(expr, xmlDataType) : true;
			return null;
			////console.debug('validation result: '+this.validate());
		};

		/**for
		 * Function: getVal
		 * 
		 * Obtains the data value if a JQuery or XPath selector for a single node is provided.
		 * 
		 * Parameters:
		 * 
		 *   selector - String of JQuery or XPath selector
		 *   
		 * Returns:
		 * 
		 *   returns the value of the node or false if no nodes were found. Throws error and stops when multiple 
		 *   nodes with that selector were found
		 *   
		 */
		Nodeset.prototype.getVal = function(){
			var vals=[];
			this.get().each(function(){
				//if not leaf node
				vals.push($(this).text());
			});
			return vals;
		};
		
		//clone data node after all templates have been cloned (after initialization)
		Nodeset.prototype.clone = function($precedingTargetNode){
			var $dataNode, allClonedNodeNames;

			$dataNode = this.get();
			////console.debug(dataNode);
			////console.debug(precedingTargetNode);
			$precedingTargetNode = $precedingTargetNode || $dataNode;
			if ($dataNode.length === 1 && $precedingTargetNode.length ===1){
				$dataNode.clone().insertAfter($precedingTargetNode).find('*').andSelf().removeAttr('template');
				//$('form.jr').trigger('dataupdate');
				//since the dataNode (template) may have descendants as well that are used in evaluating e.g. 
				//branching logic, we need to trigger a data update for each of the cloned nodes...
				allClonedNodeNames = [$dataNode.prop('nodeName')];
				$dataNode.find('*').each(function(){
					allClonedNodeNames.push($(this).prop('nodeName'));
				});
				////console.log('nodenames in clone: ');
				////console.log(allClonedNodeNames);
				$form.trigger('dataupdate', allClonedNodeNames.join());
			}
			else{
				console.error ('node.clone() function did not receive origin and target nodes');
			}
		};

		Nodeset.prototype.remove = function(){
			var dataNode = this.get();
			if (dataNode.length > 0){
				//console.log('removing data node with name: '+this.get().prop('nodeName'));
				dataNode.remove();
				$form.trigger('dataupdate', dataNode.prop('nodeName') );
			}
			else {
				console.error('could not find node '+this.selector+' with index '+this.index+ 'to remove ');
			}
		};

		Nodeset.prototype.convert = function(x, xmlDataType){
			////console.debug('received xmlDataType for conversion: '+xmlDataType);
			if (x.toString() === ''){
				return x;
			}
			if (typeof xmlDataType !== 'undefined' && xmlDataType !== null && 
				typeof this.types[xmlDataType.toLowerCase()] !== 'undefined' &&
				typeof this.types[xmlDataType.toLowerCase()].convert !== 'undefined'){
					return this.types[xmlDataType.toLowerCase()].convert(x);
			}
			return x;
		};
 
		Nodeset.prototype.validate = function(expr, xmlDataType){
			//var //i, result,
			var typeValid, exprValid,
				value = this.getVal();
			//	value = this.getVal(); //multiple acceptable???
			
			//for (i=0 ; i<values.length ; i++){
			//	result.push({type: this.type.validate(values[i]), expr: true });
				//ADD result of XPath constraint expr 
			//} 
			////console.log('xml data type = '+this.xmlDataType);
			if (value.toString() === '') {
				return true;
			}

			if (typeof xmlDataType == 'undefined' || xmlDataType === null || 
				typeof this.types[xmlDataType.toLowerCase()] == 'undefined'){
				console.error('data type '+xmlDataType+' set to string');
				xmlDataType = 'string';
			}
			typeValid = this.types[xmlDataType.toLowerCase()].validate(value);
			//console.debug('type valid: '+typeValid);
			exprValid = (typeof expr !== 'undefined' && expr !== null && expr.length > 0) ? that.evaluate(expr, 'boolean', this.selector, this.index) : true;
			//console.debug('constraint valid: '+exprValid);
			return (typeValid && exprValid);
		};

		Nodeset.prototype.types = {
			'string' :{
				//max length of type string is 255 chars. Convert (truncate) silently?
				validate : function(x){
					return true;
				}
			},
			'select' :{
				validate: function(x){
					return true;
				}
			},
			'select1' :{
				validate: function(x){
					return true;
				}
			},
			'decimal' :{
				validate : function(x){
					return (!isNaN(x-0) && x !== null) ? true : false;
				}
			},
			'int' : {
				validate : function(x){
					return (!isNaN(x-0) && x !== null && Math.round(x) == x) ? true : false; //x.toString() == parseInt(x, 10).toString();
				}
			}, 
			'date' : {
				validate : function(x){
					////console.debug('validating date: "'+x+'"');
					////console.debug(new Date(x.toString()));
					return ( new Date(x.toString()).toString() !== 'Invalid Date' );
				},
				convert : function(x){
					var datetime = new Date(x);
					datetime.setUTCHours(0,0,0,0);
					////console.log('converting datetime to date');
					return new Date(datetime).toUTCString();//.getUTCFullYear(), datetime.getUTCMonth(), datetime.getUTCDate());
				}
			},
			'datetime' : {
				validate : function(x){
					return ( new Date(x).toString() !== 'Invalid Date');
				},
			'convert' : function(x){
					return ( new Date(x).toUTCString() );
				}
			},
			'time' : {
				validate : function(x){
					return ( new Date('2012-01-01 '+x).toString() !== 'Invalid Date');
				},
				convert : function(x){
					var datetime = new Date('2012-01-01 '+x);
					////console.log('converting datetime to time');
					return datetime.getHours().toString().pad(2)+':'+datetime.getMinutes().toString().pad(2)+':'+datetime.getSeconds().toString().pad(2);
				}
			},
			'barcode' : {
				validate: function(x){
					return true;
				}
			},
			'geopoint' : {
				validate: function(x){
					return true;
				}
			},
			'binary' : {
				validate: function(x){
					return true;
				}
			}
		};	
	}

		/**
	 * Function: DataXML.init
	 * 
	 * Sets up the $data object.
	 * 
	 * Parameters:
	 * 
	 *   dataStr - xml data as a string
	 *   
	 * Returns:
	 * 
	 *   -
	 */
	DataXML.prototype.init = function(){
		var $root, val;
		//console.log('initializing DataXML object');
		//trimming values
		this.node(null, null, {noEmpty: true, noTemplate: false}).get().each(function(){
			////console.debug('value found'+ $(this).text());
			val = $(this).text();
			$(this).text(val.trim());
		});
		$root = this.node(':first', 0).get();
		////console.debug('root element');
		////console.debug($root);
		//store namespace of root element
		this.namespace = $root.attr('xmlns');
		//console.debug('namespace of root element is:'+this.namespace);
		//remove namespace from <instance>
		//this.$.find('instance').removeAttr('xmlns');
		//strip namespace from root element (first child of instance) 
		$root.removeAttr('xmlns');

		this.cloneAllTemplates();

		return;
	};


//index is the index of the node (defined in Nodeset), that the clone should be added immediately after
		//if a node with that name and that index already exists the node will NOT be cloned
		//almost same as clone() but adds targetIndex and removes template attributes and if no template node exists it will copy a normal node
		//nodeset (givein in node() should include filter noTemplate:false) so it will provide all nodes that that name
	DataXML.prototype.cloneTemplate = function(selector, index){
		////console.log('trying to locate data node with path: '+path+' to clone and insert after node with same xpath and index: '+index);
		var $insertAfterNode, name,
			template = this.node(selector, 0, {onlyTemplate: true}); //eq(0) is actually obsolete
		//console.debug('going to clone date template node with selector: '+selector+' and insert after index '+index);
		//if form does not use jr:template="" but the node-to-clone does exist
		template = (template.get().length === 0) ? this.node(selector, 0) : template;
		name = template.get().prop('nodeName');
		$insertAfterNode = this.node(selector, index).get();

		//if templatenodes and insertafternode(s) have been identified AND the node following insertafternode doesn't already exist(! important for nested repeats!)
		if (template.get().length === 1 && $insertAfterNode.length === 1 && $insertAfterNode.next().prop('nodeName') !== name){//this.node(selector, index+1).get().length === 0){
			//console.log('found data repeat node with template attribute');
				//cloneDataNode(templateNode, insertAfterNode);

			template.clone($insertAfterNode);
			//console.debug('cloning done');
				//templateNode.clone().insertAfter(templateNode.parent().children(templateNode.prop('nodeName')).last()).removeAttr('template');
		}
		else{
			//console.error ('Could locate node: '+path+' with index '+index+' in data instance.There could be multiple template node (a BUG) or none.');
			//console.debug('templatenode found: ');
			//console.debug(template.get());
			//console.debug('insertAfternode found: ');
			//console.debug($insertAfterNode);
			////console.debug('target existing already?: ');
			////console.debug(this.node(selector, index+1).get());
			if ($insertAfterNode.next().prop('nodeName') !== name ){
				console.error('Could not find template node and/or node to insert the clone after');
			}
		}
	};
/**
	 * Function: cloneAllTemplates
	 *
	 * Initialization function that creates <repeat>able data nodes with the defaults from the template if no repeats have been created yet. 
	 * Strictly speaking this is not "according to the spec" as the user should be asked first whether it has any data for this question
	 * but seems usually always better to assume at least one 'repeat' (= 1 question). It doesn't make use of the Nodeset subclass (CHANGE?)
	 *
	 * Parameters:
	 *
	 *   startNode - Provides the scope (default is the whole data object) from which to start cloning.
	 *
	 * Returns:
	 *
	 *   -
	 *
	 * See Also:
	 *
	 *   In JavaRosa, the documentation on the jr:template attribute.
	 * 
	 * @param {jQuery=} startNode
	 */ 
	DataXML.prototype.cloneAllTemplates = function(startNode){
		var _this = this;
		////console.log('cloning all templates once');
		if (typeof startNode == 'undefined' || startNode.length === 0){
			startNode = this.$.find(':first');
		}
		//clone data nodes with template (jr:template=) attribute if it doesn't have any siblings of the same name already
		//strictly speaking this is not "according to the spec" as the user should be asked whether it has any data for this question
		//but I think it is almost always better to assume at least one 'repeat' (= 1 question)
		startNode.children('[template]').each(function(){
			////console.log('found data point with template attribute, name:'+$(this).prop('nodeName'));
			if (typeof $(this).parent().attr('template') == 'undefined' && $(this).siblings($(this).prop('nodeName')).not('[template]').length === 0){
				//console.log('going to clone template data node with name: ' + $(this).prop('nodeName'));
				$(this).clone().insertAfter($(this)).find('*').andSelf().removeAttr('template');
				//cloneDataNode($(this));
			}
		});
		startNode.children().not('[template]').each(function(){
			_this.cloneAllTemplates($(this));
		});
		return;
	};

	

	

	/**
	 * Function: get
	 * 
	 * Returns jQuery Data Object (obsolete?)
	 * 
	 * Parameters:
	 * 
	 * Returns:
	 * 
	 *   JQuery Data Object
	 *   
	 * See Also:
	 * 
	 *    <nodes.get()>, which is always (?) preferred except for debugging.
	 *   
	 */
	DataXML.prototype.get = function(){
		return this.$ || null;
	};

	/**
	 * Function: getXML
	 * 
	 * Getter for data xml object. REMOVE <INSTANCE>?
	 * 
	 * Returns:
	 * 
	 *   data xml object
	 */
	DataXML.prototype.getXML = function(){
		return this.xml || null;
	};

	/**
	 * Function: getStr
	 * 
	 * Public function to get a string of the CLONED data object (used for Rapaide.launch component).
	 * 
	 * Parameters:
	 * 
	 *   incTempl - Boolean that indicates whether to include template nodes.
	 *   
	 * Returns:
	 * 
	 *   string of data xml object
	 */
	DataXML.prototype.getStr = function(incTempl, incNs){
		var $dataClone, dataStr;

		incTempl = (typeof incTempl !== 'undefined') ? incTempl : false;
		incNs = (typeof incNs !== 'undefined') ? incNs : true;
		
		$dataClone = $('<root></root');
		
		this.$.find(':first').clone().appendTo($dataClone);

		if (incTempl === false){
			$dataClone.find('[template]').remove();
			////console.log('removed templates');
		}
		if (incNs === true && typeof this.namespace !== 'undefined' && this.namespace.length > 0) {
			$dataClone.children().eq(0).attr('xmlns', this.namespace);
		}
		////console.debug('dataClone in getStr:');
		////console.debug($dataClone);
		dataStr = (new XMLSerializer()).serializeToString($dataClone.children().eq(0)[0]);

		//TEMPORARY DUE TO FIREFOX ISSUE, REMOVE NAMESPACE FROM STRING (AGAIN), BETTER TO LEARN HOW TO DEAL WITH DEFAULT NAMESPACES
		dataStr = dataStr.replace(/xmlns\=\"[A-z0-9\:\/\.\-\%\_\?&amp;]*\"/gi,' ');

		//remove tabs
		dataStr = dataStr.replace(/\t/g, '');

		return dataStr;
	};

	/**
	 * There is a bug in JavaRosa that has resulted in the usage of incorrect formulae on nodes inside repeat nodes. 
	 * Those formulae use absolute path when relative paths should have been used. See more here:
	 * https://bitbucket.org/javarosa/javarosa/wiki/XFormDeviations (point 3). 
	 * Tools such as pyxform (and xls form?) also build forms in this incorrect manner. It will take time to 
	 * correct this way of making forms so makeBugCompliant() aims to mimic the incorrect 
	 * behaviour by injection the [position] of repeats into the XPath expressions. The resulting expression
	 * will then be evaluated in a way users expect (as if the paths were relative) without having to mess up
	 * the XPath Evaluator. E.g. '/data/rep_a/node_a' could become '/data/rep_a[2]/node_a' if the context is inside 
	 * the second rep_a repeat.
	 * 
	 * This function should be removed as soon as JavaRosa (or maybe just pyxform) fixes the way those formulae
	 * are created (or evaluated).
	 * 
	 * @param  {string} expr  the XPath expression
	 * @param  {jQuery} $repParents jQuery collection of repeat parents of the context input node
	 * @return {string} modified expression with injected positions (1-based) 
	 */
	DataXML.prototype.makeBugCompliant = function(expr, $repParents){
		var i, repSelector, repIndex,
			bcExpr = expr;
		//console.debug('received expression: '+expr+' inside repeat: '+repSelector+' with 0-based index: '+repIndex);
		for (i=0 ; i<$repParents.length ; i++){
			repSelector = /** @type {string} */$repParents.eq(i).attr('name');
			//console.log(repSelector);
			repIndex = $repParents.eq(i).siblings('[name="'+repSelector+'"]').andSelf().index($repParents.eq(i)); 
			//console.log(repIndex);
			bcExpr = bcExpr.replace(repSelector, repSelector+'['+(repIndex+1)+']');
		}
		//if (expr !== bcExpr){
			//console.debug('expr inside repeat made bug compliant, new expression: '+bcExpr);
		//}
		return bcExpr;
	};

	/*
	 * Evaluates an XPath Expression using the browser's native XPath 1.0 engine
	 * $context parameter is a jQuery object!
	 * type 
	 *  (and only used for booleans
	 *
	 *
	 * 
	 */
	/**
	 * Evaluates an XPath Expression using XPathJS_javarosa (not native XPath 1.0 evaluator)
	 * 
	 * THIS FUNCTION DOESN'T SEEM TO WORK PROPERLY FOR NODE RESULTTYPES! otherwise:
	 * nodes can be accessed by returned node.snapshotItem(i)(.textContent)
	 * node can be accessed by returned node(.textContent)
	 * 
	 * @param  {string} expr       [description]
	 * @param  {string=} resTypeStr boolean, string, number, nodes (best to always supply this)
	 * @param  {string=} selector   jQuery selector which will be use to provide the context to the evaluator
	 * @param  {number=} index      index of selector in document
	 * @return {?(number|string|boolean)}            [description]
	 */
	DataXML.prototype.evaluate = function(expr, resTypeStr, selector, index){
		var context, dataCleanClone, resTypeNum, resultTypes, result, $repParents;//, repSelector, repIndex;//, repDataNodeName;
		
		//$context = $context || this.get().find('instance>*');
		//console.debug('evaluating expression: '+expr);
		resTypeStr = resTypeStr || 'any';
		index = index || 0;
		//console.debug('selector of context: '+selector);
		//console.debug('index of context node: '+index);
		//var context = $.parseXML((new window.XMLSerializer()).serializeToString($context[0]));
		//create a clone so that the template nodes can be removed (not tried detach() and attach()
		
		////console.debug(data.get());
		//$clonedDoc = this.get().find('instance>*').clone().appendTo($('<root></root>'));
		//$clonedContext.find('[template]').remove();
		
		////console.log('creating clean clone from string:'+this.getStr(false, false));
		dataCleanClone = new DataXML(this.getStr(false, false));
		////console.log('clean clone:');
		////console.log(dataCleanClone);
		////console.log('selector of context node: '+selector);
		////console.log('index of context node: '+index);
		//use a trick to be able to get the context node using getElementById
		if (typeof selector !== 'undefined' || selector !== null) {
			//console.debug('selector for context node in evaluate(): '+selector+' with index: '+index);
			//dataCleanClone.node(selector, index, {}).get().attr('id','getme');
			//context = dataCleanClone.get()[0].getElementById('getme');
			context = dataCleanClone.node(selector, index, {}).get()[0];
			/**
			 * If the expressions is bound to a node that is inside a repeat.... see makeBugCompliant()
			 */
			if ($form.find('[name="'+selector+'"]').parents('.jr-repeat').length > 0 ){
				$repParents = $form.find('[name="'+selector+'"]').eq(index).parents('.jr-repeat');
				expr = this.makeBugCompliant(expr, $repParents);
			}
		}
		else context = dataCleanClone.getXML();//dataCleanClone.get()[0];//.documentElement;
		
		resultTypes = { //REMOVE VALUES? NOT USED
			0 : ['any', 'ANY_TYPE'], //works
			1 : ['number', 'NUMBER_TYPE', 'numberValue'], //works, e.g. evalXpression('number(true())', 'number')
			2 : ['string', 'STRING_TYPE', 'stringValue'], //works, e.g. evalXpression('string(38)', 'string')
			3 : ['boolean', 'BOOLEAN_TYPE', 'booleanValue'], //works, e.g. evalXpression('"red" != "bleu", 'boolean')
			//NOTE: nodes are actually never requested in this function as DataXML.node().get() is used to return nodes
			
			7 : ['nodes', 'ORDERED_NODE_SNAPSHOT_TYPE'], //works with iterateNext().textContent
			9 : ['node', 'FIRST_ORDERED_NODE_TYPE']
			//'node': ['FIRST_ORDERED_NODE_TYPE','singleNodeValue'], // does NOT work, just take first result of previous
		};

		//translate typeStr to number according to DOM level 3 XPath constants
		for (resTypeNum in resultTypes){

			resTypeNum = Number(resTypeNum);

			if (resultTypes[resTypeNum][0] == resTypeStr){
				break;
			}
			else{
				resTypeNum = 0;
			}
		}

		expr = expr.replace( /&lt;/g, '<');
		expr = expr.replace( /&gt;/g, '>'); 
		expr = expr.replace( /&quot;/g, '"');

		////console.log('expr to test: '+expr);//+' with result type number: '+resTypeNum);
		//result = evaluator.evaluate(expr, context.documentElement, null, resultType, null);
		try{
				result = document.evaluate(expr, context, null, resTypeNum, null);
			////console.log('evaluated: '+expr+' to: '+(result[resultTypes[type][1]] || 'resultnode(s)'));
			////console.log(result); //NOTE THAT THIS USE OF THE CONSOLE THROWS AN ERROR IN FIREFOX when using native XPath!
			if (resTypeNum === 0){
				for (resTypeNum in resultTypes){
					resTypeNum = Number(resTypeNum);
					////console.log('checking if resultType = '+type+' is equal to actual result.resultType = '+result.resultType);
					if (resTypeNum == Number(result.resultType)){
						result = (resTypeNum >0 && resTypeNum<4) ? result[resultTypes[resTypeNum][2]] : result;
						console.debug('evaluated '+expr+' to: '+result);
						return result;
					}
					//resultTypeValProp = resultTypes[type][1];
					//console.log('checking type with value property:'+resultTypeValProp);
					// WHEN PROBLEMS USE ITERATENEXT().textContent for resultType = 4
					//try{
					//	if (typeof result[resultTypeValProp] !== 'undefined'){
					//		//console.log('result type detected: '+type);
					//		return result[resultTypeValProp];
					//	}
					//}
					//catch(e){
					//	//console.log('result type is not: '+type);
					//}
				}
				console.error('Expression: '+expr+' did not return any boolean, string or number value as expected');
				//console.debug(result);
			}
			console.debug('evaluated '+expr+' to: '+result[resultTypes[resTypeNum][2]]);
			return result[resultTypes[resTypeNum][2]];
		}
		catch(e){
			console.error('Error occurred trying to evaluate: '+expr+', message: '+e.message);
		}
	};

/**
 * Function: FormHTML
 * 
 * description
 * 
 * Parameters:
 * 
 *   selector - [type/description]
 * 
 * Returns:
 * 
 *   return description
 *   
 *   @constructor
 */
	function FormHTML (selector){
		//there will be only one instance of FormHTML
		$form = $(selector);

		//this.input = function($node){
		//	return new Input($node);
		//};

		
	}

	FormHTML.prototype.init = function(){
		var icons, name;//,
			//that = this; 
		//console.debug ('initializing HTML form');

		this.checkForErrors();

		if (typeof data == 'undefined' || !(data instanceof DataXML)){
			return console.error('variable data needs to be defined as instance of DataXML');
		}
		
		icons = '<div class="question-icons"><span class="required"></span><span class="hint"></span></div>';
		
		//append icons
		$form.find('label>input[type="checkbox"], label>input[type="radio"]').parent().parent('fieldset').prepend(icons);
		$form.parent().find('label>select, :not(#jr-preload-items, #jr-calculated-items)>label>input')//, form>label>input')
			.not('[type="checkbox"], [type="radio"]').parent().prepend(icons);

		//this.input.getWrapNodes($form.parent().find('fieldset:not(#jr-preload-items, #jr-calculated-items) input, select, textarea'))
		//	.prepend(icons);	

		//add 'required field' clue
		$form.find('label>input[type="checkbox"][required], label>input[type="radio"][required]').parent().parent('fieldset')
			.find('.question-icons .required').addClass('ui-icon ui-icon-notice');
		$form.parent().find('label>select[required], :not(#jr-preload-items, #jr-calculated-items)>label>input[required]')
			.not('[type="checkbox"], [type="radio"]').parent().find('.question-icons .required')
			.addClass('ui-icon ui-icon-notice');

		//this.input.getWrapNodes($form.find('[required]')).find('.question-icons .required').text('*');

		//groups of radiobuttons needs to have the same name which referes to the xpath in instance
		//when a radio button is clone this will cause a problem. Therefore radiobuttons store their xpath in data-name.
		$form.find('input[type="radio"]').each(function(){
			name = /**@type {string} */$(this).attr('name');
			$(this).attr('data-name', name);
		});

		$form.find('h2').first().append('<span/>');

		//this.setLangs();
		//$form.find('.jr-hint, .jr-constraint-msg').hide();
		//
		this.repeat.init();
		this.setAllVals();
		this.beautify();
		this.widgets.init();
		this.branch.init();
		this.calcUpdate();
		this.outputUpdate();
		this.setEventHandlers();
		this.preloads.init(); //after event handlers!
		//$form.fixLegends();
		this.setLangs();
		this.editStatus.set(false);
	};

	FormHTML.prototype.checkForErrors = function(){
		var i,
			paths = [],
			total = {},
			$stats = $form.find('#stats');
		total.jrItem= parseInt($stats.find('[id="jrItem"]').text(), 10);
		total.jrInput= parseInt($stats.find('[id="jrInput"]').text(), 10);
		total.jrUpload = parseInt($stats.find('[id="jrUpload"]').text(), 10);
		total.jrTrigger = parseInt($stats.find('[id="jrTrigger"]').text(), 10);
		total.jrConstraint = parseInt($stats.find('[id="jrConstraint"]').text(), 10);
		total.jrRelevant = parseInt($stats.find('[id="jrRelevant"]').text(), 10);
		total.jrCalculate = parseInt($stats.find('[id="jrCalculate"]').text(), 10);
		total.jrPreload = parseInt($stats.find('[id="jrPreload"]').text(), 10);

		//console.log('checking for general transformation or xml form errors by comparing stats');
		//$form.find('#stats span').each(function(){
		//	total[$(this).attr('id')] = parseInt($(this).text(),10);
		//});
		/** @type {number} */
		total.hRadio = $form.find('input[type="radio"]').length;
		total.hCheck = $form.find('input[type="checkbox"]').length;
		total.hSelect = $form.find('select').length;
		total.hOption = $form.find('option[value!=""]').length;
		total.hInputNotRadioCheck = $form.find('input:not([type="radio"],[type="checkbox"])').length;
		total.hTrigger = $form.find('.trigger').length;
		total.hRelevantNotRadioCheck = $form.find('[data-relevant]:not([type="radio"],[type="checkbox"])').length;
		total.hRelevantRadioCheck = $form.find('input[data-relevant][type="radio"],input[data-relevant][type="checkbox"]').parent().parent('fieldset').length;
		total.hConstraintNotRadioCheck = $form.find('[data-constraint]:not([type="radio"],[type="checkbox"])').length;
		total.hConstraintRadioCheck = $form.find('input[data-constraint][type="radio"],input[data-constraint][type="checkbox"]').parent().parent('fieldset').length;
		total.hCalculate = $form.find('[data-calculate]').length;
		total.hPreload = $form.find('#jr-preload-items input').length;

		//console.debug(total);

		if ( total.jrItem !== ( total.hOption + total.hRadio + total.hCheck )  ) {
			console.error(' total select-type filter differs between XML form and HTML form');
		}
		if ( ( total.jrInput + total.jrUpload ) !== ( total.hInputNotRadioCheck - total.hCalculate - total.hPreload ) ){
			console.error(' total amount of input/upload fields differs between XML form and HTML form');
		}
		if ( total.jrTrigger != total.hTrigger ){
			console.error(' total triggers differs between XML form and HTML form');
		}
		if ( total.jrRelevant != ( total.hRelevantNotRadioCheck + total.hRelevantRadioCheck)){
			console.error(' total amount of branches differs between XML form and HTML form (not a problem if caused by obsolete bindings in xml form)');
		}
		if ( total.jrConstraint != ( total.hConstraintNotRadioCheck + total.hConstraintRadioCheck)){
			console.error(' total amount of constraints differs between XML form and HTML form (not a problem if caused by obsolete bindings in xml form).'+
				' Note that constraints on &lt;trigger&gt; elements are ignored in the transformation and could cause this error too.');
		}
		if ( total.jrCalculate != total.hCalculate ){
			console.error(' total amount of calculated items differs between XML form and HTML formprel');
		}
		if ( total.jrPreload != total.hPreload ){
			console.error(' total amount of preload items differs between XML form and HTML form');
		}
		//probably resource intensive: check if all nodes mentioned in name attributes exist in $data
		
		$form.find('[name]').each(function(){
			if ($.inArray($(this).attr('name'), paths)) {
				paths.push($(this).attr('name'));
			}
		});
		//s//console.debug(paths);
		for (i=0 ; i<paths.length ; i++){
			////console.debug('checking: '+paths[i]);
			if (data.node(paths[i]).get().length < 1){
				console.error('Found name attribute: '+paths[i]+' that does not have a corresponding data node. Transformation error or XML form error (relative nodesets perhaps?');
			}
		}

	};

	//this may not be the most efficient. Could also be implemented like Data.Nodeset;
	//also use for fieldset nodes (to evaluate branch logic) and also used to get and set form data of the app settings
	FormHTML.prototype.input = {
		//multiple nodes are limited to ones of the same input type (better implemented as JQuery plugin actually)
		getWrapNodes: function($inputNodes){
			var type = this.getInputType($inputNodes.eq(0));
			return (type == 'radio' || type == 'checkbox') ? $inputNodes.parent('label').parent('fieldset') : 
				(type == 'fieldset') ? $inputNodes : $inputNodes.parent('label');
		},
		getProps : function($node){
			if ($node.length !== 1){
				return console.error('getProps(): no input node provided or multiple');
			}
			////console.log('required: '+$node.attr('required'));
			return {
				path: this.getName($node), 
				ind: this.getIndex($node),
				inputType: this.getInputType($node),
				xmlType: this.getXmlType($node),
				constraint: $node.attr('data-constraint'),
				relevant: $node.attr('data-relevant'),
				val: this.getVal($node),
				required: ($node.attr('required') !== undefined) ? true : false,
				enabled: this.isEnabled($node),
				multiple: this.isMultiple($node)
			};
		},
		getInputType : function($node){
			if ($node.length !== 1){
				return ''; //console.error('getInputType(): no input node provided or multiple');
			}
			if ($node.prop('nodeName').toLowerCase() == 'input'){
				if ($node.attr('type').length > 0){
					return $node.attr('type').toLowerCase();
				}	
				else return console.error('<input> node has no type');
			}
			else if ($node.prop('nodeName').toLowerCase() == 'select' ){
				return 'select';
			}
			else if ($node.prop('nodeName').toLowerCase() == 'fieldset'){
				return 'fieldset';
			}
			else return console.error('unexpected input node type provided');
		},
		getXmlType : function($node){
			if ($node.length !== 1){
				return console.error('getXMLType(): no input node provided or multiple');
			}
			return $node.attr('data-type-xml');
		},
		getName : function($node){
			//var indexSuffix;
			if ($node.length !== 1){
				return console.error('getName(): no input node provided or multiple');
			}
			if (this.getInputType($node) == 'radio'){
				//indexSuffix = $node.attr('name').lastIndexOf('____');
				//if (indexSuffix > 0){
					return $node.attr('data-name');//.substr(0, indexSuffix);
				//}
			}
			if ($node.attr('name').length > 0){
				return $node.attr('name');
			}
			else return console.error('input node has no name');
		},
		//the index that can be used to find the node in $data
		getIndex : function($node){
			var inputType, name, $wrapNode, $wrapNodesSameName;
			if ($node.length !== 1){
				return console.error('getIndex(): no input node provided or multiple');
			}
			inputType = this.getInputType($node);
			name = this.getName($node);
			////console.debug('name provided by input.getName:'+name);
			////console.debug('name of attribute name:'+$node.attr('name'));
			//if (inputType === 'radio' && name !== $node.attr('name')){
				//return parseInt( $node.attr('name').substring($node.attr('name').lastIndexOf('____')+4), 10);
			//}
			$wrapNode = this.getWrapNodes($node);
			////console.debug('wrapnode:');
			////console.debug($wrapNode);
			if (inputType === 'radio' && name !== $node.attr('name')){
				$wrapNodesSameName = this.getWrapNodes($form.find('[data-name="'+name+'"]'));
			}
			else {
				$wrapNodesSameName = this.getWrapNodes($form.find('[name="'+name+'"]'));
			}
			////console.debug('wrapnodes with same name:');
			////console.debug($wrapNodesSameName);	

			return $wrapNodesSameName.index($wrapNode);
		},
		isMultiple: function($node){
			return (this.getInputType($node) == 'checkbox' || $node.attr('multiple') !== undefined) ? true : false;
		},
		isEnabled: function($node){
			return ($node.attr('disabled') !== undefined  || $node.parents('fieldset:disabled').length !== 0 ) ? false : true;
		},
		getVal : function($node){
			var inputType, values=[], name;
			if ($node.length !== 1){
				return console.error('getVal(): no inputNode provided or multiple');
			}
			inputType = this.getInputType($node);
			name = this.getName($node);
			////console.debug('input type: '+inputType);
			if (inputType == 'radio'){
				return this.getWrapNodes($node).find('input:checked').val() || '';
			}
			//checkbox values bug in jQuery as (node.val() should work)
			if (inputType == 'checkbox'){
				//console.debug(this.getWrapNodes($node));
				this.getWrapNodes($node).find('input[name="'+name+'"]:checked').each(function(){
					//console.debug('found checkbox value: '+$(this).val());
					values.push($(this).val());
				});
				return values;
			}
			return $node.val() || '';
		},
		setVal : function(name, index, value){
			var $inputNodes;//, 
				//values = value.split(' ');
			index = index || 0;
			
			if (this.getInputType($form.find('[data-name="'+name+'"]').eq(0)) == 'radio'){
				//name = name+'____'+index;
				//index = 0;
				//why not use this.getIndex?
				return this.getWrapNodes($form.find('[data-name="'+name+'"]')).eq(index).find('input[value="'+value+'"]').attr('checked', true);
			}
			else {
				//why not use this.getIndex?
				$inputNodes = this.getWrapNodes($form.find('[name="'+name+'"]')).eq(index).find('input, select, textarea');
			}

			if (this.isMultiple($inputNodes.eq(0)) === true){
				////console.log('control allows values will be split at spaces');
				value = value.split(' ');
			}
			//console.debug('name of form element to set value of (if exists in form):'+name+', index:'+index+' new value: '+value);
			////console.debug($inputNodes);
			return $inputNodes.val(value);
		}
	};

	/**
	 * Function: setAllVals
	 * 
	 * Uses current content of $data to set all the values in the form
	 * 
	 * Notes:
	 * 
	 * Since not all data nodes with a value have a corresponding input element, it could be considered to turn this
	 * around and cycle through the HTML form elements and check for each form element whether data is available.
	 * 
	 * Returns:
	 * 
	 *   -
	 */
	FormHTML.prototype.setAllVals = function(){
		var index, name, value,
			that=this;			
		////console.log('setting form values');
		data.node(null, null, {noEmpty: true}).get().each(function(){
			//parent = $(this).parent(),
			//parentName = parent.prop('nodeName'),
			value = $(this).text(); //actually should use Nodeset.getVal() for that would require changing getVal();
			//index = data.node(parentName).get().index(parent);
			index = data.node($(this).prop('nodeName')).get().index($(this));
			name = that.generateName($(this));
			//console.debug('calling input.setVal with name: '+name+', index: '+index+', value: '+value);
			that.input.setVal(name, index, value);
		});
		return;
	};

	FormHTML.prototype.setLangs = function(){
		var lang, value, newLabel,
			that = this,
			defaultLang = $form.find('#form-languages').attr('data-default-lang');
		////console.log('found default language: '+defaultLang);
		$('#form-languages').detach().insertBefore($('form.jr').parent());
		if (!defaultLang || defaultLang==='') {
			defaultLang = $('#form-languages a:eq(0)').attr('lang');
		}
		console.debug('default language is: '+defaultLang);

		if ($('#form-languages a').length < 2 ){
			$form.find('[lang]').addClass('active');
			//hide the short versions if long versions exist
			$form.find('.jr-form-short.active').each(function(){
				if ($(this).siblings('.jr-form-long.active').length > 0){
					$(this).removeClass('active');
				}
			});
			this.setHints();//defaultLang);
			return;
		}

		//$form.find('#form-languages').addClass('ui-helper-clearfix');
		$('#form-languages a').click(function(event){
			event.preventDefault();
			lang = $(this).attr('lang');
			$('#form-languages a').removeClass('active');
			$(this).addClass('active');
			////console.log('going to hide langauges');

			//$form.find('[lang]').not('.jr-hint, .jr-constraint-msg, jr-option-translations>*').show().not('[lang="'+lang+'"], [lang=""], #form-languages a').hide();
			$form.find('[lang]').removeClass('active').filter('[lang="'+lang+'"], [lang=""]').addClass('active');

			//hide the short versions if long versions exist
			$form.find('.jr-form-short.active').each(function(){
				if ($(this).siblings('.jr-form-long.active').length > 0){
					$(this).removeClass('active');
				}
			});

			//swap language of <select> <option>s
			$form.find('select>option').not('[value=""]').each(function(){
				value = $(this).attr('value');
				////console.log('option value is '+value);
				newLabel = $(this).parent('select').next('.jr-option-translations')
					.children('.active[data-option-value="'+value+'"]').text().trim();
				////console.log('new option label is '+newLabel +' with length: '+newLabel.length);
				newLabel = (typeof newLabel !== 'undefined' && newLabel.length > 0) ? newLabel : '[MISSING TRANSLATION]';
				
				$(this).text(newLabel);
			});

			//quickfix for labels and legends that do not contain a span.active without other class
			$form.find('legend span.active:not(.jr-hint, .jr-constraint-msg), label span.active:not(.jr-hint, .jr-constraint-msg)').each(function(){
				if ( $(this).text().trim().length === 0 ){
					$(this).text('[MISSING TRANSLATION]');
				}
			});

			that.setHints();
			//$form.fixLegends();
			$form.trigger('changelanguage');
		});
		$('#form-languages a[lang="'+defaultLang+'"]').click();
	};
		
	// called whenever language or ouput value changes
	FormHTML.prototype.setHints = function(){
		var hint, $wrapNode;
		////console.log('setting hints, lang is '+lang);
		$form.find('*>.jr-hint').parent().each(function(){
			if ($(this).prop('nodeName').toLowerCase() !== 'label' && $(this).prop('nodeName').toLowerCase() !== 'fieldset' ){
				$wrapNode = $(this).parent('fieldset');
			}
			else{
				$wrapNode = $(this);
			}
			//if ($wrapNode.length > 0){
			hint = ($wrapNode.length > 0 ) ? //&& lang !== 'undefined' && lang !== '') ? 
				$(this).find('.jr-hint.active').text().trim() : $(this).find('span.jr-hint').text().trim();
			//}
			
			////console.debug('hint: '+hint);
			if (hint.length > 0){
				////console.debug('setting hint: '+hint);
				//$(this).find('input, select').attr('title', hint);
				$wrapNode.find('.question-icons .hint').attr('title', hint).addClass('ui-icon ui-icon-help');
			}
			else{
				$wrapNode.find('.question-icons .hint').removeAttr('title').removeClass('ui-icon ui-icon-help');
			}
		});
		$form.tooltip(); //  use refresh() ??
	};

	//FormHTML.prototype.reset = function(){
//		//var value1st;
//		//ADD ?? checkForOpenForm(false);
//		$form.reset();
//		this.recordName.reset();
//		this.recordStatus.reset();
//		form.editStatus.set(false);//

//		//$('#survey-title').text('New Survey');//

//		//$('button#delete-form').hide();//

//		//set the combobox with the list of files back to the first item
//		
//	};

	FormHTML.prototype.editStatus = {
		set : function(status){
			$form.attr('data-edited',Boolean(status));//.toString());
			$form.trigger('edit', status);
		},
		get : function(){
			return ($form.attr('data-edited') === 'true') ? true : false;
		}
	};

	FormHTML.prototype.recordName = {
		set : function(key){
			$form.attr('data-stored-with-key', key);
			//$('#record-name').text(key);
			$form.find('h2 span').text(key);
		},
		get : function() {
			return $form.attr('data-stored-with-key') || null;
		},
		reset : function(){
			$form.removeAttr('data-stored-with-key');
		}
	};


	FormHTML.prototype.recordStatus = {
		set : function(markedFinal){
			$form.attr('data-stored-final', markedFinal.toString());
		},
		get : function() {
			return ($form.attr('data-stored-final') === 'true') ? true : false;
		},
		reset : function(){
			$form.removeAttr('data-stored-final');
		}
	};

	// evaluate the skip logic in data-relevant attributes
	// this function should be called whenever $data has been updated
	// If this becomes more complex it is probably better to create a branch object:
	// branch.anim, branch.filter, branch.duration, branch.update, branch.init() //for eventhandlers
	// this would actually be more consistent too as it's more modular like widgets, repeats, preloads
	FormHTML.prototype.branch = {
		init: function(){
			//console.debug('initializing branches');
			$form.on('click', '.jr-branch', function(event){
				var $that = $(this);
				if(!$(this).hasClass('busy')){
					if ($(this).hasClass('show')){
						$(this).addClass('busy').removeClass('show').next().hide('blind', {}, 600, function(){
							$that.removeClass('busy');
						});
					}
					else{
						$(this).addClass('busy show').next().show('blind', {}, 600, function(){
							$that.removeClass('busy');
							$that.next().fixLegends();
						});
					}
				}
				
			});
			this.update();
		},
		/**
		 * updates branches based on changed input fields
		 * @param  {string=} changedNodeNames [description]
		 * @return {boolean}                  [description]
		 */
		update: function(changedNodeNames){
			var i, p, branchNode, result, namesArr, cleverSelector,			
				alreadyCovered = {},
				that=this;
			
			namesArr = (typeof changedNodeNames !== 'undefined') ? changedNodeNames.split(',') : [];
			cleverSelector = (namesArr.length > 0) ? [] : ['[data-relevant]'];
			
			for (i=0 ; i<namesArr.length ; i++){
				cleverSelector.push('[data-relevant*="'+namesArr[i]+'"]');
			}

			console.debug('Updating branches for expressions that contain: '+namesArr.join());
			//console.debug('the clever selector created: '+cleverSelector.join());

			$form.find(cleverSelector.join()).each(function(){
				//VERY WRONG TO USE form HERE!!!! FIX THIS
				//one could argue that I should not use the input object here as a branch is not always an input (sometimes a group)		
				p = form.input.getProps($(this));
				branchNode = form.input.getWrapNodes($(this));
				
				//name = $(this).attr('name');
				
				if ((p.inputType == 'radio' || p.inputType == 'checkbox') && alreadyCovered[p.path]){
					return false;
				}
				////console.debug(p);
				////console.debug(branchNode);

				//type = $(this).prop('nodeName').toLowerCase();
				//type = (type == 'input') ? $(this).attr('type').toLowerCase() : type;
				
				//expr = $(this).attr('data-relevant'); //"5 = 5";

				//branchNode = (type == 'fieldset') ? $(this) : 
				//	(type == 'radio' || type == 'checkbox') ? $(this).parent().parent('fieldset') : $(this).parent('label');

				if(branchNode.length !== 1){
					console.error('could not find branch node');
					return false;
				}
				try{
					//var result = evaluator.evaluate(expr, context.documentElement, null, XPathResult.BOOLEAN_TYPE, null);
					result = data.evaluate(p.relevant, 'boolean', p.path, p.ind);
					//console.debug('evaluated branch logic to: '+result+' (type: '+(typeof result)+')');
				}
				catch(e){
					console.error('Serious error occurred trying to evaluate skip logic '+
					'for node with name: "'+p.path+'" (message: '+e.message+')');
					return false;
				}
			
				alreadyCovered[p.path] = true;

				//for mysterious reasons '===' operator fails after Advanced Compilation even though result has value true 
				//and type boolean
				if (result === true){
					that.enable(branchNode);
				}
				else {
					that.disable(branchNode);
				}
			});
			return true;
		},
		/**
		 * Enables and reveals a branch node/group
		 * @param  {jQuery} branchNode [description]
		 * @return {jQuery}            [description]
		 */
		enable : function(branchNode){
			var type;
			console.debug('enabling branch');

			branchNode.prev('.jr-branch').hide('slow', function(){$(this).remove();});
			
			//branchNode.removeAttr('disabled');
			branchNode.removeClass('disabled').show('blind', {direction: 'up'}, 1000, function(){$(this).fixLegends();} );

			type = branchNode.prop('nodeName').toLowerCase();

			return (type == 'label') ? branchNode.children('input, select, textarea')
				.removeAttr('disabled') : branchNode.removeAttr('disabled');
		},
		disable : function(branchNode){
			var type, 
				branchClue = '<div class="jr-branch ui-corner-all"></div>';

			console.debug('disabling branch');
			//add disabled class (to style) and hide
			branchNode.addClass('disabled').hide(); //HUH??? Hide() DOESN"T WORK WITH PARAMETERS!
			//NOTE: DATA IS NOT REMOVED WHICH IS WRONG!
			
			//if the branch was previously enabled
			if (branchNode.prev('.jr-branch').length === 0){
				branchNode.before(branchClue);
				//if the branch was hidden upon loading, then shown and then hidden again
				//difficult to detect. Maybe better to just replace clearInputs with setDefaults	
				////console.debug('going to clear branch:');
				////console.debug(branchNode);
				branchNode.clearInputs('change');
			}

			//since all fields are emptied they can be marked as valid
			//branchNode.find('input, select, textarea').each(function(){
			//	this.setValid($(this));
			//});

			type = branchNode.prop('nodeName').toLowerCase();

			return (type == 'label') ? branchNode.children('input, select, textarea')
				.attr('disabled', 'disabled') : branchNode.attr('disabled', 'disabled');
	
		}
	};

/**
 * Function: outputUpdate
 * 
 * description
 * 
 * Parameters:
 * 
 * @param {string=} changedNodeNames - [type/description]
 * 
 * Returns:
 * 
 *   return description
 */
	FormHTML.prototype.outputUpdate = function(changedNodeNames){
		var i, $inputNode, contextPath, contextIndex, expr, namesArr, cleverSelector, 
			that=this,
			val='';
		console.log('updating active outputs that contain: '+changedNodeNames);
		namesArr = (typeof changedNodeNames !== 'undefined') ? changedNodeNames.split(',') : [];
		cleverSelector = (namesArr.length > 0) ? [] : ['.jr-output[data-value]'];
		for (i=0 ; i<namesArr.length ; i++){
			cleverSelector.push('.jr-output[data-value*="'+namesArr[i]+'"]');
		}
		//console.debug('the clever selector created: '+cleverSelector.join());
		
		$form.find(':not([disabled]) span.active').find(cleverSelector.join()).each(function(){
			try{
					expr = $(this).attr('data-value');
			//val = data.node($(this).attr('data-value')).getVal();
			///if (typeof expr !== 'undefined' && expr.length > 0){
				//temporary solution to make eMCI form run, some weird stuff in <output value= expressions
			//	try{
					//console.log('trying output expression: '+expr);
		
					val = data.evaluate(expr, 'string');
					//console.log(val);
				}
				catch(e){
					console.error('error occurred trying to evaluate output value from expression: '+
						expr+', (message:'+e.message+')');
					val = '[ERROR]';
				}
			//}	
//			} 
//			catch(e){
//				val = $(this).attr('data-value');
//				//console.log('output value was not referring to a node value, and was therefore assumed to be a string:' +val);
//			}
			$(this).text(val);
		});
		$form.fixLegends();
		//hints may have changed too
		this.setHints();
	};

	//var updatingCalcs;
	//@changedNodeNames {String} comma-separated list of changed data node names
	/**
	 * Function: calcUpdate
	 * 
	 * description
	 * 
	 * Parameters:
	 * 
	 *   @param {string=} changedNodeNames - [type/description]
	 * 
	 * Returns:
	 * 
	 *   return description
	 */
	FormHTML.prototype.calcUpdate = function(changedNodeNames){
		var i, name, expr, dataType, result, constraint, namesArr, valid, cleverSelector;

		//console.log('updating calculated items with expressions that contain: '+changedNodeNames);
		namesArr = (typeof changedNodeNames !== 'undefined') ? changedNodeNames.split(',') : [];
		cleverSelector = (namesArr.length > 0) ? [] : ['input[data-calculate]'];
		for (i=0 ; i<namesArr.length ; i++){
			cleverSelector.push('input[data-calculate*="'+namesArr[i]+'"]');
		}
		//console.debug('the clever selector created: '+cleverSelector.join());
		//if(!updatingCalcs){
			//updatingCalcs = true; //ACTUALLY THIS IS NOT CORRECT! BUT performance could become an issue
			// would be better to call at least twice if a value changes.
			
		$form.find('#jr-calculated-items').find(cleverSelector.join()).each(function(){
			name = $(this).attr('name');
			expr = $(this).attr('data-calculate');
			dataType = $(this).attr('data-type-xml');
			constraint = $(this).attr('data-constraint'); //obsolete?
			result = data.evaluate(expr, 'string', name, null); //not sure if using 'string' is always correct
			//console.debug('evaluated calculation: '+expr+' with result: '+result);
			valid = data.node(name, null).setVal(result, constraint, dataType);
			//if(valid !== 'undefined' && valid === false){
				//console.log('Calculated item with name: '+name+' value was set but does not have a valid value!');
			//}
		});
		//}
		//updatingCalcs = false;
	};

	FormHTML.prototype.beautify = function(){
		//$form.find('#form_logo').detach().prependTo($form);
		$form.find('.jr-group, .jr-repeat').addClass('ui-corner-all');
		$form.find('h2#form-title').addClass('ui-widget-header ui-corner-all');
		/*$form.find('form > fieldset').alternateBackground('alt-bg');*/
		$form.find('.trigger').addClass('ui-state-highlight ui-corner-all');
		//need to trigger fixLegends with a delay.. this is ugly..
		//setTimeout(function(){$form.fixLegends();}, 1000);
		//improve looks when images, video or audio is used as label
		$('fieldset:not(.jr-appearance-compact)>label, fieldset:not(.jr-appearance-compact)>legend').children('img,video,audio').parent().addClass('ui-helper-clearfix with-media');
	};

	FormHTML.prototype.widgets = {
		init : function(){
			//console.log('initializing widgets');
			this.compactWidget();
			this.dateWidget();
			this.timeWidget();
			this.dateTimeWidget();
			this.selectOneWidget();
			this.selectMultiWidget();
			this.readonlyWidget();
			this.gridWidget();
			this.spinnerWidget();
			this.sliderWidget();
			this.geoPointWidget();
			this.barcodeWidget();
		},
		compactWidget: function(){
			//move this to css!
			$form.find('.jr-appearance-compact>label>span').hide(); 
		},
		dateWidget : function(){
			
			/*$form.find('input[type="date"]').click(function(e){
				e.preventDefault();
			}).datepicker({
				onSelect: function(dateText){
					var d = new Date(dateText),
						dv = d.getFullYear().toString().pad(4)+'-'+(d.getMonth()+1).toString().pad(2)+'-'+d.getDate().toString().pad(2);
					$(this).val(dv).trigger('change');
				}
			});*/
			if(!Modernizr.inputtypes.date){
				$form.find('input[type="date"]').datepicker({});
			}
		},
		timeWidget : function(){
			if(!Modernizr.inputtypes.time){
				$form.find('input[type="time"]').timepicker({});
			}
		}, 
		dateTimeWidget : function(){
			if(!Modernizr.inputtypes.datetime){
				$form.find('input[type="datetime"]').datetimepicker();
			}
		},
		selectOneWidget : function(){
			//note: in chrome size is at least 4 if multiple attr is present
			$form.find('select:not([multiple])').attr('size', '1');//.find('[value=""]').remove();	
			$('select:not([multiple])').multiselect({
				'multiple': false,
				'header': 'Select one option',
				'noneSelectedText': 'Select one option',
				'selectedList': 1,
				'position': {
					'my':'left top', 
					'at': 'left bottom'
				}//,
				//selectedList: 1
			});		
		},
		selectMultiWidget : function(){
			//note: in chrome size is at least 4 if multiple attr is present
			$form.find('select[multiple]').attr('size', '5').find('[value=""]').remove(); //for html form

			$('select[multiple]').multiselect({
				'header': 'false', 
				'position': {
					'my':'left top', 
					'at': 'left bottom'
				}

			});
		},
		//transforms readonly inputs into triggers
		readonlyWidget : function(){
			$form.find('input[readonly]:not([data-type-xml="geopoint"])').parent('label').each(function(){
				//var $spans = $(this).find('span').not('.question-icons span').detach(); 
				var html = $(this).html(),
					relevant = $(this).find('input').attr('data-relevant'),
					name = 'name="'+$(this).find('input').attr('name')+'"',
					attributes = (typeof relevant !== 'undefined') ? 'data-relevant="'+relevant+'" '+name : name;
				$('<fieldset class="trigger ui-state-highlight ui-corner-all" '+attributes+'></fieldset>')
					.insertBefore($(this)).append(html).find('input').remove(); 
				$(this).remove();
			});
		},
		gridWidget :function(){
			//$form.find('.jr-appearance-compact label img').selectable();
		},
		spinnerWidget :function(){
			//$form.find('input[type="number"]').spinner();
		},
		sliderWidget : function(){
			//detect max and min with algorithm that evaluates expressions multiple times
			//algortithm could guess likely border values by using a regular expression search...
		},
		geoPointWidget : function(){
			//add current location automatically
			//provide edit button to change manually
			//in edit mode, the button switches to an Auto button that 
			//automatically detects
			$form.find('input[data-type-xml="geopoint"]').attr('placeholder', 'Awesome geopoint widget will follow in the future!');
		},
		autoCompleteWidget: function(){

		},
		barcodeWidget : function(){
			$form.find('input[data-type-xml="barcode"]').attr('placeholder', 'This probably does not require support for browser data entry.');
		}
	};

	/*Note that preloaders may be deprecated in the future, so not important*/
	//functions are design to fail silently if unknown preloaders are called
	FormHTML.prototype.preloads = {
		init: function(){
			var item, param, name, curVal,
				that = this;
			//console.log('initializing preloads');
			$form.find('#jr-preload-items input').each(function(){
				item = $(this).attr('data-preload').toLowerCase();
				param = $(this).attr('data-preload-params').toLowerCase();
				name = $(this).attr('name');
				if (typeof that[item] !== 'undefined'){
					//proper way would be to add index
					curVal = data.node(name).getVal();
					that.setVal($(this), that[item]({param: param, curVal:curVal, node: $(this)}));
				}
				else{
					console.error('Preload "'+item+'"" not supported. May or may not be a big deal.');
				}
			});
		},
		setVal: function(node, val){
			//console.debug('preload input node:');
			//console.debug(node);
			//console.debug('value of preload item to set:' +val);
			//node.removeAttr('disabled').val(val.toString()).trigger('change').attr('disabled', 'disabled');
			node.val(val.toString()).trigger('change');
		},
		'timestamp' : function(o){
			var that = this;
			// when is 'start' or 'end'
			if (o.param == 'start' && o.curVal !== ''){
				return (o.curVal === '') ? o.curVal : data.evaluate('now()', 'string');
			}
			if (o.param == 'end'){
				//set event handler for each save event (needs to be triggered!)
				$form.on('beforesave', function(){that.setVal(o.node, data.evaluate('now()', 'string'));});
				return data.evaluate('now()', 'string');
			}
			return '';
		},
		'date' : function(o){
			var today, year, month, day;

			if (o.curVal !== ''){
				today = new Date(data.evaluate('today()', 'string'));
				year = today.getUTCFullYear().toString().pad(4);
				month = (today.getUTCMonth() + 1).toString().pad(2);
				day = today.getUTCDate().toString().pad(2);

				return year+'-'+month+'-'+day;
			}
			return o.curVal;
		},
		'property' : function(o){
			// of = 'deviceid', 'subscriberid', 'simserial', 'phonenumber'
			// return '' except for deviceid?
			return 'no property preload in Rapaide';
		},
		'context' : function(o){
			// 'application', 'user'??
			return (o.param == 'application') ? 'rapaide' : '';
		},
		'patient' : function(o){
			return 'not supported in Rapaide';
		},
		'user' : function(o){
			//uuid, user_id, user_type
			return 'user preload item not functioning yet';
		},
		'uid' : function(o){
			//general
			return 'no uid';
		},
		'browser' : function(o){
			//console.debug('evaluation browser preload');
			if (o.param == 'name'){
				
				var a = ($.browser.webkit) ? 'webkit' : ($.browser.mozilla) ? 'mozilla' : ($.browser.opera) ? 'opera' : ($.browser.msie) ? 'msie' : 'unknown';
				//console.debug(a);
				return a;
			}
			if (o.param == 'version'){
				return $.browser.version;
			}
		},
		'os': function(o){
			return 'not known';
		}
	};

/**
 * Variable: repeat
 * 
 * This can perhaps be simplified and improved by:
 * - adding a function repeat.update() that looks at the instance whether to add repeat form fields
 * - calling update from init() (data.init() is called before form.init() so the initial repeats have been added already)
 * - when button is clicked data.node().clone() or data.node().remove() is called first and then repeat.update()
 * - watch out though when repeats in the middle are removed... or just disable that possibility
 * 
 */
	FormHTML.prototype.repeat = {
		/**
		 * Function: init
		 * 
		 * Initiates all Repeat Groups in form (only called once).
		 * 
		 * Returns:
		 * 
		 *   return description
		 */
		init : function(){
			var i, numRepsInCount, repCountPath, numRepsInInstance, numRepsDefault,
				that=this;
			//console.debug('initializing repeats');
			$form.find('fieldset.jr-repeat').prepend('<span class="repeat-number"></span>');
			$form.find('fieldset.jr-repeat:not([data-repeat-fixed])')
				.append('<button type="button" class="repeat"></button><button type="button" class="remove"></button>');
			$form.find('button.repeat').button({'text': false, 'icons': {'primary':"ui-icon-plusthick"}});
			$form.find('button.remove').button({'disabled': true, 'text':false, 'icons': {'primary':"ui-icon-minusthick"}});

			//MOVE HANDLERS to FormHTML.eventHandlers?
			//delegated handlers (strictly speaking not required, but checked for doubling of events -> OK)
			$form.on('click', 'button.repeat:enabled', function(){
				//create a clone
				that.clone($(this).parent('fieldset.jr-repeat'));
				//prevent default
				return false;
			});
			$form.on('click', 'button.remove:enabled', function(){
				//remove clone
				that.remove($(this).parent('fieldset.jr-repeat.clone'));
				//prevent default
				return false;
			});
			//if the number of repeats is fixed
			//$form.find('fieldset.jr-repeat[data-repeat-fixed]').each(function(){
//				var numberOfRepeats = 1;
//				//ADD CODE TO determine number of repeats from Xpath reference
//				for (i=1 ; i <  numberOfRepeats ; i++){
//				//call repeatNode from child of $(this)
//				}
//			});

			//clone form fields to create the default number 
			//NOTE THIS ASSUMES THE DEFAULT NUMBER IS STATIC, NOT DYNAMIC!!
			$form.find('fieldset.jr-repeat').each(function(){
				repCountPath = $(this).attr('data-repeat-count') || "";
				numRepsInCount = (repCountPath.length > 0) ? parseInt(data.node(repCountPath).getVal(), 10) : 0;
				//console.debug('number of reps in count attribute: ' +numRepsInCount);
				numRepsInInstance = data.node($(this).attr('name')).get().length;
				numRepsDefault = (numRepsInCount > numRepsInInstance) ? numRepsInCount : numRepsInInstance;
				
				//console.log('default number of repeats for '+$(this).attr('name')+' is '+numRepsDefault);
				//1st rep is already included (by XSLT transformation)
				for (i = 1 ; i<numRepsDefault ; i++){
					that.clone($(this).siblings().andSelf().last(), '');
				}
			});
		},
		/**
		 * Function: clone
		 * 
		 * description
		 * 
		 * Parameters:
		 * 
		 *   node - [type/description]
		 * 
		 * Returns:
		 * 
		 *   return description
		 */
		clone : function($node, ev){
			var $master, $clone, $parent, index, radioNames, i, path, timestamp,
				that = this;
			if ($node.length !== 1){
				console.error('Nothing to clone');
				return false;
			}
			$parent = $node.parent('fieldset.jr-group');
			$master = $parent.children('fieldset.jr-repeat:not(.clone)').eq(0);
			//create a clone and
			$clone = $master.clone(false);//deep cloning with button events causes problems
			//remove any clones inside this clone.. (cloned repeats within repeats..)
			$clone.find('.clone').remove();
			$clone.addClass('clone');//.removeClass('invalid ui-state-error');
			//re-initialize buttons
			$clone.find('button.remove').button({'text':false, 'icons': {'primary':"ui-icon-minusthick"}});
			$clone.find('button.repeat').button({'text': false, 'icons': {'primary':"ui-icon-plusthick"}});

			$clone.insertAfter($node)
				//.find('button').removeClass('ui-state-hover')
				.parent('.jr-group').numberRepeats();
			$clone.hide().show('highlight',{ },600); //animations that look okay: highlight, scale, slide
			//is this code actually working?
			//clone.find('input, select, textarea').val(null);
			$clone.clearInputs(ev);
			$clone.find('.invalid input, .invalid select, .invalid textarea').each(function(){
				that.setValid($(this));
			});
			//clone.find('fieldset.jr-repeat').addClass('clone');

			//note: in http://formhub.org/formhub_u/forms/hh_polio_survey_cloned/form.xml a parent group of a repeat
			//has the same ref attribute as teh nodeset attribute of the repeat. This would cause a problem determining 
			//the proper index if .jr-repeat was not included in the selector
			index = $form.find('fieldset.jr-repeat[name="'+$node.attr('name')+'"]').index($node);
			//parentIndex = $form.find('[name="'+$master.attr('name')+'"]').parent().index($parent);
			//add ____x to names of radio buttons where x is the index
			radioNames = [];
			
			$clone.find('input[type="radio"]').each(function(){
				if ($.inArray($(this).attr('data-name'), radioNames) === -1){
					radioNames.push($(this).attr('data-name'));
				}
			});
			//console.debug ('different radioNames in clone: '+radioNames.join());
			for (i=0; i<radioNames.length ;i++){
				timestamp = new Date().getTime().toString();
				//index of the clone is index of the master node + 1
				//clone.find('input[type="radio"][name="'+radioNames[i]+'"]').attr('name', radioNames[i]+'____'+(index+1));
				$clone.find('input[type="radio"][data-name="'+radioNames[i]+'"]').attr('name', timestamp);
			}

			this.toggleButtons($master.parent());

			//create a new data point in <instance> by cloning the template node
			path = $master.attr('name');

			//0-based index of node in a jquery resultset when using a selector with that name attribute
			//console.log('index of form node to clone: '+index);
			/*
			 * clone data node if it doesn't already exist
			 */
			if (path.length > 0 && index >= 0 ){//&& data.node(path, index+1).get().length === 0){
				////console.debug('calling data.cloneTemplate');
				data.cloneTemplate(path, index);
			}

			$form.trigger('changerepeat'); 
			return true;
		},
		remove : function(node){
			var delay = 600,// dataNode,
				that = this,
				repeatPath = node.attr('name'),
				repeatIndex = $form.find('[name="'+repeatPath+'"]').index(node),
				parentGroup = node.parent('fieldset.jr-group');
			//var parent = node.parent('fieldset.jr-repeat');
		
			//var parentSiblings = parent.siblings();
		
			node.hide('drop',{}, delay, function(){
				node.remove();
				parentGroup.numberRepeats();

				that.toggleButtons(parentGroup);
			});

			//now remove the data node
			data.node(repeatPath, repeatIndex).remove();

			$form.trigger('changerepeat'); 
		},
		toggleButtons : function(node){
			//var constraint;
			node = (typeof node == 'undefined' || node.length === 0 || !node) ?	node = $form : node;
			
			//first switch everything off and remove hover state
			node.find('button.repeat, button.remove').button('disable').removeClass('ui-state-hover');
		
			//enable last + button if constraint is true or non-existing
			//constraint = node.attr('data-constraint');
			//if ((constraint.length > 0 && evalXpression(constraint) === true) || typeof constraint == 'undefined'){
				node.find('fieldset.jr-repeat:last-child > button.repeat').button('enable');
			//}
			// the nth-child selector is a bit dangerous. It relies on this structure <fieldset class="jr-repeat"><h2></h2><label><label><label></fieldset>
			// alternatively, we could allow the first repeat to be deleted as well (as long as it is not the ONLY repeat)
			node.find('fieldset.jr-repeat:not(:nth-child(2)) > button.remove').button('enable'); //Improve this so that it enables all except first
		}
	};
	
	FormHTML.prototype.setEventHandlers = function(){
		var n, valid,//path, index, constraint, value, values, inputType, xmlDataType, indexOfAddition, gpIndex, $fieldset, valid, 
			that = this;

		//first prevent default submission, e.g. when text field is filled in and Enter key is pressed
		$('form.jr').attr('onsubmit', 'return false;');

		$form.on('change validate', 'input, select, textarea', function(event){ 
			n = that.input.getProps($(this));
			//console.debug('change event detected trigger by element with following properties:');
			//console.debug(n);

			//the enabled check serves a purpose only when an input field itself is marked as enabled but its parent fieldset is not
			if (event.type == 'validate'){
				//if an element is disabled mark it as valid (to undo a previously shown branch with fields marked as invalid)
				valid = (n.enabled && n.inputType !== 'hidden') ? data.node(n.path, n.ind).validate(n.constraint, n.xmlType) : true;
			}
			else{
				valid = data.node(n.path, n.ind).setVal(n.val, n.constraint, n.xmlType);
			}
			
			//console.log('data.set validation returned valid: '+valid);
			//additional check for 'required'
			valid = (n.enabled && n.inputType !== 'hidden' && n.required && n.val.length < 1) ? false : valid;

			if (typeof valid !== 'undefined' && valid !== null){
				return (valid === false) ? that.setInvalid($(this)) : that.setValid($(this));
			}
		});	
		
		//nodeNames is comma-separated list as a string
		$form.on('dataupdate', function(event, nodeNames){
			//nodeNames = nodeNames.split(',');
			//console.debug('dataupdate detected on: '+nodeNames);
			//console.debug(event);
			
			that.calcUpdate(nodeNames); //EACH CALCUPDATE THAT CHANGES A VALUE TRIGGERS ANOTHER CALCUPDATE => VERY INEFFICIENT
			that.branch.update(nodeNames);
			that.outputUpdate(nodeNames);
			//it is possible that a changed data value validates question that were previously invalidated
			//that.validateInvalids();
		});

		//edit is fired when the form changes due to user input or repeats added/removed
		//branch update doesn't require detection as it always happens as a result of an event that triggers change or changerepeat.
		$form.on('change changerepeat', function(event){
			//console.debug('detected event to trigger editstatus: ');
			//console.debug(event);
			that.editStatus.set(true);
		});

		$form.on('changerepeat', function(event){
			//set defaults of added repeats, setAllValls does not trigger change event
			that.setAllVals();
			//the cloned fields may have been marked as invalid, so after setting thee default values, validate the invalid ones
			//that.validateInvalids();
		});

//		$form.on('beforesave', function(event){
//			console.debug('beforesave event detected');
//			that.validateAll();
//		});

		//hacks for legends
		//it would be much better to replace these two handlers with a handler that detects the resize event of the form
		//but for some reason that doesn't work
		$(window).resize(function(){
			$form.fixLegends();
		});

		$form.on('changelanguage', function(){
			//console.log('changelanguage event detected');
			that.outputUpdate();
		});
	};

	FormHTML.prototype.setValid = function(node){
		//var visualNode;
		//visualNode = (type == 'checkbox' || type == 'radio') ? node.parent().parent('fieldset') : node.parent('label');
		//visualNode.removeClass('invalid');//.find('div.invalid').remove();
		this.input.getWrapNodes(node).removeClass('invalid ui-state-error');
	};

	FormHTML.prototype.setInvalid = function(node){
		//var visualNode;
		//visualNode = (type == 'checkbox' || type == 'radio') ? node.parent().parent('fieldset') : node.parent('label');
		//visualNode.addClass('invalid');
//		if (!visualNode.children().first().hasClass('invalid')){
//			visualNode.prepend(
//				$('<div class="invalid"></div>').append(visualNode.find('.jr-constraint-msg'))
//			);
//			visualNode.find('.invalid .active').show(); // THIS LINE CAN BE REMOVE WHEN SETLANG() IS REFACTORED USE CSS FOR DISPLAYING
//		}
		this.input.getWrapNodes(node).addClass('invalid ui-state-error');
	};

	/**
	 * Function: generateName
	 * 
	 * Function to generate the name of a form element (= simple path to data node) corresponding to the provided data node. Omits instance node.
	 * 
	 * Parameters:
	 * 
	 *   node - A data node of which to determine the corresponding form field name.
	 * 
	 * Returns:
	 * 
	 *   String that looks like an XPath
	 *   
	 */
	FormHTML.prototype.generateName = function(dataNode){
		//other nodes may have the same XPath but because this function is used to determine the corresponding input name of a data node, index is not included 
		var steps = [dataNode.prop('nodeName')],
			parent = dataNode.parent();
		while (parent.length == 1 && parent.prop('nodeName') !== '#document'){
			steps.push(parent.prop("nodeName"));
			parent = parent.parent();
		}
		return '/'+steps.reverse().join('/');
	};

	/**
	 * Validates all enabled input fields after first resetting everything as valid.
	 * @return {boolean} whether the form contains any errors
	 */
	FormHTML.prototype.validateAll = function(){
		var that = this;
		//can't fire custom events on disabled elements therefore we set them all as valid
		$form.find('fieldset:disabled input, fieldset:disabled select, fieldset:disabled textarea, input:disabled, select:disabled, textarea:disabled').each(function(){
			that.setValid($(this));
		});
		//the above still leaves out elements that are not disabled directly but have disabled parents
		//this is dealt with in the validate event handler
		$form.find('input, select, textarea').trigger('validate');
		return this.isValid();
	};

	/**
	 * Returns true is form is valid and false if not. Needs to be called AFTER (or by) validateAll()
	 * @return {!boolean} whether the form is valid
	 */
	FormHTML.prototype.isValid = function(){
		return ($form.find('.invalid').length > 0) ? false : true;
	};
}

GUI.prototype.setCustomEventHandlers = function(){};

/**
 * Converts a native Date UTC String to a JavaRosa style date string
 * @return {string} a date or datetime string formatted according to JavaRosa
 */
Date.prototype.toJrString = function(){
	//2012-09-05T12:57:00.000-04 (ODK)
	//2012-09-01 (ODK)
	var timezone,
		date=this,
		jrDate = date.getUTCFullYear().toString().pad(4)+'-'+(date.getUTCMonth()+1).toString().pad(2)+'-'+date.getUTCDate().toString().pad(2);
	//console.log('date: '+date.toString());
	if ( date.getUTCMilliseconds() > 0 || date.getUTCSeconds() > 0 || date.getUTCMinutes() > 0 || date.getUTCHours()>0 ){
		jrDate += 'T'+date.getHours().toString().pad(2)+':'+date.getMinutes().toString().pad(2)+':'+date.getSeconds().toString().pad(2)+
			'.'+date.getMilliseconds().toString().pad(3);
		timezone = date.getTimezoneOffset()/60;
		jrDate += (timezone < 0) ? '+'+(-timezone).toString().pad(2) : '-'+timezone.toString().pad(2);
		//(-date.getTimezoneOffset()/60);
	}
	return jrDate;
};

(function($){
	"use strict";
	// plugin to update number of repeated elements (with class jr-repeat)
	$.fn.numberRepeats = function() {

		return this.each(function(){

			$(this).find('fieldset.jr-repeat').each(function(){
				var repSiblings, qtyRepeats, i;
				////console.log('found '+$(this).find('fieldset.jr-group > fieldset.jr-repeat').length +' items');
				// if it is the first-of-type (not that ':first-of-type' does not have cross-browser support)
				if ($(this).prev('fieldset.jr-repeat').length === 0){
					repSiblings = $(this).siblings('fieldset.jr-repeat');
					qtyRepeats = repSiblings.length + 1;
					////console.log('number of repeats of '+$(this).attr('name')+' is '+qtyRepeats);
					if (qtyRepeats > 1) {
						$(this).find('span.repeat-number').text('1');
						i = 2;
						repSiblings.each(function(){
							////console.log('numbering a repeat');
							$(this).find('span.repeat-number').text(i);
							i++;
						});
					}
					else{
						$(this).find('span.repeat-number').empty();
					}
				}
				else{
					////console.log('not first of type');
				}
			});
		});
	};

/**
 * Function: clearInputs
 * 
 * Clears form input fields and triggers events when doing this. If formelement is cloned but not yet added to DOM 
 * (and not synchronized with data object), the desired event is probably 'edit' (default). If it is already added 
 * to the DOM (and synchronized with data object) a regular change event should be fired
 * 
 * Parameters:
 * 
 *   ev - event to be triggered
 * 
 * Returns:
 * 
 *   jQuery this object
 */
	$.fn.clearInputs = function(ev) {
		ev = ev || 'edit';
		////console.log('objects received to clear: '+this.length);
		////console.debug(this);
		////console.log('event to fire: '+ev);
		return this.each(function(){
			////console.debug($(this));
			$(this).find('input, select, textarea').each(function(){
				var type = $(this).attr('type');
				if ($(this).prop('nodeName').toUpperCase() === 'SELECT'){
					type = 'select';
				}
				if ($(this).prop('nodeName').toUpperCase() === 'TEXTAREA'){
					type = 'textarea';
				}
				////console.log('type to reset: '+type);
				switch (type){
					case 'date':
					case 'number':
					case 'search':
					case 'color':
					case 'range':
					case 'url':
					case 'email':
					case 'password':
					case 'text':
					case 'file':
					case 'hidden':
					case 'textarea':
						$(this).val('').trigger(ev);
						break;
					case 'radio':
					case 'checkbox':
						if ($(this).prop('checked')){
							//console.log('found checked value, going to reset it');
							$(this).prop('checked', false);
							$(this).trigger(ev);
						}
						break;
					case 'select':
						// TEST THIS!
						$(this)[0].selectedIndex = -1;
						$(this).trigger(ev);
						break;
					default:
						console.error('Unrecognized input type found when trying to reset: '+type);
				}
			});
		});
	};

	//this corrects a problem caused by the css legend fix (that positions the legend as 'absolute')
	//it corrects the margin-top of the first <label> sibling following a <legend>
	//the whole form (or several) can be provides as the context
	$.fn.fixLegends = function() {
		var legendHeight;
		////console.log('fixing legends');
		return this.each(function(){
			$(this).find('legend + label').each(function(){
				//console.error('found legend');
				legendHeight = ($(this).prev().find('.jr-constraint-msg.active').length > 0 && $(this).prev().height() < 36) ? 36 : 
					($(this).prev().height() < 19) ? 19 : 
					$(this).prev().height();
				
				$(this).animate({
					'margin-top' : (legendHeight+6)+'px'
				}, 600 );
			});
		});
	};


	/**
	 * Function: xfind
	 * 
	 * Simple XPath Compatibility Plugin for jQuery 1.1
	 * By John Resig
	 * Dual licensed under MIT and GPL.
	 * some changes made by Martijn van de Rijdt (not replacing $.find(), removed context)
	 * 
	 * Parameters:
	 * 
	 *   selector - String containing a JQuery selector or an XPath/
	 * 
	 * Returns:
	 * 
	 *   Nodes matching the selector.
	 *   
	 * See Also:
	 * 
	 *   Original plugin code here: http://code.google.com/p/jqueryjs/source/browse/trunk/plugins/xpath/jquery.xpath.js?spec=svn3167&r=3167
	 */
    $.fn.xfind = function(selector){
			var parts, cur, i;
			////console.debug('xfind plugin received selector: '+selector);
			// Convert the root / into a different context
            //if ( !selector.indexOf("/") ) {
            //        context = context.documentElement;
            //        selector = selector.replace(/^\/\w*/, "");
            //        if ( !selector )
            //                return [ context ];
            //}

            // Convert // to " "
            selector = selector.replace(/\/\//g, " ");

            //added by Martijn
            selector = selector.replace(/^\//,"");
            selector = selector.replace(/\/\.$/,'');

            // Convert / to >
            selector = selector.replace(/\//g, ">");

            // Naively convert [elem] into :has(elem)
            selector = selector.replace(/\[([^@].*?)\]/g, function(m, selector){
                    return ":has(" + selector + ")";
            });

            // Naively convert /.. into a new set of expressions
            // Martijn: I just don't see this except if this always occurs as nodea/../../parentofnodea/../../grandparentofnodea
            if ( selector.indexOf(">..") >= 0 ) {
                    parts = selector.split(/>\.\.>?/g);
                    //var cur = jQuery(parts[0], context);
                    cur = jQuery(parts[0], this);
                    for ( i = 1; i < parts.length; i++ )
                            cur = cur.parent(parts[i]);
                    return cur.get();
            }

            //selector += ':not([template], [template] *)';
            ////console.debug('xfind plugin going to return jQuery object with selector: '+selector);
            //if performance becomes an issue, it's worthwhile implementing this with native XPath instead.
            return this.find(selector);
    };

})(jQuery);
/**
 * @preserve Copyright 2012 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true, devel:true, jquery:true, smarttabs:true sub:true *//*global gui, jrDataStr, report, Form, store:true, StorageLocal:true, Settings, Modernizr*/

/* Global Variables and Constants -  CONSTANTS SHOULD BE MOVED TO CONFIG FILE AND ADDED DYNAMICALLY*/

var /**@type {Form}*/form;
var /**@type {Connection}*/connection;
var /**@type {Cache}*/cache;
var /**@type {Settings}*/settings,
	currentOnlineStatus = false;//, SURVEY_FORM_ID;
var /**@type {StorageLocal}*/ store;
var MODERN_BROWSERS_URL = 'modern_browsers';

DEFAULT_SETTINGS = {'autoUpload':true, 'buttonLocation': 'bottom', 'autoNotifyBackup':false };
//var GEARS_MANIFEST_URL = 'manifest/gears';

//var MAX_QTY_SAVED_FORMS = 50;
var CACHE_CHECK_INTERVAL = 3600*1000;

//tight coupling with Form and Storage class, but loose coupling with GUI
// !Document.ready()
/************ Document Ready ****************/
$(document).ready(function() {
	'use strict';
	var bookmark, message, choices, shown, time;

	store = new StorageLocal();
	form = new Form('form.jr:eq(0)', jrDataStr);
	settings = new Settings();
	settings.init();
	connection = new Connection();
	
	// check if localStorage is supported and if not re-direct to browser download page
	if (!store.isSupported()){
	//if(Modernizr.localStorage){
		//console.log('redirect attempt because of lack of localStorage support'); // DEBUG
		window.location = MODERN_BROWSERS_URL;
	}
	else{
		$(document).trigger('browsersupport', 'local-storage');
	}

	//reminder to bookmark page will be shown 3 times
	bookmark = store.getRecord('__bookmark');
	
	//shown=0;
	//if (bookmark){
	//	shown = (bookmark.shown) ? bookmark.shown : 0;
	//}

	shown = (bookmark) ? bookmark['shown'] : 0;
	if(shown < 3){
		setTimeout(function(){
			time = (shown === 1) ? 'time' : 'times';
			gui.showFeedback('Please bookmark this page for easy offline launch. '+
				'This reminder will be shown '+(2-shown)+' more '+time+'.', 20);
			shown++;
			store.setRecord('__bookmark', {'shown': shown});
		}, 5*1000);
	}
	
	//best to place this after localStorage check, so that IE7 users with Gears
	//will be re-directed immediately before asking whether they allow Gears to store data
	if ($('html').attr('manifest')){
		cache = new Cache();
		cache.init();
		// application cache for launching application offline
		if (cache.isSupported()){
			
			$(document).trigger('browsersupport', 'offline-launch');
			
			//check for updated cache
			checkCache();
			
			// Check for an updated manifest file regularly and refresh cache if necessary.
			window.setInterval(function(){
				checkCache();
			}, CACHE_CHECK_INTERVAL);
			
		}
		else{ // if applicationCache is not supported
			message = 'Offline application launch not supported by your browser. '+
					'You can use it without this feature or see options for resolving this';
			choices = {
				posButton : 'Show options',
				negButton : 'Use it',
				posAction : function(){ window.location = MODERN_BROWSERS_URL; }
			};
			gui.confirm({msg: message, heading:'Application cannot launch offline'}, choices);
		}
		console.log('cache initialized');
	}

	//var formFormat;
	// get form format from json file and build the survey form elements
	//var request;
//	if (window.XMLHttpRequest){
	//request=new XMLHttpRequest();
	//request.open("GET", FORM_FORMAT_URL, false); //not asynchronous!!
	//request.send();
	//if (request.responseText === 'error'){
	//	console.log('This survey does not exist or has not been published yet');
	//}
	//else if (request.responseText && request.responseText!=''){
	//	formFormat = JSON.parse(request.responseText);
	//	//formFormat = request.responseText; //maybe do check to see if responseText is in XML format?
	//	console.log('loaded form format from the json file:'+JSON.stringify(formFormat));
	//}
	//else {
	//	console.log('Error occurred while loading form format');
	//}
	////	var formBuiltSuccessfully;
//	if (formFormat){
//		formBuiltSuccessfully = form.init(formFormat);
//	}
	
	//console.log('form built successfully?: '+formBuiltSuccessfully); // DEBUG
	
//	if(formBuiltSuccessfully){
		
		
		//$('header #survey-info').text(form.COUNTRY+' '+form.SECTOR+' '+form.YEAR+' '+form.SURVEY_NAME);
		
	// initialize the GUI object
	//gui.init();
	
	form.init();
	
	connection.init(); //should be called after form format is loaded
	//initialize file export/backup function
	//initSaveFormsToFile(); // CHECK SAFARI OS X BUG
	
	
	
	// ADD / REPLACE If there is sufficient cross-browser support this could be replaced by simply calling window.navigator.onLine which returns false or true
	//var onlineCheckInterval = window.setInterval(function () {
		//checking online status
		//console.log('checking online status'); // DEBUG
	//	gui.updateConnectionStatus(connection.getStatus());
	//}, 5*1000);
			
	
	
	///var linkAnalysis = $('#link-analysis').attr('href')+'?name='+connection.getTableName();
	//$('#link-analysis').attr('href', linkAnalysis);
	
	

	gui.setup();
//	}
//	else{
//	// ADD ERROR PAGE!
//	console.log('form not built successfully');
//	}

	//trigger fake save event to update formlist on data page
	$('form.jr').trigger('save', JSON.stringify(store.getFormList()));
});

function checkCache(){
	'use strict';
	cache.checkForUpdate();
	window.setTimeout(function(){
		console.log('going to provide cache feedback to user. cache.getError='+cache.getError()); // DEBUG
		if (cache.updateReady()){
			gui.showFeedback('A new version of this application has been downloaded. '+
				'Please save your work and refresh to update.', 20); //REQUIRES DOUBLE REFRESH IN IE8....
		}
		else if (cache.getError()){
			if (cache.getError() === 'security'){
				gui.showFeedback ('Please allow site to store data for offline use and refresh.', 60);
			}
			else {
				gui.alert('An error occurred with the application cache. '+
				'You may have a problem launching offline (error: '+cache.getError()+'). '+
				'Please save your work, refresh and check if offline launch works.');
			}
		}
	}, 30*1000); //it may take a while for the resources to download
}

/**
 * Controller function to load a form from local storage. Checks whether there is any unsaved data in the current form first.
 * @param  {string} formName  The name of the form to load (key of local db).
 * @param  {boolean=} confirmed Whether unsaved data can be discarded and lost forever.
 */
function loadForm(formName, confirmed){
	'use strict';
	var message, choices, record;
	//console.log('loadForm called'); // DEBUG
	if (!confirmed && form.getEditStatus()){
		message = 'Would you like to proceed without saving changes to the form you were working on?';
		choices = {
			posAction: function(){ loadForm(formName, true); }
		};
		gui.confirm(message, choices);
	}
	else {
		// request a form data object
		record = store.getRecord(formName);
		//enters that data in the form on the screen
		// *OLD*checkForOpenForm(true);
		if (record.data !== null){
			//var success = form.setData(data);
			form.reset();
			//gui.closePage();
			form = new Form('form.jr:eq(0)', record.data);
			form.init();
			//form.setRecordStatus(record.ready);
			//Avoid uploading of currently open form by setting edit status in STORE to false. To be re-considered if this is best approach.
			//store.setRecordStatus(formName, false);
			form.setRecordName(formName);
			//console.log('displaying loaded form data succes?: '+success); // DEBUG
			$('#page-close').click();
			$('button#delete-form').button('enable');
			//if(!success){
				//gui.alert('Error loading form. Saved data may be corrupted');
			//}
			//else
			gui.showFeedback('"'+formName +'" has been loaded', 2);
		}
		else{
			gui.alert('Record contained no data');
			// ADD something went wrong with loading data from storage
		}
	}
}
/**
 * [saveForm description]
 * @param  {string=} confirmedRecordName  [description]
 * @param  {string|boolean=} confirmedFinalStatus [description]
 * @param  {boolean=} deleteOldName        [description]
 * @param  {boolean=} overwriteExisting    [description]                   [description]
 */
function saveForm(confirmedRecordName, confirmedFinalStatus, deleteOldName, overwriteExisting){
	'use strict';
	var result, message, choices,
		curRecordName = form.getRecordName(),
		curRecordFinal = form.getRecordStatus(),
		rec = {};
		//record = { 'data': form.getDataStr(true, true), 'ready': confirmedFinalStatus};
	//record['ready'] = confirmedFinalStatus;
	console.debug('new name: '+confirmedRecordName+', before: '+curRecordName+', delOld: '+deleteOldName+', overwr: '+overwriteExisting);
	if (form.getDataStr(true, true) === null || form.getDataStr(true, true) === ''){
		return gui.showFeedback('Nothing to save.'); //ADD error with getting data from form?
	}

	if (typeof confirmedRecordName == 'undefined' || confirmedRecordName.length === 0){
		curRecordName = curRecordName || store.getCounterValue();
		$('#dialog-save input[name="record-name"]').val(curRecordName);
		$('#dialog-save input[name="record-final"]').attr('checked', curRecordFinal);
		return gui.saveConfirm();
		//console.debug('new Record Props: '+JSON.stringify(newRecord));
		//return saveForm(newRecord.name, newRecord.markedFinal);
	}

	if (curRecordName && curRecordName !== confirmedRecordName && typeof deleteOldName == 'undefined'){
		message = 'Record name has changed. Would you like to delete the record saved under the old name:'+curRecordName+'?';
		choices = {
			posButton : 'Yes, delete',
			negButton : 'No, keep',
			posAction : function(){ saveForm(confirmedRecordName, confirmedFinalStatus, true); },
			negAction : function(){ saveForm(confirmedRecordName, confirmedFinalStatus, false); }
		};
		return gui.confirm({msg: message, heading: 'Delete old Record?'}, choices);
	}

	//trigger beforesave event which is used e.g. to update timestamp preload item.
	$('form.jr').trigger('beforesave');
	rec = { 'data': form.getDataStr(true, true), 'ready': confirmedFinalStatus};
	// HOW THE HELL DOES REC GET A LASTSAVED PROPERTY HERE??? SOMETHING VERY WRONG
	console.debug('sending following record to store.setRecord():');
	console.debug(rec);
	//alert('hey');
	result = store.setRecord(confirmedRecordName, rec, deleteOldName, overwriteExisting, curRecordName);
		
	console.log('result of save: '+result); // DEBUG
	if (result === 'success'){
		gui.showFeedback('Form with name "'+confirmedRecordName+'" has been saved.', 2);
		
		//set the new custom html5 data attribute stored-with-key
		form.setRecordName(confirmedRecordName);
		form.setRecordStatus(confirmedFinalStatus);
		form.setEditStatus(false);
		$('button#delete-form').button('enable');
		//update records in GUI
		$('form.jr').trigger('save', JSON.stringify(store.getFormList()));
	}
	//else if (result === 'require'){
	//	gui.alert (form.KEY_LABEL+' is required. Please provide this.');
	//}
	else if (result === 'existing'){
		message = 'Record with name '+confirmedRecordName+' already exists. Would you like to overwrite existing record? ';
		choices = {
			posButton : 'Yes, overwrite',
			posAction : function(){ saveForm(confirmedRecordName, confirmedFinalStatus, deleteOldName, true); },
			negAction : function(){ gui.showFeedback("Form was not saved.");}
		};
		gui.confirm(message, choices);
	}
	else if (result === 'forbidden'){
		gui.alert ('This name is not allowed. Please change it');
		gui.showFeedback ('Form was NOT saved.');
	}
	else {
		gui.showFeedback('Error occurred. Form was NOT saved.');
	}
}

/**
 * Controller function to reset to a blank form. Checks whether all changes have been saved first
 * @param  {boolean=} confirmed Whether unsaved changes can be discarded and lost forever
 */
function resetForm(confirmed){
	'use strict';
	var message, choices;
		//valueFirst = /**@type {string} */$('#saved-forms option:first').val();
	//console.debug('first form is '+valueFirst);
	//gui.pages().get('records').find('#records-saved').val(valueFirst);
	console.debug('editstatus: '+ form.getEditStatus());
	if (!confirmed && form.getEditStatus()){
		message = 'There are unsaved changes, would you like to continue <strong>without</strong> saving those?';
		choices = {
			posAction : function(){ resetForm(true); }
		};
		gui.confirm(message, choices);
	}
	else {
		form.reset();
		form = new Form('form.jr:eq(0)', jrDataStr);
		form.init();
		$('button#delete-form').button('disable');
	}
}

/**
 * Controller function to delete a record of form data.
 * @param  {boolean=} confirmed whether the user has confirmed that he/she wants to delete the data
 */
function deleteForm(confirmed) {
	'use strict';
	var message, choices, key = form.getRecordName();

	if (key !== '' && key !== null){
		if (confirmed){
			var success = store.removeRecord(key);
			if (success){
				resetForm(true);
				gui.showFeedback('Successfully deleted form.');
				$('form.jr').trigger('delete', JSON.stringify(store.getFormList()));
			}
			else {
				gui.showFeedback('An error occurred when trying to delete this form.');
			}
		}
		else {
			message = 'Please confirm that you would like to remove this form from storage.';
			choices = {
				posButton : 'Delete',
				posAction : function(){ deleteForm(true); }
			};
			gui.confirm(message, choices);
		}
	}
	else {
		gui.showFeedback ('Please first load the form you would like to delete or choose reset if you\'d like to reset the current form.');
	}
	return;
}

/**
 * function to export or backup data. It depends on the browser whether this data is shown in a new browser window/tab
 * or is downloaded automatically. It is not possible to provide a file name.
 *
 * @param  {boolean=} finalOnly [description]
 */
function exportData(finalOnly){
	"use strict";
	var data, uriContent, newWindow;
	finalOnly = finalOnly || true;

	data = store.getSurveyDataXMLStr(finalOnly);//store.getSurveyData(finalOnly).join('');
	//console.debug(data);
	if (!data){
		gui.showFeedback('No data marked "final" to export.');
	}
	else{
		uriContent = "data:application/octet-stream," + encodeURIComponent(data); /*data:application/octet-stream*/
		newWindow = window.open(uriContent, 'exportedData');
	//window.location.href = uriContent;
	}
}

// BUG: function causes a crash in Safari on OS X when loaded from appCache in fresh Safari browser window
//function initSaveFormsToFile() {
//	'use strict';
//	$('#downloader').downloadify({
//		filename: function(){
//			return 'All_Form_Data.json'; //static file -- you could retrieve from form input box
//		},
//		data: function(){
//			console.log('getting data for download'); // DEBUG
//			return JSON.stringify(store.getRecordCollection()); //static content -- you could retrieve from form input box
//		},
//		onComplete: function(){
//			gui.showFeedback('The file has been saved!');
//		},
//		onCancel: function(){
//		// anything?
//		},
//		onError: function(){
//			gui.alert('Error saving file. File not saved!');
//		},
//		swf: '/libraries/downloadify/downloadify.swf',
//		downloadImage: '/libraries/downloadify/download.png', // CHANGE THIS IMAGE AND LOCATION
//		width: 210,
//		height: 55,
//		transparent: true,
//		append: false
//	});
//}

/**
 * @constructor
 * Function (CLass): Cache
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
function Cache(){
	'use strict';
	var cacheType, appCache, update, error;
	var loadedVersion; //only used for Gears cache
		
	this.init = function(){
		//first check for the preferred cache
		if (window.applicationCache){
			cacheType='html5Cache';
			appCache = window.applicationCache;
			//checkForUpdate();
			appCache.addEventListener('updateready', function(){
			// when an updated cache is downloaded and ready to be used
			// swap to the newest version of the cache, will NOT refresh page only newly called resources
			appCache.swapCache();
			update = true;
			}, false);
			appCache.addEventListener('error', function(event){
				console.log ('HTML5 cache error event'); // DEBUG
				if (connection.getOnlineStatus()) {//error event always triggered when offline
					console.log ('noticed online status'); //DEBUG
					error = "error downloading application"; // Possible to trigger cache problem for testing?
				}
			}, false);
		}
//		else if (window.google && google.gears){
//			try{
//				var gearsServer = google.gears.factory.create('beta.localserver');
//				appCache = gearsServer.createManagedStore('rapaide_store');
//				appCache.manifestUrl = GEARS_MANIFEST_URL;
//				if (appCache){
//					cacheType='gearsCache';
//				}
//				loadedVersion = appCache.currentVersion;
//				//checkForUpdate();
//				var timerId = window.setInterval(function() {
//					// When the currentVersion property has a value, all of the resources
//					// listed in the manifest file for that version are captured.
//					if (loadedVersion) {
//						window.clearInterval(timerId);
//						console.log('loaded Gears cache with version:'+loadedVersion);
//						error = null;
//					}
//					else if (appCache.updateStatus == 3) {
//						console.log('Error: ' + appCache.lastErrorMessage); // DEBUG
//						error = appCache.lastErrorMessage;
//						window.clearInterval(timerId); //TEST this by creating incorrect manifest URL
//					}
//				}, 500);
//			}
//			catch(e){
//				console.log ('Gears does not have permission or other Gears initialization error');
//			}
//		}
	};
	
	this.isSupported = function(){
		return (cacheType==='html5Cache' || cacheType==='gearsCache') ? true : false;
	};
	
	this.checkForUpdate = function(){
		console.log('checking for cache update');
		//switch(cacheType){
			//case 'html5Cache':
				try{appCache.update();}
				//Opera throws mysterious INVALID_STATE_ERR
				catch(e){
					if (e.name === 'NS_ERROR_DOM_SECURITY_ERR'){ //FF before approving offline use
						error = 'security';
					}
					console.log('error thrown during cache update. error name: '+e.name+'  message: '+e.message);
				}
				//event listener will update variable 'update';
		//		break;
//			case 'gearsCache' :
//				// Checking for updates will also happen regularly automatically even if not explicitly called
//				appCache.checkForUpdate();
//				break;
//		}
		return;
	};

	this.updateReady = function(){
//		if (cacheType==='gearsCache'){
//			//console.log ('loadedVersion:'+loadedVersion); //DEBUG
//			//console.log ('currentVersion:'+appCache.currentVersion); //DEBUG
//			update = (loadedVersion !== '' && loadedVersion != appCache.currentVersion) ? true : false;
//		}
		console.log('updateReady() returns: '+update); //DEBUG
		return update;
	};

	this.getError = function(){
		return error;
	};

}


//Class dealing with communication to the server ADD HTML5 VALIDATION and FILE/URL UPLOAD from launch.js
/**
 * @constructor
 *
 * Function: Connection
 *
 * description
 *
 * Returns:
 *
 *   return description
 */
function Connection(){
	"use strict";
	//var onlineStatus;
	//var tableFields, primaryKey;
	//var tableName, version;
	var that=this;
	this.uploadOngoing = false;
	
	this.init = function(){
		//console.log('initializing Connection object');
		//checkOnlineStatus();
		that = this;
		window.setInterval(function(){
			//console.log('setting status'); //DEBUG
			//setStatus();
			that.upload();
		}, 10*1000);
		//window.addEventListener("offline", function(e){
		//	console.log('offline event detected');
		//	setStatus();
		//}
		//window.addEventListener("online", function(e){
		//	console.log('online event detected');
		//	setStatus();
		//}
		$(window).on('offline online', function(){
			//console.log('window network event detected');
			that.setOnlineStatus(that.getOnlineStatus());
		});
		//since network change events are not properly fired, at least not in Firefox 13 (OS X), this is an temporary fix
		//that can be removed eventually or set to to 60x1000 (1 min)
		/*window.setInterval(function(){
			$(window).trigger('online');
		}, 10*1000);*/
		$(window).trigger('online');
		//setTableVars();
	};
}
	
//	function setTableVars(){
//		var primaryKey;
//		tableName = form.COUNTRY+'_'+form.SECTOR+'_'+form.YEAR+'_'+form.SURVEY_NAME;
//
//		//make tableName database friendly
//		tableName = tableName.replace(/\s/g, '_');
//		//console.log('tableName without whitespace: '+tableName); //DEBUG
//		tableName = tableName.toLowerCase();
//		//console.log('tableName lowercase: '+tableName); //DEBUG
//
//		version = form.VERSION;
//
//		//tableFields = '';
//		//for (var i=0; i<form.QUESTIONS.length; i++){
//		//	tableFields += form.QUESTIONS[i].id + ' ' + form.QUESTIONS[i].type + ', ';
//		//}
//		//tableFields += 'lastSaved double, lastUploaded double';
//		//primary key of MySQL table is a combination of two colummns and only the first 20 characters of the second column are used.
//		primaryKey = 'lastUploaded, '+form.KEY_NAME+'(20)';
//	}
//
//	this.getStatus = function(){
//		return onlineStatus;
//	};
//
//	this.getTableName = function(){
//		return tableName;
//	};
	
	//this.setAutoUpload = function(upload){
	//	autoUpload = upload;
	//}
	
	// provides the connection status, should be considered: 'seems online' or 'seems offline'
	// NEEDS IMPROVEMENT. navigator.onLine alone is probably not appropriate because for some browsers this will
	// return true when connected to a local network that is not connected to the Internet.
	// However, this could be the first step. If (true) a request is sent to the server to check for a connection
	// @online = used to force a status (necessary?)
Connection.prototype.getOnlineStatus = function(){
	console.log('checking connection status');//, status before check is: '+onlineStatus); // DEBUG
	//if (typeof online !== 'undefined' && ( online === true || online === false ) ){
		//setStatus(online);
	//}
	//forced status
	//else {
	return navigator.onLine;
		//navigator.onLine not working properly in Firefox
		//if (navigator.onLine){
			//NOTE that GET is not working (by default) in a CodeIgniter setup!!
//				$.ajax({
//					type:'POST',
//					url: CONNECTION_URL,
//					cache: false,
//					dataType: 'text',
//					timeout: 3000,
//					success: function(){
//						setStatus(true);
//						},
//					error: function(){
//						setStatus(false);
//						}
//				});
		//}
		//else {
			//setStatus(false);
		//}
//	}
};
	
Connection.prototype.setOnlineStatus = function(newStatus){
	//var oldStatus = onlineStatus;
	//onlineStatus = online;
	if (newStatus !== this.currentOnlineStatus){
		console.log('status changed to: '+newStatus+', triggering window.onlinestatuschange');
		$(window).trigger('onlinestatuschange', newStatus);
	}
	this.currentOnlineStatus = newStatus;
};

// PROTECTION AGAINST CALLING FUNCTION TWICE to be tested
// attempts to upload all finalized forms *** ADD with the oldest timeStamp first? ** to the server
Connection.prototype.upload = function(force, excludeName) {
	var i, name, result,// last,
		//uploadQueue = [],
		autoUpload = (settings.getOne('autoUpload') === 'true' || settings.getOne('autoUpload') === true) ? true : false;
	//console.log('upload called with uploadOngoing variable: '+uploadOngoing+' and autoUpload: '+autoUpload); // DEBUG

	// proceed if autoUpload is true or it is overridden, and if there is currently no queue for submissions
	if ( ( typeof this.uploadQueue == 'undefined' || this.uploadQueue.length === 0 ) && ( autoUpload === true || force ) ){
		//var dataArr=[];//, insertedStr='';
		this.uploadResult = {win:[], fail:[], force: force};
		this.uploadQueue = store.getSurveyDataArr(true, excludeName);

		console.debug('upload queue: '+this.uploadQueue);

		if (this.uploadQueue.length === 0 ){
			return (force) ? gui.showFeedback('Nothing marked "final" to upload (or record is currently open).') : false;
		}
		//for (i=0 ; i<dataArr.length ; i++){
			//last = (i == dataArr.length-1) ? true : false;
		//name = dataArr[i].name;
		this.uploadOne();
		//this.uploadOne(dataArr[i].data, name, last);
		//}
	}
};

Connection.prototype.uploadOne = function(){//dataXMLStr, name, last){
	var record, content, last,
		that = this;
	if (this.uploadQueue.length > 0){
		record = this.uploadQueue.pop();
		content = new FormData();
		content.append('xml_submission_data', form.prepareForSubmission(record.data));//dataXMLStr);
		content.append('Date', new Date().toUTCString());
		last = (this.uploadQueue.length === 0) ? true : false;
		//console.log('attempting upload with override: '+override+' Changing uploadOngoing to true'); // DEBUG
		//this.uploadOngoing = true;
		//console.log('data to be send: '+JSON.stringify(dataObj)); // DEBUG
		$.ajax('data/submission',{
			type: 'POST',
			data: content,
			cache: false,
			//async: false, //THIS NEEDS TO BE CHANGED, BUT AJAX SUBMISSIONS NEED TO TAke place sequentially
			contentType: false,
			processData: false,
			complete: function(jqXHR, response){
				that.processOpenRosaResponse(jqXHR.status, record.name, last);
				//ODK Aggregrate gets very confused if two POSTs are sent in quick succession,
				//as it duplicates 1 entry and omits the other but returns 201 for both...
				//so we wait until previous POST is finished.
				that.uploadOne();
			}
		});
	}
	
};


Connection.prototype.processOpenRosaResponse = function(status, name, last){
	var i, waswere, namesStr,
		msg = '',
		names=[],
		statusMap = {
		0: {success: false, msg: "Uploading of data failed (probably offline)"},
		200: {success:false, msg: "Data server did not accept data. Contact Enketo helpdesk please."},
		201: {success:true, msg: ""},
		202: {success:true, msg: name+" may have had errors. Contact survey administrator please."},
		'2xx': {success:false, msg: "Unknown error occurred when submitting data. Contact Enketo helpdesk please"},
		400: {success:false, msg: "Data server did not accept data. Contact survey administrator please."},
		403: {success:false, msg: "You are not allowed to post data to this data server. Contact survey administrator please."},
		404: {success:false, msg: "Submission area on data server not found or not properly configured."},
		'4xx': {success:false, msg: "Unknown submission problem on data server."},
		413: {success:false, msg: "Data is too large. Please export the data and contact the Enketo helpdesk please."},
		500: {success:false, msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."},
		503: {success:false, msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."},
		'5xx':{success:false, msg: "Sorry, the Enketo server is down or being maintained. Please try again later or contact Enketo helpdesk please."}
	};
	console.debug('name: '+name);
	console.debug(status);
	
	if (typeof statusMap[status] !== 'undefined'){
		if ( statusMap[status].success === true){
			store.removeRecord(name);
			$('form.jr').trigger('delete', JSON.stringify(store.getFormList()));
			console.log('tried to remove record with key: '+name);
			this.uploadResult.win.push([name, statusMap[status].msg]);
		}
		else if (statusMap[status].success === false){
			this.uploadResult.fail.push([name, statusMap[status].msg]);
		}
	}
	//unforeseen statuscodes
	else if (status > 500){
		console.error ('error during uploading, received unexpected statuscode: '+status);
		this.uploadResult.fail.push([name, statusMap['5xx'].msg]);
	}
	else if (status > 400){
		console.error ('error during uploading, received unexpected statuscode: '+status);
		this.uploadResult.fail.push([name, statusMap['4xx'].msg]);
	}
	else if (status > 200){
		console.error ('error during uploading, received unexpected statuscode: '+status);
		this.uploadResult.fail.push([name, statusMap['2xx'].msg]);
	}
	
	if (last !== true){
		return;
	}

	if (this.uploadResult.win.length > 0){
		for (i = 0 ; i<this.uploadResult.win.length ; i++){
			names.push(this.uploadResult.win[i][0]);
			msg = (typeof this.uploadResult.win[i][2] !== 'undefined') ? msg + (this.uploadResult.win[i][1])+' ' : '';
		}
		waswere = (i>1) ? ' were' : ' was';
		namesStr = names.join(', ');
		gui.showFeedback(namesStr.substring(0, namesStr.length) + waswere +' successfully uploaded. '+msg);
	}
	//else{
	// not sure if there should be a notification if forms fail automatic submission
	if (this.uploadResult.fail.length > 0){
		if (this.uploadResult.force === true){
			for (i = 0 ; i<this.uploadResult.fail.length ; i++){
				msg += this.uploadResult.fail[i][0] + ': ' + this.uploadResult.fail[i][1] + '<br />';
			}
			gui.alert(msg, 'Failed data submission');
		}
		else{

		}
	}

	this.uploadOngoing = false;
	//re-enable upload button
};


//avoid Google Closure Compiler renaming:
//Settings.prototype['autoUpload'] = Settings.prototype.autoUpload;
//Settings.prototype['buttonLocation'] = Settings.prototype.buttonLocation;

Settings.prototype['autoUpload'] = function(val){

};

Settings.prototype['buttonLocation'] = function(val){
	"use strict";
	//if ($(this).checked === true) {
	//console.log('found radio input with required value'); // DEBUG
	$('#form-controls').removeClass('bottom right mobile').addClass(val);
//						if (el[i].value==='mobile'){
//							$('body').addClass('no-scroll');
//						}
//						else {
//							$('body').removeClass('no-scroll');
//						}
	$(window).trigger('resize');
};

//function to update the settings record
///function updateSettings(){
//"use strict";
//console.log('updateSettings fired, with parameter settingsForm:'); //DEBUG
//
//// the intro message might also contain a setting: 'never show this message again'
//	//if(!settingsForm){
//		settingsForm = 'settings-form';
//	//}
//
//	//detect change
//	console.log('triggered by :'+$(this).attr('name')); // DEBUG
//
//	//save settings to localStorage
//	var data = form.getData(settingsForm);
//	//console.log('data scraped from '+settingsForm+': '+JSON.stringify(data)); // DEBUG
//	if (data !== null){ // CHECK IF AN EMPTY FORM REALLY RETURNS NULL!
//		var result = store.setRecord(data);
//		//console.log('result of attempt to save settings: '+result);
//		if (result !== 'success'){
//			gui.showFeedback('Error occurred when trying to save the settings.');
//		}
//	}
//	//make changes
//	updateSetting($(this));
//
/// perform action according to the (changed) settings
//function updateSetting(el){
//	"use strict";
//}


//Extend GUI
//setCustomEventHandlers is called automatically by GUI.init();
GUI.prototype.setCustomEventHandlers = function(){
	"use strict";
	var settingsForm, that = this;
	
	// survey-form controls
	$('button#save-form').button({'icons': {'primary':"ui-icon-disk"}})
		.click(function(){
			form.validateForm();
			saveForm();
		});
	$('button#reset-form').button({'icons': {'primary':"ui-icon-refresh"}})
		.click(function(){
			resetForm();
		});
	$('button#delete-form').button({'icons': {'primary':"ui-icon-trash"}, disabled:true})
		.click(function(){
			deleteForm(false);
		});

	$('#form-controls button').equalWidth();

	$(document)
		.on('click', '#records-saved li:not(.no-click)', function(event){ // future items matching selection will also get eventHandler
			event.preventDefault();
			var name = /** @type {string} */$(this).find('.name').text();
			loadForm(name);
			$(this).siblings().removeClass('ui-state-active');
			$(this).addClass('ui-state-active');
		})
		.on('mouseenter', '#records-saved li:not(.no-click)', function(){
			$(this).addClass('ui-state-hover');
			//$(this).mousedown(function(){
//				$(this).addClass('ui-state-active');
//			}).mouseup(function(){
//				$(this).removeClass('ui-state-active');
//			});
		})
		.on('mouseleave', '#records-saved li:not(.no-click)', function(){
			$(this).removeClass('ui-state-hover');
		});
	
	this.pages().get('records').find('button#records-force-upload').button({'icons': {'primary':"ui-icon-arrowthick-1-n"}})
		.click(function(){
			//gui.alert('Sorry, this button is not working yet.');
			connection.upload(true, form.getRecordName());
		})
		.hover(function(){
			$('#records-force-upload-info').show();
		}, function(){
			$('#records-force-upload-info').hide();
		});

	//export/backup locally stored data
	this.pages().get('records').find('button#records-export').button({'icons': {'primary':"ui-icon-suitcase"}})
		.click(function(){
			//false means also non-final records are exported. Add selectmenu with both options.
			//gui.alert('hey');
			exportData(false);

		})
		.hover(function(){
			$('#records-export-info').show();
		}, function(){
			$('#records-export-info').hide();
		});

	$(document).on('save delete', 'form.jr', function(e, formList){
		//console.debug('save or delete event detected with new formlist: '+formList);
		that.updateRecordList(JSON.parse(formList));
	});

	$(document).on('setsettings', function(e, settings){
		console.debug('settingschange detected, GUI will be updated with settings:');
		//console.debug(settings);
		that.setSettings(settings);
	});

	// handlers for application settings [settings page]
	this.pages().get('settings').on('change', 'input', function(){
		var name =  /** @type {string} */  $(this).attr('name');
		var value = ($(this).is(':checked')) ?  /** @type {string} */ $(this).val().toString() : '';
		console.debug('settings change by user detected');
		
		settings.set(name, value);
		//actions resulting from settings change
		//if (that.hasOwnProperty(name)){
		//	that[name](value);
		//}
//		switch(name){
//			case 'settings-auto-upload':
//				break;
//			case 'settings-button-location':
//				//var value = $(this).val();
//				//$('#form-controls').removeClass().addClass(el.val());
//				//console.log('found '+el.length+' radio elements with this name');
//				//for (var i = 0; i < el.length; i++) {
//
//			break;
//		}
	});

	$('#dialog-save').hide();

};

//update the survey forms names list
GUI.prototype.updateRecordList = function(recordList, $page) {
	"use strict";
	var name, date, clss, i, icon, $list, $li,
		finishedFormsQty = 0,
		draftFormsQty = 0;
	console.debug('updating recordlist in GUI');
	if(!$page){
		$page = this.pages().get('records');//this.$pages.find('article[id="records"]');
	}
	
	//var selectElement = pageEl.find('#forms-saved-names');
	$list = $page.find('#records-saved ol');
	
	//remove the existing option elements
	//selectElement.children().remove();
	$list.children().remove();
	//$('<option value="select form">Select Form</option>').appendTo(selectElement);
	
	// get form list object (keys + upload) ordered by time last saved
	recordList = recordList || [];//store.getFormList();
//		if (!formList){
//			_this.alert('error loading list of saved forms');
//			return;
//		}
	if (recordList.length > 0){
		for (i=0; i<recordList.length; i++){
			name = recordList[i].key;
			date = new Date(recordList[i]['lastSaved']).toDateString();
			if (recordList[i]['ready']){// === true){//} || recordList[i]['ready'] == 'true'){
				icon = 'check';
				finishedFormsQty++;
			}
			else {
				icon = 'pencil';
				draftFormsQty++;
			}
			//$('<option value="'+name+'">'+name+'</option>').addClass(clss).appendTo(selectElement);
			//$('<li><span class="ui-icon ui-icon-'+icon+'"></span><span class="name">'+name+
			//	'</span><span class="date"> ('+date+')</span></li>')
			//	.appendTo(listElement);
			$li = $('<li><span class="ui-icon ui-icon-'+icon+'"></span><span class="name">'+
				'</span><span class="date"> ('+date+')</span></li>');
			$li.find('.name').text(name); // encodes string to html
			$list.append($li);
		}
	}
	else{
		$('<li class="no-click">no locally saved records found</li>').appendTo($list);
	}
// *	OLD*	else if (result.field(2) == 2) {
// *	OLD*		color = 'gray';
	// update status counters
	//pageEl.find('#forms-saved-qty').text(recordList.length);
	$page.find('#records-draft-qty').text(draftFormsQty);
	$page.find('#records-final-qty').text(finishedFormsQty);
};

GUI.prototype.saveConfirm = function(){
	"use strict";
	var $saveConfirm = $('#dialog-save');
	this.confirm(
		{
			dialog: 'save',
			msg:'',
			heading:'Record Details'
		},
		{
			posButton: 'Ok',
			negButton: 'Cancel',
			posAction: function(){
				console.debug('value of final in confirm dialog: '+Boolean($saveConfirm.find('[name="record-final"]:checked').val()));
				//console.debug($saveConfirm.find('[name="record-final"]'));
				return saveForm(
					$saveConfirm.find('[name="record-name"]').val(),
					Boolean($saveConfirm.find('[name="record-final"]:checked').val())
					//$saveConfirm.find('[name="record-final"]:checked').val()
				);
			},
			negAction: function(){
				return false;
			},
			beforeAction: function(){
				if (!form.isValid()){
					console.log('form invalid');
					$saveConfirm.find('[name="record-final"]').attr('disabled', 'disabled');
				}
				else{
					console.log('form valid');
					$saveConfirm.find('[name="record-final"]').removeAttr('disabled');
				}
			}
		}
	);
};
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








