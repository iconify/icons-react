import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quwhw5n6v.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quwhw5n6v"/>`,
		"fallback": "whh:zodiacpisces",
	});
}

export default Component;
