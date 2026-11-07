import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmr5y1isy.css';
import '../../css/i/i_u1m3bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fmr5y1isy"/><path class="i_u1m3bih"/>`,
		"fallback": "solar:wireless-charge-bold",
	});
}

export default Component;
