import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7umjn-ne.css';
import '../../css/s/sudo-1bgw.css';
import '../../css/x/xiv3z4bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7umjn-ne"/><path class="sudo-1bgw"/><path class="xiv3z4bcn"/></g>`,
		"fallback": "keyline-icons:wifi-x-two-tone",
	});
}

export default Component;
