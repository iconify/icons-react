import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opn9adbzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opn9adbzy"/>`,
		"fallback": "game-icons:white-tower",
	});
}

export default Component;
