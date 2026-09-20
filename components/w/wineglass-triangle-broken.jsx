import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1iss4-fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1iss4-fm"/>`,
		"fallback": "solar:wineglass-triangle-broken",
	});
}

export default Component;
