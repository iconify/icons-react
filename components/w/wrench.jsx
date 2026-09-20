import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfu6s6g3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfu6s6g3v"/>`,
		"fallback": "zondicons:wrench",
	});
}

export default Component;
