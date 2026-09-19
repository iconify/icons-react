import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z84ptac3k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z84ptac3k"/>`,
		"fallback": "fa7-brands:yarn",
	});
}

export default Component;
