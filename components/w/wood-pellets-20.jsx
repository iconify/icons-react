import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdz9c9buk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdz9c9buk"/>`,
		"fallback": "energy-icons:wood-pellets-20",
	});
}

export default Component;
