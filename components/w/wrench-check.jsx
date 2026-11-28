import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq59lj-wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq59lj-wv"/>`,
		"fallback": "noviair:wrench-check",
	});
}

export default Component;
