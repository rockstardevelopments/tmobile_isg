function changeFontSize(to) {
	
	r = document.getElementsByTagName('body'); 
	r[0].style.fontSize=to+'%';

}


var pic = false;

function getHeads() {
	if(!pic) {
		var heads = document.getElementsByTagName('h1');
		for(var i=0; i < heads.length; i++) {
			heads[i].className += ' txt'
		}
	}
}

startList = function() {
		
		sizeSwitcher = document.getElementById("fontSize");
		sizeSwitcher.style.display='block';
/*		logoImage = document.getElementById('logoImage');
		logoImage.attachEvent("onload", alert('ss'));*/
		getHeads();

	if (document.all&&document.getElementById) {
		/* show js controls to enlarge font size*/


		/* end of font size changing*/

		navRoot = document.getElementById("top");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}
if (window.attachEvent) {window.attachEvent("onload", startList);}
if (window.addEventListener) window.addEventListener('load', startList, false);