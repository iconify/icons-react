import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb1zz1gdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb1zz1gdg"/>`,
		"fallback": "griddy-icons:youtube-filled",
	});
}

export default Component;
