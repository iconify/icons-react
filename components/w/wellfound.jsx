import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfms_lx4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfms_lx4w"/>`,
		"fallback": "thesvg-color:wellfound",
	});
}

export default Component;
