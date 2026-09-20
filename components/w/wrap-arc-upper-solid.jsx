import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3nod0w5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a3nod0w5k"/>`,
		"fallback": "streamline-flex:wrap-arc-upper-solid",
	});
}

export default Component;
