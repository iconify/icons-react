import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atm5b0wqg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atm5b0wqg"/>`,
		"fallback": "pullo:whistle-bold",
	});
}

export default Component;
