import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roq8pmsyi.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roq8pmsyi"/>`,
		"fallback": "whh:zodiacscorpio",
	});
}

export default Component;
