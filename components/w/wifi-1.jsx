import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-o8jnbxm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-o8jnbxm"/>`,
		"fallback": "glyphs:wifi-1",
	});
}

export default Component;
