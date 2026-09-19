import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd446ibrz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd446ibrz"/>`,
		"fallback": "dinkie-icons:zoom-out-small-filled",
	});
}

export default Component;
