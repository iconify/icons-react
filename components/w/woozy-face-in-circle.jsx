import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz30cqbhk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz30cqbhk"/>`,
		"fallback": "pinhead:woozy-face-in-circle",
	});
}

export default Component;
