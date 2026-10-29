import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qru5rt3-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qru5rt3-t"/>`,
		"fallback": "withicons:x-circle-solid",
	});
}

export default Component;
