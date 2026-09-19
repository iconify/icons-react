import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpmh16bpp.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpmh16bpp"/>`,
		"fallback": "zmdi:wikipedia",
	});
}

export default Component;
