import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2csmvb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2csmvb5r"/>`,
		"fallback": "tabler:zzz-off",
	});
}

export default Component;
