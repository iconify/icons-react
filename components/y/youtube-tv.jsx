import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oji7_mciu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oji7_mciu"/>`,
		"fallback": "thesvg-color:youtube-tv",
	});
}

export default Component;
