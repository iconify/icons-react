import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtfubq9bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtfubq9bf"/>`,
		"fallback": "tabler:zoom-out-filled",
	});
}

export default Component;
