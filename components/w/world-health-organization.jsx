import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3kd-rbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3kd-rbzt"/>`,
		"fallback": "thesvg-color:world-health-organization",
	});
}

export default Component;
