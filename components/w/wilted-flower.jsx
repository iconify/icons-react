import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htej5lsdf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htej5lsdf"/>`,
		"fallback": "dinkie-icons:wilted-flower",
	});
}

export default Component;
