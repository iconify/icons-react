import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv53odbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv53odbaq"/>`,
		"fallback": "thesvg-color:youtube-shorts",
	});
}

export default Component;
