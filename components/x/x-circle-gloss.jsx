import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ber-z8qlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ber-z8qlk"/>`,
		"fallback": "withicons:x-circle-gloss",
	});
}

export default Component;
