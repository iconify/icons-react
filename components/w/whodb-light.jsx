import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz2fis0uk.css';
import '../../css/v/v2kg9llkn.css';
import '../../css/z/z0e_fjb2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz2fis0uk"/><path class="v2kg9llkn"/><path class="z0e_fjb2q"/>`,
		"fallback": "selfhst:whodb-light",
	});
}

export default Component;
