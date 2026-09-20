import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptw17bc-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptw17bc-m"/>`,
		"fallback": "selfhst:yacreader-light",
	});
}

export default Component;
