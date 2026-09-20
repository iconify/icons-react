import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4-qo_bqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4-qo_bqz"/>`,
		"fallback": "selfhst:wigwam-dark",
	});
}

export default Component;
