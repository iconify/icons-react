import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndgwe3cri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndgwe3cri"/>`,
		"fallback": "selfhst:zublo-light",
	});
}

export default Component;
