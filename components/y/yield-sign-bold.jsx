import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghnb59b3i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghnb59b3i"/>`,
		"fallback": "glyphs:yield-sign-bold",
	});
}

export default Component;
