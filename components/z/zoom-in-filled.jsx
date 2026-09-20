import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gza2r1ukg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gza2r1ukg"/>`,
		"fallback": "tabler:zoom-in-filled",
	});
}

export default Component;
