import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyi7gccyf.css';
import '../../css/u/u86mi1b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyi7gccyf"/><path class="u86mi1b2l"/>`,
		"fallback": "uim:youtube",
	});
}

export default Component;
