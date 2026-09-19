import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1ctmp0vf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1ctmp0vf"/>`,
		"fallback": "fa7-solid:wine-glass",
	});
}

export default Component;
