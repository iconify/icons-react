import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlk5ymyap.css';
import '../../css/i/i27tkhlqe.css';
import '../../css/x/xv2f7s87m.css';
import '../../css/p/pt3dsebxs.css';
import '../../css/h/h2tk_q-sp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGfhzyl6Pf" viewBox="0 0 342 234"><path class="vlk5ymyap"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"/></path><path class="i27tkhlqe"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"/></path></symbol></defs><use width="342" height="234" href="#SVGfhzyl6Pf" transform="translate(85 139)"/><path opacity="0" class="xv2f7s87m"><animateTransform id="SVGaFcq1cAE" additive="sum" attributeName="transform" begin=".5s; x1.end+1.33s" dur="1.67s" type="translate" values="-30 0; 30 0"/><animate attributeName="opacity" begin=".5s; x1.end+1.33s" dur="1.67s" keyTimes="0; .2; .8; 1" values="0; 1; 1; 0"/></path><path opacity="0" class="pt3dsebxs"><animateTransform id="SVGVKQpleiB" additive="sum" attributeName="transform" begin="1s; x2.end+1.33s" dur="1.67s" type="translate" values="-30 0; 30 0"/><animate attributeName="opacity" begin="1s; x2.end+1.33s" dur="1.67s" keyTimes="0; .2; .8; 1" values="0; 1; 1; 0"/></path><path opacity="0" class="h2tk_q-sp"><animateTransform id="SVGHjj92cbM" additive="sum" attributeName="transform" begin="0s; x3.end+1.33s" dur="1.67s" type="translate" values="-30 0; 30 0"/><animate attributeName="opacity" begin="0s; x3.end+1.33s" dur="1.67s" keyTimes="0; .2; .8; 1" values="0; 1; 1; 0"/></path>`,
		"fallback": "meteocons:wind-snow",
	});
}

export default Component;
