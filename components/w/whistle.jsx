import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkqd7tbug.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkqd7tbug"/>`,
		"fallback": "picon:whistle",
	});
}

export default Component;
