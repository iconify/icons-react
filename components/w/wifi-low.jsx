import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue6qx8t1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue6qx8t1k"/>`,
		"fallback": "vadivam:wifi-low",
	});
}

export default Component;
