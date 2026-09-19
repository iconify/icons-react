import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlz7jq-ne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlz7jq-ne"/>`,
		"fallback": "game-icons:wood-club",
	});
}

export default Component;
