import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-22zlb2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-22zlb2w"/>`,
		"fallback": "game-icons:wizard-face",
	});
}

export default Component;
