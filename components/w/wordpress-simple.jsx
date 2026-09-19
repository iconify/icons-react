import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x69ryo0tm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x69ryo0tm"/>`,
		"fallback": "fa6-brands:wordpress-simple",
	});
}

export default Component;
