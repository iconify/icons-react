import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0cbf1blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0cbf1blk"/>`,
		"fallback": "thesvg:yoast",
	});
}

export default Component;
