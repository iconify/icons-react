import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlk5ymyap.css';
import '../../css/i/i27tkhlqe.css';
import '../../css/a/aaw-b7bkq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGDZwFFdWn" viewBox="0 0 342 234"><path class="vlk5ymyap"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 4736"/></path><path class="i27tkhlqe"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2860"/></path></symbol></defs><use width="342" height="234" href="#SVGDZwFFdWn" transform="translate(85 139)"/><path class="aaw-b7bkq"/>`,
		"fallback": "meteocons:wind-beaufort-12",
	});
}

export default Component;
