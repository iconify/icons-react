import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9z5zpb3a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9z5zpb3a"/>`,
		"fallback": "glyphs:yield-sign-outline",
	});
}

export default Component;
