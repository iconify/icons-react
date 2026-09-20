import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x98azqb0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x98azqb0y"/>`,
		"fallback": "ix:xml-document",
	});
}

export default Component;
