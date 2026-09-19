import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwg2n69-k.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwg2n69-k"/>`,
		"fallback": "el:wrench-alt",
	});
}

export default Component;
