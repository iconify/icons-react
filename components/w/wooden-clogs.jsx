import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuu0zjbrp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuu0zjbrp"/>`,
		"fallback": "game-icons:wooden-clogs",
	});
}

export default Component;
