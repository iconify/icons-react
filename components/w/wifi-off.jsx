import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqj9z9wrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqj9z9wrk"/>`,
		"fallback": "noviair:wifi-off",
	});
}

export default Component;
