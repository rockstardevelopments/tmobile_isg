/* $Id: setsifr.js,v 1.4 2006/06/02 12:34:09 nlastukh Exp $ */
function setSIFR() {
	if(typeof sIFR == "function"){
	//if(sIFR != null && sIFR.replaceElement != null){
		//For Headlines
		sIFR.replaceElement(named({nWidth:50,nHeight:40, sSelector:"h1.title", sFlashSrc:"../common/js/ta.swf", sColor:"#e20074", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sEmColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));
		sIFR.replaceElement(named({sSelector:"h2.sub-title-msg", sFlashSrc:"../common/js/ta.swf", sColor:"#666666", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sEmColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));
		sIFR.replaceElement(named({sSelector:"h2.sub-title", sFlashSrc:"../common/js/ta.swf", sColor:"#e20074", sLinkColor:"#666666", sHoverColor:"#e20074", sBgColor:"#ffffff", sEmColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent"}));
		
		
		//For Special Panels
			sIFR.replaceElement(named({ sSelector:".panel .panel-special .content h3.text-right", sFlashSrc:"../common/js/ta.swf", sColor:"#e20074", sBgColor:"#ffffff", sEmColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent", sFlashVars:("textalign=right&offsetTop=-3")}));
		sIFR.replaceElement(named({ sSelector:".panel .panel-special .content h3.title", sFlashSrc:"../common/js/ta.swf", sColor:"#e20074", sBgColor:"#ffffff", sEmColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent", sFlashVars:("offsetTop=-3")}));
		//For All Panels
		sIFR.replaceElement(named({ sSelector:".panel .content h3.text-right", sFlashSrc:"../common/js/ta.swf", sColor:"#e20074", sEmColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent", sFlashVars:("textalign=right&offsetTop=-3")}));		
		sIFR.replaceElement(named({ sSelector:".panel .content h3.title", sFlashSrc:"../common/js/ta.swf", sColor:"#e20074", sEmColor:"#333333", nPaddingTop:0, nPaddingRight:0, nPaddingBottom:0, nPaddingLeft:0, sWmode:"transparent", sFlashVars:("offsetTop=-3")}));
		
	};
}
//}
setSIFR();