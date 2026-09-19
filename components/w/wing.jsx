import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt1yw8cpo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt1yw8cpo"/>`,
		"fallback": "at-icons:wing",
	});
}

export default Component;
