import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfyz_vbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfyz_vbco"/>`,
		"fallback": "coolicons:window-check-round",
	});
}

export default Component;
