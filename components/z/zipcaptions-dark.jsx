import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwv_ujx8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwv_ujx8m"/>`,
		"fallback": "selfhst:zipcaptions-dark",
	});
}

export default Component;
