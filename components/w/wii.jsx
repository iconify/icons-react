import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guba09b7j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guba09b7j"/>`,
		"fallback": "cib:wii",
	});
}

export default Component;
