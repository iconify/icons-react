import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foaxbkmhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foaxbkmhl"/>`,
		"fallback": "hugeicons:wifi-cog",
	});
}

export default Component;
