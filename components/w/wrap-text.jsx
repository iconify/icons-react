import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9zy8wb3n.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9zy8wb3n"/>`,
		"fallback": "zmdi:wrap-text",
	});
}

export default Component;
