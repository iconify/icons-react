import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6kie6zvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6kie6zvd"/>`,
		"fallback": "fa-solid:window-maximize",
	});
}

export default Component;
