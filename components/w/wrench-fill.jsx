import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5vyj-bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5vyj-bwv"/>`,
		"fallback": "ri:wrench-fill",
	});
}

export default Component;
