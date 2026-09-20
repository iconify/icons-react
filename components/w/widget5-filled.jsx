import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn2zd0bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn2zd0bek"/>`,
		"fallback": "reicon:widget5-filled",
	});
}

export default Component;
