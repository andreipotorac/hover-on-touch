function HoverOnTouch(){this.init()}function resetGif(t){var e=t,s=e.src;e.src="#",e.src=s}function restartImagesIfGif(t){for(var e=t.length-1;e>=0;e--){var s=t[e].src.split(".").pop();"gif"===s&&resetGif(t[e])}}function hasClass(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}function unhideAll(){for(var t=0;t<all_objects.length;++t)for(var e=all_objects[t],s=0;s<e.childNodes.length;s++)hasClass(e.childNodes[s],"cover")===!0&&(e.childNodes[s].style.visibility="visible")}function findElementByClass(t,e){for(var s=0;s<t.childNodes.length;s++)if(hasClass(t.childNodes[s],e)===!0){alert(t.childNodes[s].className);break}}HoverOnTouch.prototype.init=function(){var t=document.getElementsByClassName("testObject")},window.oncontextmenu=function(t){return t.preventDefault(),t.stopPropagation(),!1};var getClosest=function(t,e){for(var s=e.charAt(0);t&&t!==document;t=t.parentNode){if("."===s&&t.classList.contains(e.substr(1)))return t;if("#"===s&&t.id===e.substr(1))return t;if("["===s&&t.hasAttribute(e.substr(1,e.length-2)))return t;if(t.tagName.toLowerCase()===e)return t}return!1};