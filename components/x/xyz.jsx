import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q50k_sb2s.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q50k_sb2s"/>`,
		"fallback": "gis:xyz",
	});
}

export default Component;
