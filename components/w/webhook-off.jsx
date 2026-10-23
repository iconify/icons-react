import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se0258yit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se0258yit"/>`,
		"fallback": "vadivam:webhook-off",
	});
}

export default Component;
