require=function r(e,o,n){function s(i,c){if(!o[i]){if(!e[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(t)return t(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(r){var o=e[i][1][r];return s(o?o:r)},l,l.exports,r,e,o,n)}return o[i].exports}for(var t="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({SliderManage:[function(r,e,o){"use strict";cc._RFpush(e,"9f55b26Qn5OLqDJ7rtTOFOs","SliderManage");cc.Enum({Left:0,Right:1});cc.Class({"extends":cc.Component,properties:{background:cc.ProgressBar,slider:cc.Slider,handle:cc.Node,audioSource:{type:cc.AudioSource,"default":null}},onLoad:function(){this.slider.progress=.5,this.setProgress(this.slider.progress),this.handle.on(cc.Node.EventType.MOUSE_ENTER,this.onHandleCallback,this)},onCallbackEvent:function(r){this.setProgress(r.progress)},onHandleCallback:function(){var r=1*Math.random();cc.log("DirectionEnum - random",r),this.slider.progress=r,this.setProgress(this.slider.progress)},setProgress:function(r){this.background.progress=r,this.audioSource.volume=r}}),cc._RFpop()},{}]},{},["SliderManage"]);