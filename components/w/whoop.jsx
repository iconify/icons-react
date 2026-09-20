import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddx_2psae.css';

const viewBox = {"width":39,"height":39};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddx_2psae"/>`,
		"fallback": "thesvg-color:whoop",
	});
}

export default Component;
