import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgk_s4scd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgk_s4scd"/>`,
		"fallback": "lineicons:youtube",
	});
}

export default Component;
