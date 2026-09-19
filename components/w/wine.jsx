import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybcv3hbjh.css';

const viewBox = {"width":1024,"height":2016};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybcv3hbjh"/>`,
		"fallback": "vs:wine",
	});
}

export default Component;
