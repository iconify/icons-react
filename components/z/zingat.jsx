import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b40l44b6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b40l44b6j"/>`,
		"fallback": "cib:zingat",
	});
}

export default Component;
