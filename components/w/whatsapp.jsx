import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/afg0dbz3p.css';
import '../../css/s/sqwii0gwa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="afg0dbz3p"/><path class="sqwii0gwa"/></g>`,
		"fallback": "streamline:whatsapp",
	});
}

export default Component;
