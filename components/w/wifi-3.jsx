import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gokkrac0z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gokkrac0z"/>`,
		"fallback": "fa7-solid:wifi-3",
	});
}

export default Component;
