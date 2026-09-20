import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki_xp1ban.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki_xp1ban"/>`,
		"fallback": "temaki:zoo",
	});
}

export default Component;
