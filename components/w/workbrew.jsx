import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8ziwgk5l.css';
import '../../css/e/er7ag9bvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8ziwgk5l"/><path class="er7ag9bvb"/>`,
		"fallback": "selfhst:workbrew",
	});
}

export default Component;
