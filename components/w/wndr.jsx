import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0rhc6bwk.css';
import '../../css/v/v73yovbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0rhc6bwk"/><path class="v73yovbwg"/>`,
		"fallback": "token:wndr",
	});
}

export default Component;
