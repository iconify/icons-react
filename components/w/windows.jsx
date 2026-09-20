import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4nnf_b0m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4nnf_b0m"/>`,
		"fallback": "uiw:windows",
	});
}

export default Component;
