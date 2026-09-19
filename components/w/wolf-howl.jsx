import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqf-fkblf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqf-fkblf"/>`,
		"fallback": "game-icons:wolf-howl",
	});
}

export default Component;
