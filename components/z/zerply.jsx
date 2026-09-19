import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juqe5accg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juqe5accg"/>`,
		"fallback": "cib:zerply",
	});
}

export default Component;
