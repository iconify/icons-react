import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba_ehlbcp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ba_ehlbcp"/>`,
		"fallback": "glyphs:wifi-100-outline",
	});
}

export default Component;
