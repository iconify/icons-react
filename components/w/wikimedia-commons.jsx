import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww-hxrbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww-hxrbfk"/>`,
		"fallback": "thesvg-color:wikimedia-commons",
	});
}

export default Component;
