import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za2oecbdo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za2oecbdo"/>`,
		"fallback": "selfhst:yabin-dark",
	});
}

export default Component;
