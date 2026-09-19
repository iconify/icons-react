import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsikqpeid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsikqpeid"/>`,
		"fallback": "game-icons:woman-elf-face",
	});
}

export default Component;
