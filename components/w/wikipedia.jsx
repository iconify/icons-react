import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngr-7c-ny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngr-7c-ny"/>`,
		"fallback": "cib:wikipedia",
	});
}

export default Component;
