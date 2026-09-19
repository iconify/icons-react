import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdus9ldpu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdus9ldpu"/>`,
		"fallback": "fa7-brands:wordpress-simple",
	});
}

export default Component;
