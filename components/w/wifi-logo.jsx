import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mds117d_s.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mds117d_s"/>`,
		"fallback": "fontisto:wifi-logo",
	});
}

export default Component;
