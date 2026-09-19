import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfomj3bef.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfomj3bef"/>`,
		"fallback": "cib:webcomponents-org",
	});
}

export default Component;
