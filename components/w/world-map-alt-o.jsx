import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld3-dq87l.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld3-dq87l"/>`,
		"fallback": "gis:world-map-alt-o",
	});
}

export default Component;
