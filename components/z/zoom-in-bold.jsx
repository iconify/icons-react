import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kszna-b5w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kszna-b5w"/>`,
		"fallback": "glyphs:zoom-in-bold",
	});
}

export default Component;
