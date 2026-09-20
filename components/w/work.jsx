import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj1d7bwxo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wj1d7bwxo"/>`,
		"fallback": "pajamas:work",
	});
}

export default Component;
