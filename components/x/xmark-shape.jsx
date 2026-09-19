import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0i496bon.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0i496bon"/>`,
		"fallback": "gravity-ui:xmark-shape",
	});
}

export default Component;
