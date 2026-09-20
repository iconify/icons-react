import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em4_z4t5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="em4_z4t5w"/>`,
		"fallback": "streamline-sharp-color:wrench-flat",
	});
}

export default Component;
