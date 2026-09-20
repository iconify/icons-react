import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuycb9bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuycb9bvx"/>`,
		"fallback": "tabler:wifi-2",
	});
}

export default Component;
