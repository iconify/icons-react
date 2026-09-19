import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0k7v5bvi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0k7v5bvi"/>`,
		"fallback": "gis:zoom-out",
	});
}

export default Component;
