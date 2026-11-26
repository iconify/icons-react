import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/umg9mabsh.css';
import '../../css/l/leaprwbco.css';
import '../../css/w/w9smw2han.css';
import '../../css/y/y2-_ndbtp.css';
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
		"content": `<defs><radialGradient id="SVGNi6PQHDL" cx="77.6" cy="100" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="umg9mabsh"/><stop offset="1" class="umg9mabsh"/></radialGradient></defs><path class="leaprwbco"/><path fill="url(#SVGNi6PQHDL)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="w9smw2han"/><path class="y2-_ndbtp"/><path class="nk138_b6c"/><path class="yuwyb1bhw"/>`,
		"fallback": "xero-emoji:white-circle",
	});
}

export default Component;
