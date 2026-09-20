import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thw8f5_hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thw8f5_hf"/>`,
		"fallback": "thesvg-color:youtube-gaming",
	});
}

export default Component;
