import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihfwy-njj.css';
import '../../css/v/v2nlyobhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihfwy-njj"/><path class="v2nlyobhn"/>`,
		"fallback": "pixel:writing",
	});
}

export default Component;
