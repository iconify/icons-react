import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igpenwb0g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igpenwb0g"/>`,
		"fallback": "selfhst:xwiki-light",
	});
}

export default Component;
