import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eest8db3t.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eest8db3t"/>`,
		"fallback": "wpf:weddingcake",
	});
}

export default Component;
