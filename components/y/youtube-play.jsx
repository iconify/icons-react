import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvk456bgx.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvk456bgx"/>`,
		"fallback": "fontisto:youtube-play",
	});
}

export default Component;
