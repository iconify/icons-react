import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkfru2t8u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkfru2t8u"/>`,
		"fallback": "garden:wrench-stroke-20",
	});
}

export default Component;
