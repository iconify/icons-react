import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzzgpv2kq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzzgpv2kq"/>`,
		"fallback": "selfhst:yoink-light",
	});
}

export default Component;
