import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvc_x47if.css';
import '../../css/n/nrpon72cn.css';
import '../../css/l/leaprwbco.css';
import '../../css/w/w9smw2han.css';
import '../../css/n/n9w0kac5y.css';
import '../../css/n/nk138_b6c.css';
import '../../css/y/yuwyb1bhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGKl1oEcyU" cx="77.6" cy="100" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="vvc_x47if"/><stop offset=".85" class="nrpon72cn"/><stop offset="1" class="nrpon72cn"/></radialGradient></defs><path class="leaprwbco"/><path fill="url(#SVGKl1oEcyU)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="w9smw2han"/><path class="n9w0kac5y"/><path class="nk138_b6c"/><path class="yuwyb1bhw"/>`,
		"fallback": "xero-emoji:yellow-circle",
	});
}

export default Component;
