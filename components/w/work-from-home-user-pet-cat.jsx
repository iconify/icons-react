import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shkk78fvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="shkk78fvc"/>`,
		"fallback": "streamline-freehand:work-from-home-user-pet-cat",
	});
}

export default Component;
