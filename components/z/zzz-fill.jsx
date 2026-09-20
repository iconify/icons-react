import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp1_m2brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp1_m2brf"/>`,
		"fallback": "ri:zzz-fill",
	});
}

export default Component;
