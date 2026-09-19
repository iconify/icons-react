import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w38-p04fw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w38-p04fw"/>`,
		"fallback": "cib:zillow",
	});
}

export default Component;
