import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w774m13-a.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w774m13-a"/>`,
		"fallback": "wi:wu-mostlycloudy",
	});
}

export default Component;
