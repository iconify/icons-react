import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs48b569s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs48b569s"/>`,
		"fallback": "fa-solid:wind",
	});
}

export default Component;
