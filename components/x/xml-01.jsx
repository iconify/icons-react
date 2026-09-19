import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-41i3s2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-41i3s2l"/>`,
		"fallback": "hugeicons:xml-01",
	});
}

export default Component;
