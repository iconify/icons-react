import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o81h3dbhb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o81h3dbhb"/>`,
		"fallback": "pinhead:wolf-head-and-exclamation-point",
	});
}

export default Component;
