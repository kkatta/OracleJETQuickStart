/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojdnd","ojs/ojlistview"],function(a,g){a.eb=function(a){this.Ea=a};o_("ListViewDndContext",a.eb,a);a.b.sa(a.eb,a.b,"oj.ListViewDndContext");a.eb.wka=67;a.eb.rP=86;a.eb.tP=88;a.eb.prototype.cT=function(a){var c=this.Ea.ee("dnd");return null!=c&&c[a]?c[a].items:null};a.eb.prototype.iJ=function(){return this.cT("drag")};a.eb.prototype.dT=function(){return this.cT("drop")};a.eb.prototype.Eq=function(){return"enabled"==this.cT("reorder")};a.eb.prototype.Ig=function(a){return this.Ea.Im(a)};
a.eb.prototype.DT=function(){var a,c,d,e;a=[];if(this.Ea.Ac())for(c=this.Ea.ee("selection"),d=0;d<c.length;d++)e=this.Ea.Ue(c[d]),null==e||this.Ea.Dk(g(e))||a.push(e);else e=this.QS(),null!=e&&a.push(e);null!=this.Sw&&0<this.Sw.length&&-1==a.indexOf(this.Sw.get(0))&&a.push(this.Sw.get(0));return a};a.eb.prototype.QS=function(){return null==this.Ea.N?null:this.Ea.N.elem[0]};a.eb.prototype.Pw=function(a){var c;g(a).hasClass(this.Ea.fj())||(a=a.firstElementChild);a=g(a).find(".oj-listview-drag-handle");
null!=a&&0<a.length&&(c=a.attr("aria-labelledby"),null==c?a.attr("aria-labelledby",this.Ea.lv("instr")):a.attr("aria-labelledby",c+" "+this.Ea.lv("instr")),this.Ea.Yl()&&a.attr("draggable","true"))};a.eb.prototype.Cca=function(a){var c,d;if(null!=this.iJ()||this.Eq()){if(a.hasClass("oj-listview-drag-handle"))c=g(a);else{a=this.Ig(a);if(null!=a){d=a.find(".oj-listview-drag-handle");if(null!=d&&0<d.length)return;a.addClass("oj-draggable")}d=this.QS();null!=d&&(null!=a&&0==a.find(".oj-listview-drag-handle").length&&
a[0]==d?c=a:g(d).removeClass("oj-draggable"))}null!=c&&c.attr("draggable",!0)}};a.eb.prototype.Zda=function(a){if(null!=this.iJ()||this.Eq())a=a.hasClass("oj-listview-drag-handle")?g(a):this.Ig(a),null!=a&&a.removeAttr("draggable")};a.eb.prototype.rn=function(b,c,d,e){var f;if(b="drag"===b?this.iJ():this.dT())if((c=b[c])&&"function"==typeof c)try{d.dataTransfer=d.originalEvent.dataTransfer,f=c(d,e)}catch(g){a.t.error("Error: "+g)}else return-1;return f};a.eb.prototype.ZCa=function(a,c,d){var e,f=
[],g;for(e=0;e<d.length;e++)(g=this.Ea.q7(d[e]))&&(g.innerHTML&&g.tagName&&"LI"==g.tagName?f.push(g.innerHTML):f.push(g));return 0<f.length?(this.YCa(a.originalEvent,c,f),this.$Ca(a.originalEvent,d),{items:f}):null};a.eb.prototype.YCa=function(a,c,d){var e;a=a.dataTransfer;d=JSON.stringify(d);if("string"==typeof c)a.setData(c,d);else if(c)for(e=0;e<c.length;e++)a.setData(c[e],d);a.setData("text/ojlistview-dragsource-id",this.Ea.element.get(0).id)};a.eb.prototype.$Ca=function(a,c){var d,e,f=Number.MAX_VALUE,
h,k,l,m=0,r=0;d=a.target;if(1<c.length){d=g(document.createElement("ul"));d.get(0).className=this.Ea.element.get(0).className;d.addClass("oj-listview-drag-image").css({width:this.Ea.element.css("width"),height:this.Ea.element.css("height")});for(e=0;e<c.length;e++)f=Math.min(f,c[e].offsetTop);for(e=0;e<c.length;e++)h=c[e].offsetTop-f,k=c[e].offsetWidth,l=g(c[e].cloneNode(!0)),l.removeClass("oj-selected oj-focus oj-hover").css({position:"absolute",top:h,width:k}),d.append(l)}else g(d).hasClass("oj-listview-drag-handle")&&
(m=Math.max(0,d.offsetLeft-c[0].offsetLeft)+d.offsetWidth/2,r=d.offsetTop+d.offsetHeight/2),l=g(c[0].cloneNode(!0)),l.removeClass("oj-selected oj-focus oj-hover").addClass("oj-drag"),d=g(document.createElement("ul")),d.get(0).className=this.Ea.element.get(0).className,d.addClass("oj-listview-drag-image").css({width:this.Ea.element.css("width"),height:2*c[0].offsetHeight}).append(l);g("body").append(d);this.pN=d;a.dataTransfer.setDragImage(d.get(0),m,r)};a.eb.prototype.dU=function(a){var c,d,e;c=this.iJ();
if(null!=c||this.Eq())if(d=null!=c?c.dataTypes:"text/ojlistview-items-data",g(a.target).hasClass("oj-listview-drag-handle")?(e=[],e.push(this.Ig(a.target)[0])):e=this.DT(),0<e.length){if(null==c&&1<e.length)return!1;this.rr=e;this.lN=g(e[0]);if(c=this.ZCa(a,d,e)){if(a=this.rn("drag","dragStart",a,c),-1!==a)return a}else return!1}};a.eb.prototype.ewa=function(a){return this.rn("drag","drag",a)};a.eb.prototype.BI=function(){null!=this.pN&&(this.pN.remove(),this.pN=null)};a.eb.prototype.$T=function(a){var c;
if(null!=this.lN&&null!=this.rr)for(this.lN.find(".oj-listview-drag-handle").removeAttr("draggable"),this.lN.removeClass("oj-drag oj-draggable").removeAttr("draggable"),c=0;c<this.rr.length;c++)g(this.rr[c]).css("display","block");this.wC();this.BI();this.rn("drag","dragEnd",a);this.lN=this.pN=null};a.eb.prototype.lV=function(a){var c,d;c=this.dT();if(this.Eq()&&null==c)return!0;if(c&&c.dataTypes)for(c=c.dataTypes,c="string"==typeof c?[c]:c,a=a.originalEvent.dataTransfer.types,d=0;d<a.length;d++)if(0<=
c.indexOf(a[d]))return!0;return!1};a.eb.prototype.sn=function(a,c,d){a=this.rn("drop",a,c,d);(void 0===a||-1===a)&&this.lV(c)&&c.preventDefault();return a};a.eb.prototype.t5=function(a){var c;null==this.lj&&(c=g(a.get(0).cloneNode(!1)),c.addClass("oj-drop").removeClass("oj-drag oj-draggable oj-hover oj-focus oj-selected").css({display:"block",height:a.outerHeight()}),this.lj=c);return this.lj};a.eb.prototype.S4=function(){null!=this.zi&&-1===this.HA&&this.zi.children("."+this.Ea.og()).removeClass("oj-drop")};
a.eb.prototype.R4=function(){null!=this.zi&&this.zi.hasClass("oj-listview-no-data-message")&&(this.zi.removeClass("oj-drop"),this.zi.get(0).textContent=this.Ea.w7())};a.eb.prototype.wC=function(){null!=this.lj&&(this.lj.css("height","0"),this.lj.remove(),this.lj=null);this.R4();this.S4()};a.eb.prototype.aU=function(a){var c;c=this.Ig(a.target);a=this.sn("dragEnter",a,{item:c.get(0)});if(-1!=a)return a};a.eb.prototype.nW=function(a){null!=this.zi&&this.zi.removeClass("oj-valid-drop oj-invalid-drop");
this.zi=a;this.zi.addClass("oj-valid-drop")};a.eb.prototype.vca=function(a,c){var d;d=a.attr("aria-label");null==d&&(d=a.text());d=this.Ea.Y.F("accessibleReorder"+c.charAt(0).toUpperCase()+c.substr(1)+"Item",{item:d});this.Ea.Rg(d)};a.eb.prototype.jpa=function(){null==this.Wha&&this.Ea.Yl()&&(this.Ea.element.find("ul."+this.Ea.wi()).each(function(){g(this).attr("oldMaxHeight",g(this).css("maxHeight").toString());g(this).css("maxHeight",1E4)}),this.Wha="adjusted")};a.eb.prototype.eca=function(){this.Ea.Yl()&&
this.Ea.element.find("ul."+this.Ea.wi()).each(function(){g(this).css("maxHeight",parseInt(g(this).attr("oldMaxHeight"),10));g(this).removeAttr("oldMaxHeight")});this.Wha=null};a.eb.prototype.cU=function(a){var c,d,e,f;if(null!=this.dT()||this.Eq()){this.jpa();if(null!=this.rr&&"none"!=g(this.rr[0]).css("display")){c=g(this.rr[0]);d=this.t5(c);for(a=0;a<this.rr.length;a++)g(this.rr[a]).css("display","none");d.insertBefore(c);this.HA=d.index()}else c=this.Ig(a.target),null!=c&&0<c.length?(e=this.sn("dragOver",
a,{item:c.get(0)}),-1===e&&this.Eq()||!1===e||a.isDefaultPrevented()?(c.hasClass(this.Ea.fj())?(this.S4(),c.hasClass("oj-drop")||(d=this.t5(c),f=c.index(),null==this.HA||this.HA<f?(d.insertAfter(c),this.GA="after"):(d.insertBefore(c),this.GA="before"),this.vca(c,this.GA),this.nW(c),this.HA=d.index())):(this.wC(),c.children("."+this.Ea.og()).addClass("oj-drop"),this.nW(c),this.HA=-1,this.GA="inside",this.vca(c,this.GA)),a.preventDefault()):g(a.target).hasClass(this.Ea.wi())||(c.addClass("oj-invalid-drop"),
this.wC())):(c=this.Ea.element.children(".oj-listview-no-data-message"),null!=c&&0<c.length&&(c.addClass("oj-drop"),c.get(0).textContent="",this.nW(c),a.preventDefault()));return e}};a.eb.prototype.jK=function(a,c){var d,e;d=c.getBoundingClientRect();e=a.originalEvent;return e.clientX>=d.left&&e.clientX<d.right&&e.clientY>=d.top&&e.clientY<d.bottom};a.eb.prototype.bU=function(a){var c,d;if(null!=this.zi&&(c=this.Ig(a.target),null!=c&&0<c.length?(c.removeClass("oj-valid-drop oj-invalid-drop"),d=this.sn("dragLeave",
a,{item:c.get(0)}),this.jK(a,a.currentTarget)||(this.wC(),this.eca())):this.jK(a,a.currentTarget)||this.R4(),-1!=d))return d};a.eb.prototype.eU=function(a){var c,d;if(null!=this.zi&&(c=a.originalEvent.dataTransfer.getData("text/ojlistview-dragsource-id"),d=this.zi.hasClass("oj-listview-no-data-message")?{}:{item:this.zi.get(0),position:this.GA},this.Eq()&&c===this.Ea.element.get(0).id?d.reorder=!0:d.reorder=!1,c=this.sn("drop",a,d),d.reorder&&(d.items=this.rr,d.reference=d.item,this.Ea.Ek("reorder",
a,d),a.preventDefault()),null!=this.zi&&this.zi.removeClass("oj-valid-drop"),this.wC(),this.eca(),this.BI(),this.zi=null,this.HA=-1,this.GA=null,-1!==c))return c};a.eb.prototype.rFa=function(a){var c=this,d,e;this.Eq()&&(void 0==a&&(a=this.Ea.ee("contextMenu")),null!=a&&(null==this.sm&&(this.sm=[]),a=g(a),d=a.find("[data-oj-command]"),e=[],d.each(function(){var a,b;0===g(this).children("a").length?0==g(this).attr("data-oj-command").indexOf("oj-listview-")&&(a=g(this).attr("data-oj-command").substring(12),
b=c.Lj(a),b.get(0).className=g(this).get(0).className,g(this).replaceWith(b)):(a=g(this).attr("data-oj-command"),"pasteBefore"==a?a="paste-before":"pasteAfter"==a&&(a="paste-after"));null!=a&&e.push(a)}),this.sm=e,0<e.length&&(a.data("oj-ojMenu")&&a.ojMenu("refresh"),a.on("ojbeforeopen",this.Wva.bind(this)),a.on("ojselect",this.Tk.bind(this)))))};a.eb.prototype.Lj=function(a){return"paste-before"===a?this.ag("pasteBefore"):"paste-after"===a?this.ag("pasteAfter"):this.ag(a)};a.eb.prototype.ag=function(a){var c=
g("\x3cli\x3e\x3c/li\x3e");c.attr("data-oj-command",a);c.append(this.qC(a));return c};a.eb.prototype.qC=function(a){a="label"+a.charAt(0).toUpperCase()+a.slice(1);return g('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.Ea.Y.F(a))};a.eb.prototype.pD=function(a){var c;null!=this.Mn&&g(this.Mn).removeClass("oj-listview-cut");c=this.DT();g(c).addClass("oj-listview-cut");this.Mn=c;this.Ea.Ek("cut",a,{items:c})};a.eb.prototype.Y8=function(a){var c;null!=this.Mn&&g(this.Mn).removeClass("oj-listview-cut");
this.Mn=c=this.DT();this.Ea.Ek("copy",a,{items:c})};a.eb.prototype.rD=function(a,c,d){this.Ea.Ek("paste",a,{item:c.get(0)});g(this.Mn).removeClass("oj-listview-cut");this.Ea.Ek("reorder",a,{items:this.Mn,position:d,reference:c.get(0)});this.Mn=null};a.eb.prototype.Tk=function(a,c){if(null!=this.Sw)switch(c.item.attr("data-oj-command")){case "cut":this.pD(a);break;case "copy":this.Y8(a);break;case "paste":var d=!0;case "pasteBefore":var e=!0;case "pasteAfter":var f="after";d?f="inside":e&&(f="before");
this.rD(a,this.Sw,f);this.Sw=null}};a.eb.prototype.jC=function(a,c){null!=this.sm&&("paste-before"==c?c="pasteBefore":"paste-after"==c&&(c="pasteAfter"),a.find("[data-oj-command\x3d'"+c+"']").removeClass("oj-disabled"))};a.eb.prototype.Wva=function(a,c){var d,e;d=g(a.target);d.find("[data-oj-command]").addClass("oj-disabled");e=c.openOptions.launcher;null==e||null==this.sm||0==this.sm.length?d.ojMenu("refresh"):(e.children().first().hasClass(this.Ea.og())?null!=this.Mn&&this.jC(d,"paste"):(this.jC(d,
"cut"),this.jC(d,"copy"),null!=this.Mn&&(this.jC(d,"paste-before"),this.jC(d,"paste-after"))),d.ojMenu("refresh"),this.Sw=e)};a.eb.prototype.JG=function(b){var c,d;if(!this.Eq()||null==this.sm||0==this.sm.length)return!1;if(b.ctrlKey||b.metaKey){c=b.keyCode;if(c===a.eb.tP&&-1<this.sm.indexOf("cut"))return this.pD(b),!0;if(c===a.eb.wka&&-1<this.sm.indexOf("copy"))return this.Y8(b),!0;if(c===a.eb.rP&&null!=this.Mn&&(c=g(this.QS()),c.children().first().hasClass(this.Ea.og())?-1<this.sm.indexOf("paste")&&
(d="inside"):-1<this.sm.indexOf("paste-before")?d="before":-1<this.sm.indexOf("paste-after")&&(d="after"),null!=d))return this.rD(b,c,d),!0}return!1}});