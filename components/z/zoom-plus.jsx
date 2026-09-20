import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjtwddpqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjtwddpqu"/>`,
		"fallback": "subway:zoom-plus",
	});
}

export default Component;
