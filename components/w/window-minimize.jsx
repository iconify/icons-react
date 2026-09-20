import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eemv9t5oh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eemv9t5oh"/>`,
		"fallback": "la:window-minimize",
	});
}

export default Component;
