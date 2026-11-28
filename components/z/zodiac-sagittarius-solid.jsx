import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut-0zoohp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut-0zoohp"/>`,
		"fallback": "iconaut:zodiac-sagittarius-solid",
	});
}

export default Component;
