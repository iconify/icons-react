import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-pephb5c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-pephb5c"/>`,
		"fallback": "uiw:woman",
	});
}

export default Component;
