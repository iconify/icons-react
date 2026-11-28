import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3xewj52p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3xewj52p"/>`,
		"fallback": "noviair-light:yen",
	});
}

export default Component;
