import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf4-oobbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf4-oobbd"/>`,
		"fallback": "selfhst:yacreader-dark",
	});
}

export default Component;
