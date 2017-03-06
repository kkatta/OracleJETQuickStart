/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(a,g){a.Pa("oj._ojRadioCheckbox",g.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{disabled:null,checked:null,type:null},label:function(){void 0===this.nc&&(this.nc=this.pT());return this.nc},refresh:function(){this._super();this.ab()},refreshDisabled:function(){this.aW()},setSelectedClass:function(a){this.element.toggleClass("oj-selected",a);this.nc.toggleClass("oj-selected",a);this.Fi&&
this.Fi.toggleClass("oj-selected",a)},widget:function(){return this.dka},Yf:function(a,c){var d;this._super(a,c);"checked"in c||(this.WY=!0,d=!!this.element.prop("checked"),this.option("checked",d,{_context:{nb:!0}}));if("boolean"!==typeof this.options.checked)throw Error("checked option must be a boolean");"disabled"in c||(d=!!this.element.prop("disabled"),this.option("disabled",d,{_context:{nb:!0}}));if("boolean"!==typeof this.options.disabled)throw Error("disabled option must be a boolean");"type"in
c||this.option("type",this.element.prop("type"),{_context:{nb:!0}})},_ComponentCreate:function(){this._super();var a=this.options.type;"checkbox"==a?(this.dka=this.element.addClass("oj-checkbox oj-component"),this.nc=this.pT(),this.nc.addClass("oj-checkbox-label")):"radio"==a&&(this.dka=this.element.addClass("oj-radio oj-component"),this.nc=this.pT(),this.nc.addClass("oj-radio-label"));this.Fi=this.Uta();this._focusable(this.element);this.Fi&&(this.We({element:this.Fi}),this.Gk({element:this.Fi}),
this._focusable({element:this.Fi,applyHighlight:!0}));this.We({element:this.nc});this.Gk({element:this.nc});g.each(this.nc,function(){g(this.childNodes).wrapAll("\x3cspan class\x3d'oj-radiocheckbox-label-text'\x3e\x3c/span\x3e");var a=document.createElement("span");a.setAttribute("class","oj-radiocheckbox-icon");this.appendChild(a)});this.ab()},XB:function(a){this.wE=a.attr("class")},hy:function(){this.wE?this.element.attr("class",this.wE):this.element.removeAttr("class")},ab:function(){this.aW();
this.WY||this.xE(this.options.checked);this.options.checked&&this.setSelectedClass(this.options.checked)},xE:function(a){this.element.prop("checked",!!a)},aW:function(){this.Zf()?(this.element.prop("disabled",!0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"),this.nc.removeClass("oj-enabled").addClass("oj-disabled"),this.Fi&&this.Fi.removeClass("oj-enabled").addClass("oj-disabled")):(this.element.prop("disabled",!1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"),
this.nc.addClass("oj-enabled").removeClass("oj-disabled"),this.Fi&&this.Fi.addClass("oj-enabled").removeClass("oj-disabled"))},_setOption:function(a,c){this._superApply(arguments);"disabled"===a&&(c=!!c,this.aW(c));"checked"===a&&(this.xE(c),this.setSelectedClass(c))},pT:function(){var b=this.element.closest("label"),c="label[for\x3d'"+this.element.prop("id")+"']",d=g(c),b=b.add(d);0===d.length&&(c=this.element.siblings(c),b.add(c));0===b.length&&a.t.warn("Could not find a label associated to the input element.");
return b},Uta:function(){var b;if(this.nc&&(b=this.nc.parent())&&(b.hasClass("oj-choice-row")||b.hasClass("oj-choice-row-inline")))return b;a.t.warn("The radioset/checkboxset's input and label dom should be wrapped in a dom node with class 'oj-choice-row' or 'oj-choice-row-inline'");return null},getNodeBySubId:function(a){var c=this._super(a);c||(a=a.subId,"oj-radiocheckbox-input"===a&&(c=this.element[0]),"oj-radiocheckbox-label"===a&&(c=this.label()[0]));return c||null},_destroy:function(){var a=
this._super();this.Fi&&(this.pQ(this.Fi),this.oQ(this.Fi));this.pQ(this.nc);this.oQ(this.nc);var c=this.options.type;"checkbox"==c?this.nc.removeClass("oj-enabled oj-disabled oj-selected oj-checkbox-label"):"radio"==c&&this.nc.removeClass("oj-enabled oj-disabled oj-selected oj-radio-label");this.Fi&&this.Fi.removeClass("oj-enabled oj-disabled oj-selected");g.each(this.nc,function(){this.removeChild(this.getElementsByClassName("oj-radiocheckbox-icon")[0]);var a=this.getElementsByClassName("oj-radiocheckbox-label-text");
void 0!==a&&g(a[0].childNodes[0]).unwrap()});return a}})});