import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yev3sduco.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yev3sduco"/>`,
		"fallback": "whh:zodiacaquarius",
	});
}

export default Component;
