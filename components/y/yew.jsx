import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgy3_4bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgy3_4bxd"/>`,
		"fallback": "thesvg-color:yew",
	});
}

export default Component;
