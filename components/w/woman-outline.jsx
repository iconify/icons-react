import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy3q97bje.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy3q97bje"/>`,
		"fallback": "ant-design:woman-outline",
	});
}

export default Component;
