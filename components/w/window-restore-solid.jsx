import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0i15fbfo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0i15fbfo"/>`,
		"fallback": "la:window-restore-solid",
	});
}

export default Component;
