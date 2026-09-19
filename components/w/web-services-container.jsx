import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsrzeq-ig.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsrzeq-ig"/><path class="tz_5mvbtv"/>`,
		"fallback": "carbon:web-services-container",
	});
}

export default Component;
