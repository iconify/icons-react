import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifyke3bvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifyke3bvm"/>`,
		"fallback": "ion:wine-sharp",
	});
}

export default Component;
