import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9w22fbwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9w22fbwr"/>`,
		"fallback": "game-icons:wok",
	});
}

export default Component;
