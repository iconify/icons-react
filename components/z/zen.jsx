import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4f_v4gza.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4f_v4gza"/>`,
		"fallback": "cryptocurrency:zen",
	});
}

export default Component;
