import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re-sap6xo.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re-sap6xo"/>`,
		"fallback": "ps:yahoo",
	});
}

export default Component;
