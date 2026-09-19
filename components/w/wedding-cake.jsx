import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwe8ukbwy.css';

const viewBox = {"width":1664,"height":1920};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwe8ukbwy"/>`,
		"fallback": "vs:wedding-cake",
	});
}

export default Component;
