import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lix6-_buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lix6-_buc"/>`,
		"fallback": "hugeicons:wps-office",
	});
}

export default Component;
