import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i8g04wnih.css';
import '../../css/p/p9jlw9bmd.css';
import '../../css/n/npnurpite.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i8g04wnih"/><path class="p9jlw9bmd"/><path class="npnurpite"/></g>`,
		"fallback": "iconaut:zodiac-pisces-duo",
	});
}

export default Component;
