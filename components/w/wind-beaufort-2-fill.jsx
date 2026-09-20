import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te7zi9bkg.css';
import '../../css/a/a4l89jl3b.css';
import '../../css/x/x5epiqw7g.css';
import '../../css/n/nsk5251jp.css';
import '../../css/i/ihec48y4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGj6U3ceGK" x1="138.5" x2="224.2" y1="5.1" y2="153.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="te7zi9bkg"/><stop offset=".5" class="te7zi9bkg"/><stop offset="1" class="a4l89jl3b"/></linearGradient><linearGradient id="SVGeAVxmbDm" x1="77.7" x2="169" y1="96.2" y2="254.4" href="#SVGj6U3ceGK"/><symbol id="SVGX0uLRdYl" viewBox="0 0 348 240"><path stroke="url(#SVGj6U3ceGK)" class="x5epiqw7g"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1776"/></path><path stroke="url(#SVGeAVxmbDm)" class="nsk5251jp"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 660"/></path></symbol></defs><use width="348" height="240" href="#SVGX0uLRdYl" transform="translate(82 136)"/><path class="ihec48y4v"/>`,
		"fallback": "meteocons:wind-beaufort-2-fill",
	});
}

export default Component;
