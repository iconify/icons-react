import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_fpg3b5s.css';
import '../../css/w/wm45_4p5c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_fpg3b5s"/><path clip-rule="evenodd" class="wm45_4p5c"/>`,
		"fallback": "qlementine-icons:zoom-in-16",
	});
}

export default Component;
