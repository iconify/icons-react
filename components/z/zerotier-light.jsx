import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1xy5i58a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1xy5i58a"/>`,
		"fallback": "selfhst:zerotier-light",
	});
}

export default Component;
