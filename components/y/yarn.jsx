import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm0c7-bxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm0c7-bxh"/>`,
		"fallback": "cib:yarn",
	});
}

export default Component;
