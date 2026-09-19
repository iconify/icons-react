import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7g2i_2hv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7g2i_2hv"/>`,
		"fallback": "cil:wrap-text",
	});
}

export default Component;
