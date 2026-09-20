import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoorgtbar.css';
import '../../css/k/ks42vwnso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoorgtbar"/><path clip-rule="evenodd" class="ks42vwnso"/>`,
		"fallback": "si:webcam-fill",
	});
}

export default Component;
