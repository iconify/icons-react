import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4bk81bok.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4bk81bok"/>`,
		"fallback": "carbon:z-systems",
	});
}

export default Component;
