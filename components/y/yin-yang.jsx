import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcvyz99kw.css';
import '../../css/x/x3cg0r7yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcvyz99kw"/><path class="x3cg0r7yx"/>`,
		"fallback": "boxicons:yin-yang",
	});
}

export default Component;
