import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o14i3uhye.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o14i3uhye"/>`,
		"fallback": "maki:windmill-11",
	});
}

export default Component;
