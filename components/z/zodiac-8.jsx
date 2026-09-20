import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nym03yq8i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nym03yq8i"/>`,
		"fallback": "streamline:zodiac-8",
	});
}

export default Component;
