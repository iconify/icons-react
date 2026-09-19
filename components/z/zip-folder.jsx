import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ohz8stp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ohz8stp"/>`,
		"fallback": "fluent-mdl2:zip-folder",
	});
}

export default Component;
